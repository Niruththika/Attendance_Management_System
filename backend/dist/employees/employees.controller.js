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
import { Body, Controller, Get, Param, Patch, Post, UseGuards, } from "@nestjs/common";
import { EmployeesService } from "./employees.service.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { RolesGuard } from "../auth/guards/roles.guard.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { RecordStatus } from "../generated/prisma/client.js";
import { CreateEmployeeDto } from "./dto/create-employee.dto.js";
import { UpdateEmployeeDto } from "./dto/update-employee.dto.js";
import { CreateEmployeeLoginDto } from "./dto/create-employee-login.dto.js";
let EmployeesController = class EmployeesController {
    employeesService;
    constructor(employeesService) {
        this.employeesService = employeesService;
    }
    findAll() {
        return this.employeesService.findAll();
    }
    findManagers() {
        return this.employeesService.findManagers();
    }
    create(dto) {
        return this.employeesService.create(dto);
    }
    update(id, dto) {
        return this.employeesService.update(id, dto);
    }
    updateStatus(id, status) {
        return this.employeesService.updateStatus(id, status);
    }
    createLoginAccount(id, dto) {
        return this.employeesService.createLoginAccount(id, dto);
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "findAll", null);
__decorate([
    Get("managers"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "findManagers", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateEmployeeDto]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "create", null);
__decorate([
    Patch(":id"),
    __param(0, Param("id")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateEmployeeDto]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "update", null);
__decorate([
    Patch(":id/status"),
    __param(0, Param("id")),
    __param(1, Body("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "updateStatus", null);
__decorate([
    Post(":id/login-account"),
    __param(0, Param("id")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateEmployeeLoginDto]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "createLoginAccount", null);
EmployeesController = __decorate([
    Controller("employees"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN"),
    __metadata("design:paramtypes", [EmployeesService])
], EmployeesController);
export { EmployeesController };
//# sourceMappingURL=employees.controller.js.map