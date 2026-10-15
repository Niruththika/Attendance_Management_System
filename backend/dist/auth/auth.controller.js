var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards, Headers, } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { LoginDto } from "./dto/login.dto.js";
import { RegisterDto } from "./dto/register.dto.js";
import { JwtAuthGuard } from "./guards/jwt-auth.guard.js";
import { RolesGuard } from "./guards/roles.guard.js";
import { Roles } from "./decorators/roles.decorator.js";
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    register(dto, setupKey) {
        return this.authService.register(dto, setupKey);
    }
    login(dto) {
        return this.authService.login(dto);
    }
    getProfile(req) {
        return req.user;
    }
    adminTest() {
        return { message: "Admin access granted" };
    }
    createAdmin(dto) {
        return this.authService.createAdmin(dto);
    }
    createManager(dto) {
        return this.authService.createManager(dto);
    }
};
__decorate([
    Post("register"),
    __param(0, Body()),
    __param(1, Headers("x-admin-setup-key")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterDto, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    Post("login"),
    HttpCode(HttpStatus.OK),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    Get("profile"),
    UseGuards(JwtAuthGuard),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
__decorate([
    Get("admin-test"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "adminTest", null);
__decorate([
    Post("admins"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "createAdmin", null);
__decorate([
    Post("managers"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "createManager", null);
AuthController = __decorate([
    Controller("auth"),
    __metadata("design:paramtypes", [AuthService])
], AuthController);
export { AuthController };
//# sourceMappingURL=auth.controller.js.map