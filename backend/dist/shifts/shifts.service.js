var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ConflictException, Injectable, NotFoundException, } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { RecordStatus } from "../generated/prisma/client.js";
let ShiftsService = class ShiftsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        this.validateTimezone(dto.timezone);
        return this.prisma.shift.create({
            data: {
                ...dto,
                status: RecordStatus.ACTIVE,
            },
        });
    }
    async findAll() {
        return this.prisma.shift.findMany({
            include: {
                assignments: {
                    include: {
                        employee: {
                            select: {
                                id: true,
                                employeeCode: true,
                                name: true,
                                email: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                name: "asc",
            },
        });
    }
    async update(id, dto) {
        const existing = await this.prisma.shift.findUnique({
            where: { id },
        });
        if (!existing) {
            throw new NotFoundException("Shift not found");
        }
        if (dto.timezone) {
            this.validateTimezone(dto.timezone);
        }
        return this.prisma.shift.update({
            where: { id },
            data: dto,
        });
    }
    async assign(dto) {
        const from = this.parseDate(dto.effectiveFrom, "effectiveFrom");
        const to = dto.effectiveTo
            ? this.parseDate(dto.effectiveTo, "effectiveTo")
            : null;
        if (to && to.getTime() < from.getTime()) {
            throw new BadRequestException("effectiveTo must be on or after effectiveFrom");
        }
        const [employee, shift] = await Promise.all([
            this.prisma.employee.findUnique({
                where: { id: dto.employeeId },
                select: {
                    id: true,
                    status: true,
                },
            }),
            this.prisma.shift.findUnique({
                where: { id: dto.shiftId },
                select: {
                    id: true,
                    status: true,
                },
            }),
        ]);
        if (!employee || employee.status !== RecordStatus.ACTIVE) {
            throw new NotFoundException("Active employee not found");
        }
        if (!shift || shift.status !== RecordStatus.ACTIVE) {
            throw new NotFoundException("Active shift not found");
        }
        const overlapping = await this.prisma.shiftAssignment.findFirst({
            where: {
                employeeId: dto.employeeId,
                effectiveFrom: {
                    lte: to ?? new Date("9999-12-31T00:00:00.000Z"),
                },
                OR: [
                    { effectiveTo: null },
                    { effectiveTo: { gte: from } },
                ],
            },
        });
        if (overlapping) {
            throw new ConflictException("This employee already has a shift assignment during that period. End the previous assignment first.");
        }
        return this.prisma.shiftAssignment.create({
            data: {
                employeeId: dto.employeeId,
                shiftId: dto.shiftId,
                effectiveFrom: from,
                effectiveTo: to,
            },
            include: {
                employee: true,
                shift: true,
            },
        });
    }
    async getMyShift(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                employeeId: true,
            },
        });
        if (!user?.employeeId) {
            throw new BadRequestException("Your account is not linked to an employee record");
        }
        const now = new Date();
        const assignments = await this.prisma.shiftAssignment.findMany({
            where: {
                employeeId: user.employeeId,
                shift: {
                    status: RecordStatus.ACTIVE,
                },
            },
            include: {
                shift: true,
            },
            orderBy: {
                effectiveFrom: "desc",
            },
        });
        const assignment = assignments.find((item) => {
            const parts = new Intl.DateTimeFormat("en-US", {
                timeZone: item.shift.timezone,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            }).formatToParts(now);
            const getPart = (type) => {
                const value = parts.find((part) => part.type === type)?.value;
                if (!value) {
                    throw new BadRequestException("Could not determine the current date for the shift timezone");
                }
                return Number(value);
            };
            const year = getPart("year");
            const month = getPart("month");
            const day = getPart("day");
            const today = Date.UTC(year, month - 1, day);
            const effectiveFrom = item.effectiveFrom.getTime();
            const effectiveTo = item.effectiveTo?.getTime();
            return (effectiveFrom <= today &&
                (effectiveTo == null || effectiveTo >= today));
        });
        return assignment?.shift ?? null;
    }
    parseDate(value, field) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
            throw new BadRequestException(`${field} must use YYYY-MM-DD format`);
        }
        const [year, month, day] = value.split("-").map(Number);
        const date = new Date(Date.UTC(year, month - 1, day));
        if (date.getUTCFullYear() !== year ||
            date.getUTCMonth() !== month - 1 ||
            date.getUTCDate() !== day) {
            throw new BadRequestException(`${field} is not a valid date`);
        }
        return date;
    }
    validateTimezone(timezone) {
        try {
            new Intl.DateTimeFormat("en-US", {
                timeZone: timezone,
            });
        }
        catch {
            throw new BadRequestException("Invalid IANA timezone");
        }
    }
};
ShiftsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ShiftsService);
export { ShiftsService };
//# sourceMappingURL=shifts.service.js.map