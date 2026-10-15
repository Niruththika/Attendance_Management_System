var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsArray, IsInt, IsNotEmpty, IsString, Matches, Max, Min, ArrayMinSize, ArrayMaxSize, ArrayUnique, } from "class-validator";
export class CreateShiftDto {
    name;
    startTime;
    endTime;
    timezone;
    workingDays;
    graceMinutes = 0;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreateShiftDto.prototype, "name", void 0);
__decorate([
    IsString(),
    Matches(/^([01]\d|2[0-3]):[0-5]\d$/, {
        message: "startTime must use HH:mm format",
    }),
    __metadata("design:type", String)
], CreateShiftDto.prototype, "startTime", void 0);
__decorate([
    IsString(),
    Matches(/^([01]\d|2[0-3]):[0-5]\d$/, {
        message: "endTime must use HH:mm format",
    }),
    __metadata("design:type", String)
], CreateShiftDto.prototype, "endTime", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreateShiftDto.prototype, "timezone", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(1),
    ArrayMaxSize(7),
    ArrayUnique(),
    IsInt({ each: true }),
    Min(0, { each: true }),
    Max(6, { each: true }),
    __metadata("design:type", Array)
], CreateShiftDto.prototype, "workingDays", void 0);
__decorate([
    IsInt(),
    Min(0),
    Max(1440),
    __metadata("design:type", Number)
], CreateShiftDto.prototype, "graceMinutes", void 0);
//# sourceMappingURL=create-shift.dto.js.map