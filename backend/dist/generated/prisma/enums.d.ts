export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly MANAGER: "MANAGER";
    readonly EMPLOYEE: "EMPLOYEE";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const RecordStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
};
export type RecordStatus = (typeof RecordStatus)[keyof typeof RecordStatus];
export declare const AttendanceStatus: {
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly INCOMPLETE: "INCOMPLETE";
};
export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus];
export declare const BreakType: {
    readonly PAID: "PAID";
    readonly UNPAID: "UNPAID";
};
export type BreakType = (typeof BreakType)[keyof typeof BreakType];
export declare const CorrectionStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type CorrectionStatus = (typeof CorrectionStatus)[keyof typeof CorrectionStatus];
