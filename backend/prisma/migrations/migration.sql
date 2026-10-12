CREATE UNIQUE INDEX "one_in_progress_session_per_employee"
ON "AttendanceSession" ("employeeId")
WHERE "status" = 'IN_PROGRESS';

CREATE UNIQUE INDEX "one_open_break_per_session"
ON "BreakRecord" ("attendanceSessionId")
WHERE "endedAt" IS NULL;