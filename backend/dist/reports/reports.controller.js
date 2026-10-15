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
import { Controller, Get, Query, Request, Res, UseGuards, } from "@nestjs/common";
import * as XLSX from "xlsx";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { ReportsService } from "./reports.service.js";
let ReportsController = class ReportsController {
    reportsService;
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    async exportMonthlyCsv(req, month, teamId, employeeId, res) {
        const report = await this.reportsService.getMonthlyReport(req.user.userId, { month, teamId, employeeId });
        const headers = [
            "Report Month",
            "Employee Code",
            "Employee Name",
            "Email",
            "Team",
            "Present Days",
            "Absent Days",
            "Incomplete Days",
            "Total Gross Minutes",
            "Total Gross Hours",
            "Total Break Minutes",
            "Total Break Hours",
            "Total Net Minutes",
            "Total Net Hours",
            "Pending Corrections",
            "Approved Corrections",
            "Rejected Corrections",
            "Date",
            "Daily Status",
            "Sessions",
            "Daily Gross Minutes",
            "Daily Break Minutes",
            "Daily Net Minutes",
        ];
        const escapeCsv = (value) => {
            let text = value == null ? "" : String(value);
            if (/^[\t\r ]*[=+\-@]/.test(text)) {
                text = "'" + text;
            }
            return `"${text.replace(/"/g, '""')}"`;
        };
        const rows = report.employees.flatMap((employee) => {
            const dailyRecords = employee.daily?.length
                ? employee.daily
                : [null];
            return dailyRecords.map((day) => [
                report.month,
                employee.employeeCode,
                employee.name,
                employee.email,
                employee.team,
                employee.presentDays,
                employee.absentDays,
                employee.incompleteDays,
                employee.grossMinutes,
                Number((employee.grossMinutes / 60).toFixed(2)),
                employee.breakMinutes,
                Number((employee.breakMinutes / 60).toFixed(2)),
                employee.netMinutes,
                Number((employee.netMinutes / 60).toFixed(2)),
                employee.correctionCounts.pending,
                employee.correctionCounts.approved,
                employee.correctionCounts.rejected,
                day?.date ?? "",
                day?.status ?? "",
                day?.sessions ?? "",
                day?.grossMinutes ?? "",
                day?.breakMinutes ?? "",
                day?.netMinutes ?? "",
            ]);
        });
        const csvContent = [
            headers.map(escapeCsv).join(","),
            ...rows.map((row) => row.map(escapeCsv).join(",")),
        ].join("\r\n");
        const safeMonth = /^\d{4}-\d{2}$/.test(month || "")
            ? month
            : "report";
        res.setHeader("Content-Type", "text/csv; charset=utf-8");
        res.setHeader("Content-Disposition", `attachment; filename="attendease-${safeMonth}.csv"`);
        res.send("\uFEFF" + csvContent);
    }
    getMonthly(req, month, teamId, employeeId) {
        return this.reportsService.getMonthlyReport(req.user.userId, { month, teamId, employeeId });
    }
    async exportMonthly(req, month, teamId, employeeId, res) {
        const report = await this.reportsService.getMonthlyReport(req.user.userId, { month, teamId, employeeId });
        const summaryRows = report.employees.map((employee) => ({
            "Employee Code": employee.employeeCode,
            "Employee Name": employee.name,
            Email: employee.email,
            Team: employee.team,
            "Present Days": employee.presentDays,
            "Absent Days": employee.absentDays,
            "Incomplete Days": employee.incompleteDays,
            "Gross Minutes": employee.grossMinutes,
            "Gross Hours": Number((employee.grossMinutes / 60).toFixed(2)),
            "Unpaid Break Minutes": employee.breakMinutes,
            "Unpaid Break Hours": Number((employee.breakMinutes / 60).toFixed(2)),
            "Net Minutes": employee.netMinutes,
            "Net Hours": Number((employee.netMinutes / 60).toFixed(2)),
        }));
        const dailyRows = report.employees.flatMap((employee) => employee.daily.map((day) => ({
            "Employee Code": employee.employeeCode,
            "Employee Name": employee.name,
            Team: employee.team,
            Date: day.date,
            Status: day.status,
            Sessions: day.sessions,
            "Gross Minutes": day.grossMinutes,
            "Gross Hours": Number((day.grossMinutes / 60).toFixed(2)),
            "Unpaid Break Minutes": day.breakMinutes,
            "Unpaid Break Hours": Number((day.breakMinutes / 60).toFixed(2)),
            "Net Minutes": day.netMinutes,
            "Net Hours": Number((day.netMinutes / 60).toFixed(2)),
        })));
        const infoRows = [
            ["Report", "AttendEase Monthly Attendance Report"],
            ["Month", report.month],
            ["Timezone", report.timezone],
            ["Working Days in Period", report.workingDays],
            ["Employees Included", report.employeeCount],
            ["Present Employee-Days", report.totals.presentDays],
            ["Absent Employee-Days", report.totals.absentDays],
            ["Incomplete Employee-Days", report.totals.incompleteDays],
            [
                "Total Net Working Hours",
                Number((report.totals.netMinutes / 60).toFixed(2)),
            ],
            ["Reporting Assumptions", report.note],
        ];
        const workbook = XLSX.utils.book_new();
        const summarySheet = XLSX.utils.json_to_sheet(summaryRows);
        const dailySheet = XLSX.utils.json_to_sheet(dailyRows);
        const infoSheet = XLSX.utils.aoa_to_sheet(infoRows);
        summarySheet["!cols"] = [
            { wch: 18 },
            { wch: 26 },
            { wch: 30 },
            { wch: 20 },
            { wch: 14 },
            { wch: 14 },
            { wch: 17 },
            { wch: 16 },
            { wch: 14 },
            { wch: 22 },
            { wch: 20 },
            { wch: 14 },
            { wch: 14 },
        ];
        dailySheet["!cols"] = [
            { wch: 18 },
            { wch: 26 },
            { wch: 20 },
            { wch: 14 },
            { wch: 16 },
            { wch: 12 },
            { wch: 16 },
            { wch: 14 },
            { wch: 22 },
            { wch: 20 },
            { wch: 14 },
            { wch: 14 },
        ];
        infoSheet["!cols"] = [
            { wch: 30 },
            { wch: 100 },
        ];
        if (summaryRows.length > 0) {
            summarySheet["!autofilter"] = {
                ref: XLSX.utils.encode_range({
                    s: { r: 0, c: 0 },
                    e: {
                        r: summaryRows.length,
                        c: Object.keys(summaryRows[0]).length - 1,
                    },
                }),
            };
        }
        if (dailyRows.length > 0) {
            dailySheet["!autofilter"] = {
                ref: XLSX.utils.encode_range({
                    s: { r: 0, c: 0 },
                    e: {
                        r: dailyRows.length,
                        c: Object.keys(dailyRows[0]).length - 1,
                    },
                }),
            };
        }
        summarySheet["!freeze"] = {
            xSplit: 0,
            ySplit: 1,
        };
        dailySheet["!freeze"] = {
            xSplit: 0,
            ySplit: 1,
        };
        XLSX.utils.book_append_sheet(workbook, summarySheet, "Monthly Summary");
        XLSX.utils.book_append_sheet(workbook, dailySheet, "Daily Details");
        XLSX.utils.book_append_sheet(workbook, infoSheet, "Report Info");
        const buffer = XLSX.write(workbook, {
            type: "buffer",
            bookType: "xlsx",
        });
        const safeMonth = /^\d{4}-\d{2}$/.test(month || "")
            ? month
            : "report";
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        res.setHeader("Content-Disposition", `attachment; filename="attendease-${safeMonth}.xlsx"`);
        res.send(buffer);
    }
};
__decorate([
    Get("monthly/export-csv"),
    __param(0, Request()),
    __param(1, Query("month")),
    __param(2, Query("teamId")),
    __param(3, Query("employeeId")),
    __param(4, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "exportMonthlyCsv", null);
__decorate([
    Get("monthly"),
    __param(0, Request()),
    __param(1, Query("month")),
    __param(2, Query("teamId")),
    __param(3, Query("employeeId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "getMonthly", null);
__decorate([
    Get("monthly/export"),
    __param(0, Request()),
    __param(1, Query("month")),
    __param(2, Query("teamId")),
    __param(3, Query("employeeId")),
    __param(4, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "exportMonthly", null);
ReportsController = __decorate([
    Controller("reports"),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [ReportsService])
], ReportsController);
export { ReportsController };
//# sourceMappingURL=reports.controller.js.map