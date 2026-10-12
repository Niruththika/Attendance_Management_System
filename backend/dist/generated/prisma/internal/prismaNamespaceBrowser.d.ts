import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Team: "Team";
    readonly Employee: "Employee";
    readonly User: "User";
    readonly Shift: "Shift";
    readonly ShiftAssignment: "ShiftAssignment";
    readonly AttendanceSession: "AttendanceSession";
    readonly BreakRecord: "BreakRecord";
    readonly CorrectionRequest: "CorrectionRequest";
    readonly ActivityLog: "ActivityLog";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const TeamScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];
export declare const EmployeeScalarFieldEnum: {
    readonly id: "id";
    readonly employeeCode: "employeeCode";
    readonly name: "name";
    readonly email: "email";
    readonly status: "status";
    readonly teamId: "teamId";
    readonly managerId: "managerId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly employeeId: "employeeId";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ShiftScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly timezone: "timezone";
    readonly workingDays: "workingDays";
    readonly graceMinutes: "graceMinutes";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ShiftScalarFieldEnum = (typeof ShiftScalarFieldEnum)[keyof typeof ShiftScalarFieldEnum];
export declare const ShiftAssignmentScalarFieldEnum: {
    readonly id: "id";
    readonly employeeId: "employeeId";
    readonly shiftId: "shiftId";
    readonly effectiveFrom: "effectiveFrom";
    readonly effectiveTo: "effectiveTo";
    readonly createdAt: "createdAt";
};
export type ShiftAssignmentScalarFieldEnum = (typeof ShiftAssignmentScalarFieldEnum)[keyof typeof ShiftAssignmentScalarFieldEnum];
export declare const AttendanceSessionScalarFieldEnum: {
    readonly id: "id";
    readonly employeeId: "employeeId";
    readonly shiftId: "shiftId";
    readonly shiftDate: "shiftDate";
    readonly clockInAt: "clockInAt";
    readonly clockOutAt: "clockOutAt";
    readonly grossMinutes: "grossMinutes";
    readonly breakMinutes: "breakMinutes";
    readonly netMinutes: "netMinutes";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AttendanceSessionScalarFieldEnum = (typeof AttendanceSessionScalarFieldEnum)[keyof typeof AttendanceSessionScalarFieldEnum];
export declare const BreakRecordScalarFieldEnum: {
    readonly id: "id";
    readonly attendanceSessionId: "attendanceSessionId";
    readonly startedAt: "startedAt";
    readonly endedAt: "endedAt";
    readonly breakType: "breakType";
    readonly createdAt: "createdAt";
};
export type BreakRecordScalarFieldEnum = (typeof BreakRecordScalarFieldEnum)[keyof typeof BreakRecordScalarFieldEnum];
export declare const CorrectionRequestScalarFieldEnum: {
    readonly id: "id";
    readonly sessionId: "sessionId";
    readonly requestedById: "requestedById";
    readonly reviewedById: "reviewedById";
    readonly originalClockInAt: "originalClockInAt";
    readonly originalClockOutAt: "originalClockOutAt";
    readonly proposedIn: "proposedIn";
    readonly proposedOut: "proposedOut";
    readonly reason: "reason";
    readonly status: "status";
    readonly reviewNote: "reviewNote";
    readonly reviewedAt: "reviewedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CorrectionRequestScalarFieldEnum = (typeof CorrectionRequestScalarFieldEnum)[keyof typeof CorrectionRequestScalarFieldEnum];
export declare const ActivityLogScalarFieldEnum: {
    readonly id: "id";
    readonly actorId: "actorId";
    readonly action: "action";
    readonly targetType: "targetType";
    readonly targetId: "targetId";
    readonly oldValues: "oldValues";
    readonly newValues: "newValues";
    readonly createdAt: "createdAt";
};
export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
