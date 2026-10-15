var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsEmail, IsEnum, IsOptional, IsString, MaxLength, MinLength, } from "class-validator";
import { RecordStatus } from "../../generated/prisma/client.js";
export class CreateEmployeeDto {
    employeeCode;
    name;
    email;
    status;
    teamId;
    managerId;
}
__decorate([
    IsString(),
    MinLength(1),
    MaxLength(50),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "employeeCode", void 0);
__decorate([
    IsString(),
    MinLength(1),
    MaxLength(100),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "name", void 0);
__decorate([
    IsEmail(),
    MaxLength(254),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "email", void 0);
__decorate([
    IsOptional(),
    IsEnum(RecordStatus),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "status", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", Object)
], CreateEmployeeDto.prototype, "teamId", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", Object)
], CreateEmployeeDto.prototype, "managerId", void 0);
//# sourceMappingURL=create-employee.dto.js.map