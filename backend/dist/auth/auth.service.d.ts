import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service.js";
import { RegisterDto } from "./dto/register.dto.js";
import { LoginDto } from "./dto/login.dto.js";
import { Role } from "../generated/prisma/client.js";
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    private isValidSetupKey;
    register(dto: RegisterDto, setupKey?: string): Promise<{
        email: string;
        role: Role;
        id: string;
        employeeId: string | null;
        createdAt: Date;
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
        tokenType: string;
    }>;
    createManager(dto: RegisterDto): Promise<{
        email: string;
        role: Role;
        id: string;
        employeeId: string | null;
        createdAt: Date;
    }>;
    createAdmin(dto: RegisterDto): Promise<{
        email: string;
        role: Role;
        id: string;
        employeeId: string | null;
        createdAt: Date;
    }>;
}
