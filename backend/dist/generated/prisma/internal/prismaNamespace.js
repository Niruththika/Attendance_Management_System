import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Team: 'Team',
    Employee: 'Employee',
    User: 'User',
    Shift: 'Shift',
    ShiftAssignment: 'ShiftAssignment',
    AttendanceSession: 'AttendanceSession',
    BreakRecord: 'BreakRecord',
    CorrectionRequest: 'CorrectionRequest',
    ActivityLog: 'ActivityLog'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const TeamScalarFieldEnum = {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const EmployeeScalarFieldEnum = {
    id: 'id',
    employeeCode: 'employeeCode',
    name: 'name',
    email: 'email',
    status: 'status',
    teamId: 'teamId',
    managerId: 'managerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const UserScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ShiftScalarFieldEnum = {
    id: 'id',
    name: 'name',
    startTime: 'startTime',
    endTime: 'endTime',
    timezone: 'timezone',
    workingDays: 'workingDays',
    graceMinutes: 'graceMinutes',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ShiftAssignmentScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    shiftId: 'shiftId',
    effectiveFrom: 'effectiveFrom',
    effectiveTo: 'effectiveTo',
    createdAt: 'createdAt'
};
export const AttendanceSessionScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    shiftId: 'shiftId',
    shiftDate: 'shiftDate',
    clockInAt: 'clockInAt',
    clockOutAt: 'clockOutAt',
    grossMinutes: 'grossMinutes',
    breakMinutes: 'breakMinutes',
    netMinutes: 'netMinutes',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const BreakRecordScalarFieldEnum = {
    id: 'id',
    attendanceSessionId: 'attendanceSessionId',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    breakType: 'breakType',
    createdAt: 'createdAt'
};
export const CorrectionRequestScalarFieldEnum = {
    id: 'id',
    sessionId: 'sessionId',
    requestedById: 'requestedById',
    reviewedById: 'reviewedById',
    originalClockInAt: 'originalClockInAt',
    originalClockOutAt: 'originalClockOutAt',
    proposedIn: 'proposedIn',
    proposedOut: 'proposedOut',
    reason: 'reason',
    status: 'status',
    reviewNote: 'reviewNote',
    reviewedAt: 'reviewedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ActivityLogScalarFieldEnum = {
    id: 'id',
    actorId: 'actorId',
    action: 'action',
    targetType: 'targetType',
    targetId: 'targetId',
    oldValues: 'oldValues',
    newValues: 'newValues',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map