import { AuthService } from "./auth.service.js";
import { LoginDto } from "./dto/login.dto.js";
import { RegisterDto } from "./dto/register.dto.js";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        id: string;
        createdAt: Date;
        email: string;
        employeeId: string | null;
        role: import("../generated/prisma/enums.js").Role;
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
        tokenType: string;
    }>;
    getProfile(req: {
        user: {
            userId: string;
            email: string;
            role: string;
            employeeId: string | null;
        };
    }): {
        userId: string;
        email: string;
        role: string;
        employeeId: string | null;
    };
    adminTest(): {
        message: string;
    };
}
