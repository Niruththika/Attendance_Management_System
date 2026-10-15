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
import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards, } from "@nestjs/common";
import { ShiftsService } from "./shifts.service.js";
import { CreateShiftDto } from "./dto/create-shift.dto.js";
import { UpdateShiftDto } from "./dto/update-shift.dto.js";
import { AssignShiftDto } from "./dto/assign-shift.dto.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { RolesGuard } from "../auth/guards/roles.guard.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
let ShiftsController = class ShiftsController {
    shiftsService;
    constructor(shiftsService) {
        this.shiftsService = shiftsService;
    }
    create(dto) {
        return this.shiftsService.create(dto);
    }
    findAll() {
        return this.shiftsService.findAll();
    }
    update(id, dto) {
        return this.shiftsService.update(id, dto);
    }
    assign(dto) {
        return this.shiftsService.assign(dto);
    }
    getMyShift(req) {
        return this.shiftsService.getMyShift(req.user.userId);
    }
    test() {
        return {
            message: "Shifts API is working",
        };
    }
};
__decorate([
    Post(),
    UseGuards(RolesGuard),
    Roles("ADMIN"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateShiftDto]),
    __metadata("design:returntype", void 0)
], ShiftsController.prototype, "create", null);
__decorate([
    Get(),
    UseGuards(RolesGuard),
    Roles("ADMIN"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftsController.prototype, "findAll", null);
__decorate([
    Patch(":id"),
    UseGuards(RolesGuard),
    Roles("ADMIN"),
    __param(0, Param("id")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateShiftDto]),
    __metadata("design:returntype", void 0)
], ShiftsController.prototype, "update", null);
__decorate([
    Post("assign"),
    UseGuards(RolesGuard),
    Roles("ADMIN"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AssignShiftDto]),
    __metadata("design:returntype", void 0)
], ShiftsController.prototype, "assign", null);
__decorate([
    Get("my"),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ShiftsController.prototype, "getMyShift", null);
__decorate([
    Get("test"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftsController.prototype, "test", null);
ShiftsController = __decorate([
    Controller("shifts"),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [ShiftsService])
], ShiftsController);
export { ShiftsController };
//# sourceMappingURL=shifts.controller.js.map