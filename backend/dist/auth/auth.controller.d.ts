import { AuthService } from "./auth.service.js";
import { LoginDto } from "./dto/login.dto.js";
import { RegisterDto } from "./dto/register.dto.js";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto, setupKey?: string): Promise<{
        email: string;
        role: import("../generated/prisma/enums.js").Role;
        id: string;
        employeeId: string | null;
        createdAt: Date;
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
    createAdmin(dto: RegisterDto): Promise<{
        email: string;
        role: import("../generated/prisma/enums.js").Role;
        id: string;
        employeeId: string | null;
        createdAt: Date;
    }>;
    createManager(dto: RegisterDto): Promise<{
        email: string;
        role: import("../generated/prisma/enums.js").Role;
        id: string;
        employeeId: string | null;
        createdAt: Date;
    }>;
}
