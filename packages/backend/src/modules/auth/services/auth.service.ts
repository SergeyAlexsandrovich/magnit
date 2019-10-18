import { Injectable } from "@nestjs/common";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { UserExistException } from "../../../shared/exceptions/user-exist.exception";
import { UserNotFoundException } from "../../../shared/exceptions/user-not-found.exception";
import { UserUnauthorizedException } from "../../../shared/exceptions/user-unauthorized.exception";
import { User } from "../../user/entities/user.entity";
import { UserService } from "../../user/services/user.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { LoginUserDto } from "../dto/login-user.dto";
import { JWTTokenManager } from "../providers/jwt.token.manager";
import { PasswordManager } from "../providers/password.manager";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly passwordManager: PasswordManager,
        private readonly jwtTokenManager: JWTTokenManager<{
            id: number;
            id_role: number;
            email: string;
        }>,
    ) {}

    async validateUser(email: string, pass: string) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new UserNotFoundException("User not found");
        }
        if (pass === this.passwordManager.decode(user.password)) {
            return user;
        }
        throw new UserUnauthorizedException("Cannot authorize user");
    }

    @Transactional()
    async register(userDto: CreateUserDto) {
        const user = new User(userDto);
        const role = await this.userService.getAdminRole();
        user.id_role = role.id;
        await this.createUser(user);
        const token = this.getTokenFor(user);
        return { success: 1, id: user.id, token };
    }

    @Transactional()
    async login(loginUserDto: LoginUserDto) {
        const user = await this.validateUser(loginUserDto.email, loginUserDto.password);
        const token = this.getTokenFor(user);
        return { success: 1, id: user.id, token };
    }

    private async createUser(user: User) {
        const userExists = await this.userService.findOneByEmail(user.email);
        if (userExists) {
            throw new UserExistException("User already exist");
        }
        user.password = this.passwordManager.encode(user.password);
        return this.userService.create(user);
    }

    private getTokenFor(user: User): string {
        const payload = {
            email: user.email,
            id: user.id,
            id_role: user.id_role,
        };
        return this.jwtTokenManager.encode(payload);
    }
}
