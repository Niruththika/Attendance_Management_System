import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service.js";
import { RegisterDto } from "./dto/register.dto.js";
import { LoginDto } from "./dto/login.dto.js";
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
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
}
