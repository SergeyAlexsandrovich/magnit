import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import {
    ApiConflictResponse,
    ApiOkResponse,
    ApiUnauthorizedResponse,
    ApiUseTags,
} from "@nestjs/swagger";
import { ValidationPipe } from "../../shared/pipes/validation.pipe";
import { ErrorResponse } from "../../shared/responses/error.response";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { LoginUserResponse } from "./responses/login-user.response";
import { AuthService } from "./services/auth.service";

@ApiUseTags("auth")
@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/register")
    @UsePipes(ValidationPipe)
    @ApiOkResponse({ type: LoginUserResponse, description: "User successfully registered" })
    @ApiConflictResponse({ description: "User already exist", type: ErrorResponse })
    async register(@Body() createUserDto: CreateUserDto) {
        return this.authService.register(createUserDto);
    }

    @Post("/login")
    @UsePipes(ValidationPipe)
    @ApiOkResponse({ type: LoginUserResponse, description: "User successfully authorized" })
    @ApiUnauthorizedResponse({ description: "Cannot authorize user", type: ErrorResponse })
    async login(@Body() loginUserDto: LoginUserDto) {
        return this.authService.login(loginUserDto);
    }
}
