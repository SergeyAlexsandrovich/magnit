import { HttpException, HttpStatus } from "@nestjs/common";

export class TemplateNotFoundException extends HttpException {
    constructor(message: string) {
        super(
            {
                errorCode: 0,
                error: "Not Found",
                message,
                statusCode: HttpStatus.NOT_FOUND,
            },
            HttpStatus.NOT_FOUND,
        );
    }
}
