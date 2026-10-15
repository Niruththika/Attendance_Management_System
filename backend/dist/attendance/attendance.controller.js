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
import { Body, Controller, Get, Query, Post, Request, UseGuards, } from "@nestjs/common";
import { AttendanceService } from "./attendance.service.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { StartBreakDto } from "./dto/start-break.dto.js";
let AttendanceController = class AttendanceController {
    attendanceService;
    constructor(attendanceService) {
        this.attendanceService = attendanceService;
    }
    clockIn(req) {
        return this.attendanceService.clockIn(req.user.userId);
    }
    clockOut(req) {
        return this.attendanceService.clockOut(req.user.userId);
    }
    startBreak(req, dto) {
        return this.attendanceService.startBreak(req.user.userId, dto.breakType);
    }
    endBreak(req) {
        return this.attendanceService.endBreak(req.user.userId);
    }
    getHistory(req) {
        return this.attendanceService.getHistory(req.user.userId);
    }
    getManagerDailyAttendance(req, date) {
        return this.attendanceService.getManagerDailyAttendance(req.user.userId, date);
    }
    getDailyAttendance(req, date) {
        return this.attendanceService.getDailyAttendance(req.user.userId, date);
    }
};
__decorate([
    Post("clock-in"),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "clockIn", null);
__decorate([
    Post("clock-out"),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "clockOut", null);
__decorate([
    Post("break/start"),
    __param(0, Request()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, StartBreakDto]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "startBreak", null);
__decorate([
    Post("break/end"),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "endBreak", null);
__decorate([
    Get("history"),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "getHistory", null);
__decorate([
    Get("manager/daily"),
    __param(0, Request()),
    __param(1, Query("date")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "getManagerDailyAttendance", null);
__decorate([
    Get("admin/daily"),
    __param(0, Request()),
    __param(1, Query("date")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "getDailyAttendance", null);
AttendanceController = __decorate([
    Controller("attendance"),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [AttendanceService])
], AttendanceController);
export { AttendanceController };
//# sourceMappingURL=attendance.controller.js.map