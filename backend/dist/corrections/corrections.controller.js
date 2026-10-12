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
import { Body, Controller, Get, Patch, Param, Post, Request, UseGuards, } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { CorrectionsService } from "./corrections.service.js";
let CorrectionsController = class CorrectionsController {
    correctionsService;
    constructor(correctionsService) {
        this.correctionsService = correctionsService;
    }
    createRequest(req, body) {
        return this.correctionsService.createRequest(req.user.userId, body.sessionId, body.reason, body.proposedIn, body.proposedOut);
    }
    getMyRequests(req) {
        return this.correctionsService.getMyRequests(req.user.userId);
    }
    getPendingRequests(req) {
        return this.correctionsService.getPendingRequests(req.user.userId);
    }
    reviewRequest(req, id, body) {
        return this.correctionsService.reviewRequest(req.user.userId, id, body.decision, body.reviewNote);
    }
};
__decorate([
    Post(),
    __param(0, Request()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CorrectionsController.prototype, "createRequest", null);
__decorate([
    Get("my-requests"),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CorrectionsController.prototype, "getMyRequests", null);
__decorate([
    Get("pending"),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CorrectionsController.prototype, "getPendingRequests", null);
__decorate([
    Patch(":id/review"),
    __param(0, Request()),
    __param(1, Param("id")),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], CorrectionsController.prototype, "reviewRequest", null);
CorrectionsController = __decorate([
    Controller("corrections"),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [CorrectionsService])
], CorrectionsController);
export { CorrectionsController };
//# sourceMappingURL=corrections.controller.js.map