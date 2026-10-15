var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, UnauthorizedException, ConflictException, BadRequestException, ForbiddenException, } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { timingSafeEqual, randomUUID } from "node:crypto";
import * as bcrypt from "bcrypt";
import { PrismaService } from "../prisma/prisma.service.js";
import { RecordStatus, Role, } from "../generated/prisma/client.js";
let AuthService = class AuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    isValidSetupKey(providedKey) {
        const expectedKey = process.env.ADMIN_SETUP_KEY;
        console.log("Setup key loaded:", Boolean(expectedKey));
        console.log("Setup key received:", Boolean(providedKey));
        if (!expectedKey || !providedKey) {
            return false;
        }
        const provided = Buffer.from(providedKey, "utf8");
        const expected = Buffer.from(expectedKey, "utf8");
        if (provided.length !== expected.length) {
            console.log("Setup key lengths do not match");
            return false;
        }
        const isValid = timingSafeEqual(provided, expected);
        console.log("Setup key matches:", isValid);
        return isValid;
    }
    async register(dto, setupKey) {
        const email = dto.email.trim().toLowerCase();
        const name = dto.name.trim();
        if (!name) {
            throw new BadRequestException("Name is required");
        }
        if (dto.role !== Role.EMPLOYEE &&
            dto.role !== Role.ADMIN) {
            throw new ForbiddenException("Public registration is not available for this role");
        }
        if (dto.role === Role.ADMIN) {
            if (!this.isValidSetupKey(setupKey)) {
                throw new ForbiddenException("A valid administrator setup key is required");
            }
            const existingAdmin = await this.prisma.user.findFirst({
                where: { role: Role.ADMIN },
                select: { id: true },
            });
            if (existingAdmin) {
                throw new ConflictException("An administrator account already exists. Use an existing administrator account to manage users.");
            }
        }
        const existingUser = await this.prisma.user.findUnique({
            where: { email },
            select: { id: true },
        });
        if (existingUser) {
            throw new ConflictException("Email is already registered");
        }
        const hashedPassword = await bcrypt.hash(dto.password, 12);
        if (dto.role === Role.ADMIN) {
            return this.prisma.user.create({
                data: {
                    email,
                    passwordHash: hashedPassword,
                    role: Role.ADMIN,
                    status: RecordStatus.ACTIVE,
                    employeeId: null,
                },
                select: {
                    id: true,
                    email: true,
                    role: true,
                    employeeId: true,
                    createdAt: true,
                },
            });
        }
        const existingEmployee = await this.prisma.employee.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: "insensitive",
                },
            },
            select: { id: true },
        });
        if (existingEmployee) {
            throw new ConflictException("An employee with this email already exists");
        }
        return this.prisma.$transaction(async (tx) => {
            const employee = await tx.employee.create({
                data: {
                    employeeCode: `EMP-${randomUUID()}`,
                    name,
                    email,
                    status: RecordStatus.ACTIVE,
                },
            });
            return tx.user.create({
                data: {
                    email,
                    passwordHash: hashedPassword,
                    role: Role.EMPLOYEE,
                    status: RecordStatus.ACTIVE,
                    employeeId: employee.id,
                },
                select: {
                    id: true,
                    email: true,
                    role: true,
                    employeeId: true,
                    createdAt: true,
                },
            });
        });
    }
    async login(dto) {
        const email = dto.email.trim().toLowerCase();
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!user ||
            !(await bcrypt.compare(dto.password, user.passwordHash))) {
            throw new UnauthorizedException("Invalid email or password");
        }
        if (user.status !== RecordStatus.ACTIVE) {
            throw new UnauthorizedException("Your account is inactive");
        }
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
            employeeId: user.employeeId,
        };
        return {
            accessToken: await this.jwtService.signAsync(payload),
            tokenType: "Bearer",
        };
    }
    async createManager(dto) {
        const email = dto.email.trim().toLowerCase();
        const name = dto.name.trim();
        if (!name) {
            throw new BadRequestException("Name is required");
        }
        const existingUser = await this.prisma.user.findUnique({
            where: { email },
            select: { id: true },
        });
        if (existingUser) {
            throw new ConflictException("Email is already registered");
        }
        const existingEmployee = await this.prisma.employee.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: "insensitive",
                },
            },
            select: { id: true },
        });
        if (existingEmployee) {
            throw new ConflictException("An employee with this email already exists");
        }
        const hashedPassword = await bcrypt.hash(dto.password, 12);
        return this.prisma.$transaction(async (tx) => {
            const employee = await tx.employee.create({
                data: {
                    employeeCode: `MGR-${randomUUID()}`,
                    name,
                    email,
                    status: RecordStatus.ACTIVE,
                },
            });
            return tx.user.create({
                data: {
                    email,
                    passwordHash: hashedPassword,
                    role: Role.MANAGER,
                    status: RecordStatus.ACTIVE,
                    employeeId: employee.id,
                },
                select: {
                    id: true,
                    email: true,
                    role: true,
                    employeeId: true,
                    createdAt: true,
                },
            });
        });
    }
    async createAdmin(dto) {
        const email = dto.email.trim().toLowerCase();
        const existingUser = await this.prisma.user.findUnique({
            where: { email },
            select: { id: true },
        });
        if (existingUser) {
            throw new ConflictException("Email is already registered");
        }
        const hashedPassword = await bcrypt.hash(dto.password, 12);
        return this.prisma.user.create({
            data: {
                email,
                passwordHash: hashedPassword,
                role: Role.ADMIN,
                status: RecordStatus.ACTIVE,
                employeeId: null,
            },
            select: {
                id: true,
                email: true,
                role: true,
                employeeId: true,
                createdAt: true,
            },
        });
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        JwtService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map