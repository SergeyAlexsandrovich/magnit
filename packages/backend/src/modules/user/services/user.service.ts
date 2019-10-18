import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RoleNotFoundException } from "../../../shared/exceptions/role-not-found.exception";
import { User } from "../entities/user.entity";
import { UserRole } from "../entities/user.role.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(UserRole)
        private readonly userRoleRepository: Repository<UserRole>,
    ) {}

    async findById(id: number) {
        return this.userRepository.findOne({
            where: { id },
            relations: ["role"],
        });
    }

    async findOneByEmail(email: string) {
        return this.userRepository.findOne({ email: `${email}` });
    }

    async findAll(role?: number) {
        if (role) {
            return this.userRepository.find({
                where: { id_role: role },
            });
        } else {
            return this.userRepository.find();
        }
    }

    async userExistById(id: number) {
        return !!(await this.findById(id));
    }

    async create(user: User) {
        return this.userRepository.save(user);
    }

    async getAdminRole() {
        const role = await this.userRoleRepository.findOne({
            where: { id: +process.env.ADMIN_ROLE_ID },
        });
        if (role) {
            return role;
        }
        throw new RoleNotFoundException("Admin role not found");
    }

    async createRole(role: UserRole) {
        return this.userRoleRepository.query(
            `
                 INSERT INTO user_role ("id","title","description")
                 VALUES ('${role.id}','${role.title}','${role.description}')
             `,
        );
    }
}
