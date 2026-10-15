
import {
  Body,
  Controller,
  Get,
  Query,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AttendanceService } from "./attendance.service.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { StartBreakDto } from "./dto/start-break.dto.js";


interface AuthenticatedRequest {
  user: {
    userId: string;
    email: string;
    role: string;
    employeeId: string | null;
  };
}

@Controller("attendance")
@UseGuards(JwtAuthGuard)
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post("clock-in")
  clockIn(@Request() req: AuthenticatedRequest) {
    return this.attendanceService.clockIn(req.user.userId);
  }

  @Post("clock-out")
  clockOut(@Request() req: AuthenticatedRequest) {
    return this.attendanceService.clockOut(req.user.userId);
  }

  
  @Post("break/start")
  startBreak(
    @Request() req: AuthenticatedRequest,
    @Body() dto: StartBreakDto,
  ) {
    return this.attendanceService.startBreak(
      req.user.userId,
      dto.breakType,
    );
  }

  @Post("break/end")
  endBreak(@Request() req: AuthenticatedRequest) {
    return this.attendanceService.endBreak(req.user.userId);
  }

    @Get("history")
  getHistory(@Request() req: AuthenticatedRequest) {
    return this.attendanceService.getHistory(req.user.userId);
  }

  @Get("manager/daily")
getManagerDailyAttendance(
  @Request() req: AuthenticatedRequest,
  @Query("date") date: string,
) {
  return this.attendanceService.getManagerDailyAttendance(
    req.user.userId,
    date,
  );
}
   // Company-wide daily attendance for ADMIN and MANAGER.
  @Get("admin/daily")
  getDailyAttendance(
    @Request() req: AuthenticatedRequest,
    @Query("date") date: string,
  ) {
    return this.attendanceService.getDailyAttendance(
      req.user.userId,
      date,
    );
  }
  
  
}
