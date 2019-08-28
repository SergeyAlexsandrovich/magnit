import { Inject, Injectable } from "@nestjs/common";
import { User } from "../entities/user.entity";
import { IAuthService } from "../interfaces/auth.service.interface";
import { IUserService } from "../interfaces/user.service.interface";
import { AirwatchUserService } from "./airwatch-user.service";

@Injectable()
export class AirwatchAuthService implements IAuthService {
    constructor(@Inject(AirwatchUserService) private readonly userService: IUserService) {}

    async validateUser(username: string, password: string): Promise<User | undefined> {
        const user = await this.userService.findOne(username);
        // TODO: validate password
        return user;
    }
}