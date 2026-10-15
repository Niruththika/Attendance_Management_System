import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';
import { EmployeesModule } from './employees/employees.module.js';
import { ShiftsModule } from './shifts/shifts.module.js';
import { AttendanceModule } from './attendance/attendance.module.js';
import { CorrectionsModule } from './corrections/corrections.module.js';
import { DashboardModule } from './dashboard/dashboard.module.js';
import { ReportsModule } from './reports/reports.module.js';
import { ActivityLogsModule } from './activity-logs/activity-logs.module.js';
import { ConfigModule } from "@nestjs/config";
import { TeamsService } from './teams/teams.service.js';
import { TeamsController } from './teams/teams.controller.js';
import { TeamsModule } from './teams/teams.module.js';
import { ScheduleModule } from "@nestjs/schedule";
export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'backend',
    }),
    ConfigModule.forRoot({
  isGlobal: true,
}),
    PrismaModule,
    AuthModule,
    EmployeesModule,
    ShiftsModule,
    AttendanceModule,
    CorrectionsModule,
    DashboardModule,
    ReportsModule,
    ActivityLogsModule,
    TeamsModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController, TeamsController],
  providers: [AppService, TeamsService],
})
export class AppModule {}
