import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AttendanceSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendanceSessionPayload>;
export type AggregateAttendanceSession = {
    _count: AttendanceSessionCountAggregateOutputType | null;
    _avg: AttendanceSessionAvgAggregateOutputType | null;
    _sum: AttendanceSessionSumAggregateOutputType | null;
    _min: AttendanceSessionMinAggregateOutputType | null;
    _max: AttendanceSessionMaxAggregateOutputType | null;
};
export type AttendanceSessionAvgAggregateOutputType = {
    grossMinutes: number | null;
    breakMinutes: number | null;
    netMinutes: number | null;
};
export type AttendanceSessionSumAggregateOutputType = {
    grossMinutes: number | null;
    breakMinutes: number | null;
    netMinutes: number | null;
};
export type AttendanceSessionMinAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    shiftId: string | null;
    shiftDate: Date | null;
    clockInAt: Date | null;
    clockOutAt: Date | null;
    grossMinutes: number | null;
    breakMinutes: number | null;
    netMinutes: number | null;
    status: $Enums.AttendanceStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AttendanceSessionMaxAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    shiftId: string | null;
    shiftDate: Date | null;
    clockInAt: Date | null;
    clockOutAt: Date | null;
    grossMinutes: number | null;
    breakMinutes: number | null;
    netMinutes: number | null;
    status: $Enums.AttendanceStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AttendanceSessionCountAggregateOutputType = {
    id: number;
    employeeId: number;
    shiftId: number;
    shiftDate: number;
    clockInAt: number;
    clockOutAt: number;
    grossMinutes: number;
    breakMinutes: number;
    netMinutes: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AttendanceSessionAvgAggregateInputType = {
    grossMinutes?: true;
    breakMinutes?: true;
    netMinutes?: true;
};
export type AttendanceSessionSumAggregateInputType = {
    grossMinutes?: true;
    breakMinutes?: true;
    netMinutes?: true;
};
export type AttendanceSessionMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    shiftId?: true;
    shiftDate?: true;
    clockInAt?: true;
    clockOutAt?: true;
    grossMinutes?: true;
    breakMinutes?: true;
    netMinutes?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AttendanceSessionMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    shiftId?: true;
    shiftDate?: true;
    clockInAt?: true;
    clockOutAt?: true;
    grossMinutes?: true;
    breakMinutes?: true;
    netMinutes?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AttendanceSessionCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    shiftId?: true;
    shiftDate?: true;
    clockInAt?: true;
    clockOutAt?: true;
    grossMinutes?: true;
    breakMinutes?: true;
    netMinutes?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AttendanceSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceSessionWhereInput;
    orderBy?: Prisma.AttendanceSessionOrderByWithRelationInput | Prisma.AttendanceSessionOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttendanceSessionCountAggregateInputType;
    _avg?: AttendanceSessionAvgAggregateInputType;
    _sum?: AttendanceSessionSumAggregateInputType;
    _min?: AttendanceSessionMinAggregateInputType;
    _max?: AttendanceSessionMaxAggregateInputType;
};
export type GetAttendanceSessionAggregateType<T extends AttendanceSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendanceSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendanceSession[P]> : Prisma.GetScalarType<T[P], AggregateAttendanceSession[P]>;
};
export type AttendanceSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceSessionWhereInput;
    orderBy?: Prisma.AttendanceSessionOrderByWithAggregationInput | Prisma.AttendanceSessionOrderByWithAggregationInput[];
    by: Prisma.AttendanceSessionScalarFieldEnum[] | Prisma.AttendanceSessionScalarFieldEnum;
    having?: Prisma.AttendanceSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceSessionCountAggregateInputType | true;
    _avg?: AttendanceSessionAvgAggregateInputType;
    _sum?: AttendanceSessionSumAggregateInputType;
    _min?: AttendanceSessionMinAggregateInputType;
    _max?: AttendanceSessionMaxAggregateInputType;
};
export type AttendanceSessionGroupByOutputType = {
    id: string;
    employeeId: string;
    shiftId: string | null;
    shiftDate: Date;
    clockInAt: Date;
    clockOutAt: Date | null;
    grossMinutes: number | null;
    breakMinutes: number;
    netMinutes: number | null;
    status: $Enums.AttendanceStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: AttendanceSessionCountAggregateOutputType | null;
    _avg: AttendanceSessionAvgAggregateOutputType | null;
    _sum: AttendanceSessionSumAggregateOutputType | null;
    _min: AttendanceSessionMinAggregateOutputType | null;
    _max: AttendanceSessionMaxAggregateOutputType | null;
};
export type GetAttendanceSessionGroupByPayload<T extends AttendanceSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendanceSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendanceSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendanceSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendanceSessionGroupByOutputType[P]>;
}>>;
export type AttendanceSessionWhereInput = {
    AND?: Prisma.AttendanceSessionWhereInput | Prisma.AttendanceSessionWhereInput[];
    OR?: Prisma.AttendanceSessionWhereInput[];
    NOT?: Prisma.AttendanceSessionWhereInput | Prisma.AttendanceSessionWhereInput[];
    id?: Prisma.StringFilter<"AttendanceSession"> | string;
    employeeId?: Prisma.StringFilter<"AttendanceSession"> | string;
    shiftId?: Prisma.StringNullableFilter<"AttendanceSession"> | string | null;
    shiftDate?: Prisma.DateTimeFilter<"AttendanceSession"> | Date | string;
    clockInAt?: Prisma.DateTimeFilter<"AttendanceSession"> | Date | string;
    clockOutAt?: Prisma.DateTimeNullableFilter<"AttendanceSession"> | Date | string | null;
    grossMinutes?: Prisma.IntNullableFilter<"AttendanceSession"> | number | null;
    breakMinutes?: Prisma.IntFilter<"AttendanceSession"> | number;
    netMinutes?: Prisma.IntNullableFilter<"AttendanceSession"> | number | null;
    status?: Prisma.EnumAttendanceStatusFilter<"AttendanceSession"> | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFilter<"AttendanceSession"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AttendanceSession"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    shift?: Prisma.XOR<Prisma.ShiftNullableScalarRelationFilter, Prisma.ShiftWhereInput> | null;
    breaks?: Prisma.BreakRecordListRelationFilter;
    corrections?: Prisma.CorrectionRequestListRelationFilter;
};
export type AttendanceSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrderInput | Prisma.SortOrder;
    shiftDate?: Prisma.SortOrder;
    clockInAt?: Prisma.SortOrder;
    clockOutAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    grossMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    breakMinutes?: Prisma.SortOrder;
    netMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    shift?: Prisma.ShiftOrderByWithRelationInput;
    breaks?: Prisma.BreakRecordOrderByRelationAggregateInput;
    corrections?: Prisma.CorrectionRequestOrderByRelationAggregateInput;
};
export type AttendanceSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AttendanceSessionWhereInput | Prisma.AttendanceSessionWhereInput[];
    OR?: Prisma.AttendanceSessionWhereInput[];
    NOT?: Prisma.AttendanceSessionWhereInput | Prisma.AttendanceSessionWhereInput[];
    employeeId?: Prisma.StringFilter<"AttendanceSession"> | string;
    shiftId?: Prisma.StringNullableFilter<"AttendanceSession"> | string | null;
    shiftDate?: Prisma.DateTimeFilter<"AttendanceSession"> | Date | string;
    clockInAt?: Prisma.DateTimeFilter<"AttendanceSession"> | Date | string;
    clockOutAt?: Prisma.DateTimeNullableFilter<"AttendanceSession"> | Date | string | null;
    grossMinutes?: Prisma.IntNullableFilter<"AttendanceSession"> | number | null;
    breakMinutes?: Prisma.IntFilter<"AttendanceSession"> | number;
    netMinutes?: Prisma.IntNullableFilter<"AttendanceSession"> | number | null;
    status?: Prisma.EnumAttendanceStatusFilter<"AttendanceSession"> | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFilter<"AttendanceSession"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AttendanceSession"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    shift?: Prisma.XOR<Prisma.ShiftNullableScalarRelationFilter, Prisma.ShiftWhereInput> | null;
    breaks?: Prisma.BreakRecordListRelationFilter;
    corrections?: Prisma.CorrectionRequestListRelationFilter;
}, "id">;
export type AttendanceSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrderInput | Prisma.SortOrder;
    shiftDate?: Prisma.SortOrder;
    clockInAt?: Prisma.SortOrder;
    clockOutAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    grossMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    breakMinutes?: Prisma.SortOrder;
    netMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AttendanceSessionCountOrderByAggregateInput;
    _avg?: Prisma.AttendanceSessionAvgOrderByAggregateInput;
    _max?: Prisma.AttendanceSessionMaxOrderByAggregateInput;
    _min?: Prisma.AttendanceSessionMinOrderByAggregateInput;
    _sum?: Prisma.AttendanceSessionSumOrderByAggregateInput;
};
export type AttendanceSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendanceSessionScalarWhereWithAggregatesInput | Prisma.AttendanceSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendanceSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendanceSessionScalarWhereWithAggregatesInput | Prisma.AttendanceSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AttendanceSession"> | string;
    employeeId?: Prisma.StringWithAggregatesFilter<"AttendanceSession"> | string;
    shiftId?: Prisma.StringNullableWithAggregatesFilter<"AttendanceSession"> | string | null;
    shiftDate?: Prisma.DateTimeWithAggregatesFilter<"AttendanceSession"> | Date | string;
    clockInAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceSession"> | Date | string;
    clockOutAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AttendanceSession"> | Date | string | null;
    grossMinutes?: Prisma.IntNullableWithAggregatesFilter<"AttendanceSession"> | number | null;
    breakMinutes?: Prisma.IntWithAggregatesFilter<"AttendanceSession"> | number;
    netMinutes?: Prisma.IntNullableWithAggregatesFilter<"AttendanceSession"> | number | null;
    status?: Prisma.EnumAttendanceStatusWithAggregatesFilter<"AttendanceSession"> | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceSession"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceSession"> | Date | string;
};
export type AttendanceSessionCreateInput = {
    id?: string;
    shiftDate: Date | string;
    clockInAt: Date | string;
    clockOutAt?: Date | string | null;
    grossMinutes?: number | null;
    breakMinutes?: number;
    netMinutes?: number | null;
    status?: $Enums.AttendanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutAttendanceSessionsInput;
    shift?: Prisma.ShiftCreateNestedOneWithoutSessionsInput;
    breaks?: Prisma.BreakRecordCreateNestedManyWithoutAttendanceSessionInput;
    corrections?: Prisma.CorrectionRequestCreateNestedManyWithoutSessionInput;
};
export type AttendanceSessionUncheckedCreateInput = {
    id?: string;
    employeeId: string;
    shiftId?: string | null;
    shiftDate: Date | string;
    clockInAt: Date | string;
    clockOutAt?: Date | string | null;
    grossMinutes?: number | null;
    breakMinutes?: number;
    netMinutes?: number | null;
    status?: $Enums.AttendanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    breaks?: Prisma.BreakRecordUncheckedCreateNestedManyWithoutAttendanceSessionInput;
    corrections?: Prisma.CorrectionRequestUncheckedCreateNestedManyWithoutSessionInput;
};
export type AttendanceSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grossMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    netMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutAttendanceSessionsNestedInput;
    shift?: Prisma.ShiftUpdateOneWithoutSessionsNestedInput;
    breaks?: Prisma.BreakRecordUpdateManyWithoutAttendanceSessionNestedInput;
    corrections?: Prisma.CorrectionRequestUpdateManyWithoutSessionNestedInput;
};
export type AttendanceSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shiftDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grossMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    netMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breaks?: Prisma.BreakRecordUncheckedUpdateManyWithoutAttendanceSessionNestedInput;
    corrections?: Prisma.CorrectionRequestUncheckedUpdateManyWithoutSessionNestedInput;
};
export type AttendanceSessionCreateManyInput = {
    id?: string;
    employeeId: string;
    shiftId?: string | null;
    shiftDate: Date | string;
    clockInAt: Date | string;
    clockOutAt?: Date | string | null;
    grossMinutes?: number | null;
    breakMinutes?: number;
    netMinutes?: number | null;
    status?: $Enums.AttendanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grossMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    netMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shiftDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grossMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    netMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSessionListRelationFilter = {
    every?: Prisma.AttendanceSessionWhereInput;
    some?: Prisma.AttendanceSessionWhereInput;
    none?: Prisma.AttendanceSessionWhereInput;
};
export type AttendanceSessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttendanceSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrder;
    shiftDate?: Prisma.SortOrder;
    clockInAt?: Prisma.SortOrder;
    clockOutAt?: Prisma.SortOrder;
    grossMinutes?: Prisma.SortOrder;
    breakMinutes?: Prisma.SortOrder;
    netMinutes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AttendanceSessionAvgOrderByAggregateInput = {
    grossMinutes?: Prisma.SortOrder;
    breakMinutes?: Prisma.SortOrder;
    netMinutes?: Prisma.SortOrder;
};
export type AttendanceSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrder;
    shiftDate?: Prisma.SortOrder;
    clockInAt?: Prisma.SortOrder;
    clockOutAt?: Prisma.SortOrder;
    grossMinutes?: Prisma.SortOrder;
    breakMinutes?: Prisma.SortOrder;
    netMinutes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AttendanceSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrder;
    shiftDate?: Prisma.SortOrder;
    clockInAt?: Prisma.SortOrder;
    clockOutAt?: Prisma.SortOrder;
    grossMinutes?: Prisma.SortOrder;
    breakMinutes?: Prisma.SortOrder;
    netMinutes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AttendanceSessionSumOrderByAggregateInput = {
    grossMinutes?: Prisma.SortOrder;
    breakMinutes?: Prisma.SortOrder;
    netMinutes?: Prisma.SortOrder;
};
export type AttendanceSessionScalarRelationFilter = {
    is?: Prisma.AttendanceSessionWhereInput;
    isNot?: Prisma.AttendanceSessionWhereInput;
};
export type AttendanceSessionCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutEmployeeInput, Prisma.AttendanceSessionUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceSessionCreateWithoutEmployeeInput[] | Prisma.AttendanceSessionUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceSessionCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceSessionCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceSessionCreateManyEmployeeInputEnvelope;
    connect?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
};
export type AttendanceSessionUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutEmployeeInput, Prisma.AttendanceSessionUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceSessionCreateWithoutEmployeeInput[] | Prisma.AttendanceSessionUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceSessionCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceSessionCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceSessionCreateManyEmployeeInputEnvelope;
    connect?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
};
export type AttendanceSessionUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutEmployeeInput, Prisma.AttendanceSessionUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceSessionCreateWithoutEmployeeInput[] | Prisma.AttendanceSessionUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceSessionCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceSessionCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.AttendanceSessionUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceSessionUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceSessionCreateManyEmployeeInputEnvelope;
    set?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    disconnect?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    delete?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    connect?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    update?: Prisma.AttendanceSessionUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceSessionUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.AttendanceSessionUpdateManyWithWhereWithoutEmployeeInput | Prisma.AttendanceSessionUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.AttendanceSessionScalarWhereInput | Prisma.AttendanceSessionScalarWhereInput[];
};
export type AttendanceSessionUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutEmployeeInput, Prisma.AttendanceSessionUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceSessionCreateWithoutEmployeeInput[] | Prisma.AttendanceSessionUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceSessionCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceSessionCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.AttendanceSessionUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceSessionUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceSessionCreateManyEmployeeInputEnvelope;
    set?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    disconnect?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    delete?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    connect?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    update?: Prisma.AttendanceSessionUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceSessionUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.AttendanceSessionUpdateManyWithWhereWithoutEmployeeInput | Prisma.AttendanceSessionUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.AttendanceSessionScalarWhereInput | Prisma.AttendanceSessionScalarWhereInput[];
};
export type AttendanceSessionCreateNestedManyWithoutShiftInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutShiftInput, Prisma.AttendanceSessionUncheckedCreateWithoutShiftInput> | Prisma.AttendanceSessionCreateWithoutShiftInput[] | Prisma.AttendanceSessionUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.AttendanceSessionCreateOrConnectWithoutShiftInput | Prisma.AttendanceSessionCreateOrConnectWithoutShiftInput[];
    createMany?: Prisma.AttendanceSessionCreateManyShiftInputEnvelope;
    connect?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
};
export type AttendanceSessionUncheckedCreateNestedManyWithoutShiftInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutShiftInput, Prisma.AttendanceSessionUncheckedCreateWithoutShiftInput> | Prisma.AttendanceSessionCreateWithoutShiftInput[] | Prisma.AttendanceSessionUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.AttendanceSessionCreateOrConnectWithoutShiftInput | Prisma.AttendanceSessionCreateOrConnectWithoutShiftInput[];
    createMany?: Prisma.AttendanceSessionCreateManyShiftInputEnvelope;
    connect?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
};
export type AttendanceSessionUpdateManyWithoutShiftNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutShiftInput, Prisma.AttendanceSessionUncheckedCreateWithoutShiftInput> | Prisma.AttendanceSessionCreateWithoutShiftInput[] | Prisma.AttendanceSessionUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.AttendanceSessionCreateOrConnectWithoutShiftInput | Prisma.AttendanceSessionCreateOrConnectWithoutShiftInput[];
    upsert?: Prisma.AttendanceSessionUpsertWithWhereUniqueWithoutShiftInput | Prisma.AttendanceSessionUpsertWithWhereUniqueWithoutShiftInput[];
    createMany?: Prisma.AttendanceSessionCreateManyShiftInputEnvelope;
    set?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    disconnect?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    delete?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    connect?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    update?: Prisma.AttendanceSessionUpdateWithWhereUniqueWithoutShiftInput | Prisma.AttendanceSessionUpdateWithWhereUniqueWithoutShiftInput[];
    updateMany?: Prisma.AttendanceSessionUpdateManyWithWhereWithoutShiftInput | Prisma.AttendanceSessionUpdateManyWithWhereWithoutShiftInput[];
    deleteMany?: Prisma.AttendanceSessionScalarWhereInput | Prisma.AttendanceSessionScalarWhereInput[];
};
export type AttendanceSessionUncheckedUpdateManyWithoutShiftNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutShiftInput, Prisma.AttendanceSessionUncheckedCreateWithoutShiftInput> | Prisma.AttendanceSessionCreateWithoutShiftInput[] | Prisma.AttendanceSessionUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.AttendanceSessionCreateOrConnectWithoutShiftInput | Prisma.AttendanceSessionCreateOrConnectWithoutShiftInput[];
    upsert?: Prisma.AttendanceSessionUpsertWithWhereUniqueWithoutShiftInput | Prisma.AttendanceSessionUpsertWithWhereUniqueWithoutShiftInput[];
    createMany?: Prisma.AttendanceSessionCreateManyShiftInputEnvelope;
    set?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    disconnect?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    delete?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    connect?: Prisma.AttendanceSessionWhereUniqueInput | Prisma.AttendanceSessionWhereUniqueInput[];
    update?: Prisma.AttendanceSessionUpdateWithWhereUniqueWithoutShiftInput | Prisma.AttendanceSessionUpdateWithWhereUniqueWithoutShiftInput[];
    updateMany?: Prisma.AttendanceSessionUpdateManyWithWhereWithoutShiftInput | Prisma.AttendanceSessionUpdateManyWithWhereWithoutShiftInput[];
    deleteMany?: Prisma.AttendanceSessionScalarWhereInput | Prisma.AttendanceSessionScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus;
};
export type AttendanceSessionCreateNestedOneWithoutBreaksInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutBreaksInput, Prisma.AttendanceSessionUncheckedCreateWithoutBreaksInput>;
    connectOrCreate?: Prisma.AttendanceSessionCreateOrConnectWithoutBreaksInput;
    connect?: Prisma.AttendanceSessionWhereUniqueInput;
};
export type AttendanceSessionUpdateOneRequiredWithoutBreaksNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutBreaksInput, Prisma.AttendanceSessionUncheckedCreateWithoutBreaksInput>;
    connectOrCreate?: Prisma.AttendanceSessionCreateOrConnectWithoutBreaksInput;
    upsert?: Prisma.AttendanceSessionUpsertWithoutBreaksInput;
    connect?: Prisma.AttendanceSessionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AttendanceSessionUpdateToOneWithWhereWithoutBreaksInput, Prisma.AttendanceSessionUpdateWithoutBreaksInput>, Prisma.AttendanceSessionUncheckedUpdateWithoutBreaksInput>;
};
export type AttendanceSessionCreateNestedOneWithoutCorrectionsInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutCorrectionsInput, Prisma.AttendanceSessionUncheckedCreateWithoutCorrectionsInput>;
    connectOrCreate?: Prisma.AttendanceSessionCreateOrConnectWithoutCorrectionsInput;
    connect?: Prisma.AttendanceSessionWhereUniqueInput;
};
export type AttendanceSessionUpdateOneRequiredWithoutCorrectionsNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutCorrectionsInput, Prisma.AttendanceSessionUncheckedCreateWithoutCorrectionsInput>;
    connectOrCreate?: Prisma.AttendanceSessionCreateOrConnectWithoutCorrectionsInput;
    upsert?: Prisma.AttendanceSessionUpsertWithoutCorrectionsInput;
    connect?: Prisma.AttendanceSessionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AttendanceSessionUpdateToOneWithWhereWithoutCorrectionsInput, Prisma.AttendanceSessionUpdateWithoutCorrectionsInput>, Prisma.AttendanceSessionUncheckedUpdateWithoutCorrectionsInput>;
};
export type AttendanceSessionCreateWithoutEmployeeInput = {
    id?: string;
    shiftDate: Date | string;
    clockInAt: Date | string;
    clockOutAt?: Date | string | null;
    grossMinutes?: number | null;
    breakMinutes?: number;
    netMinutes?: number | null;
    status?: $Enums.AttendanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shift?: Prisma.ShiftCreateNestedOneWithoutSessionsInput;
    breaks?: Prisma.BreakRecordCreateNestedManyWithoutAttendanceSessionInput;
    corrections?: Prisma.CorrectionRequestCreateNestedManyWithoutSessionInput;
};
export type AttendanceSessionUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    shiftId?: string | null;
    shiftDate: Date | string;
    clockInAt: Date | string;
    clockOutAt?: Date | string | null;
    grossMinutes?: number | null;
    breakMinutes?: number;
    netMinutes?: number | null;
    status?: $Enums.AttendanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    breaks?: Prisma.BreakRecordUncheckedCreateNestedManyWithoutAttendanceSessionInput;
    corrections?: Prisma.CorrectionRequestUncheckedCreateNestedManyWithoutSessionInput;
};
export type AttendanceSessionCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.AttendanceSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutEmployeeInput, Prisma.AttendanceSessionUncheckedCreateWithoutEmployeeInput>;
};
export type AttendanceSessionCreateManyEmployeeInputEnvelope = {
    data: Prisma.AttendanceSessionCreateManyEmployeeInput | Prisma.AttendanceSessionCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type AttendanceSessionUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.AttendanceSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceSessionUpdateWithoutEmployeeInput, Prisma.AttendanceSessionUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutEmployeeInput, Prisma.AttendanceSessionUncheckedCreateWithoutEmployeeInput>;
};
export type AttendanceSessionUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.AttendanceSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceSessionUpdateWithoutEmployeeInput, Prisma.AttendanceSessionUncheckedUpdateWithoutEmployeeInput>;
};
export type AttendanceSessionUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.AttendanceSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceSessionUpdateManyMutationInput, Prisma.AttendanceSessionUncheckedUpdateManyWithoutEmployeeInput>;
};
export type AttendanceSessionScalarWhereInput = {
    AND?: Prisma.AttendanceSessionScalarWhereInput | Prisma.AttendanceSessionScalarWhereInput[];
    OR?: Prisma.AttendanceSessionScalarWhereInput[];
    NOT?: Prisma.AttendanceSessionScalarWhereInput | Prisma.AttendanceSessionScalarWhereInput[];
    id?: Prisma.StringFilter<"AttendanceSession"> | string;
    employeeId?: Prisma.StringFilter<"AttendanceSession"> | string;
    shiftId?: Prisma.StringNullableFilter<"AttendanceSession"> | string | null;
    shiftDate?: Prisma.DateTimeFilter<"AttendanceSession"> | Date | string;
    clockInAt?: Prisma.DateTimeFilter<"AttendanceSession"> | Date | string;
    clockOutAt?: Prisma.DateTimeNullableFilter<"AttendanceSession"> | Date | string | null;
    grossMinutes?: Prisma.IntNullableFilter<"AttendanceSession"> | number | null;
    breakMinutes?: Prisma.IntFilter<"AttendanceSession"> | number;
    netMinutes?: Prisma.IntNullableFilter<"AttendanceSession"> | number | null;
    status?: Prisma.EnumAttendanceStatusFilter<"AttendanceSession"> | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFilter<"AttendanceSession"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AttendanceSession"> | Date | string;
};
export type AttendanceSessionCreateWithoutShiftInput = {
    id?: string;
    shiftDate: Date | string;
    clockInAt: Date | string;
    clockOutAt?: Date | string | null;
    grossMinutes?: number | null;
    breakMinutes?: number;
    netMinutes?: number | null;
    status?: $Enums.AttendanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutAttendanceSessionsInput;
    breaks?: Prisma.BreakRecordCreateNestedManyWithoutAttendanceSessionInput;
    corrections?: Prisma.CorrectionRequestCreateNestedManyWithoutSessionInput;
};
export type AttendanceSessionUncheckedCreateWithoutShiftInput = {
    id?: string;
    employeeId: string;
    shiftDate: Date | string;
    clockInAt: Date | string;
    clockOutAt?: Date | string | null;
    grossMinutes?: number | null;
    breakMinutes?: number;
    netMinutes?: number | null;
    status?: $Enums.AttendanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    breaks?: Prisma.BreakRecordUncheckedCreateNestedManyWithoutAttendanceSessionInput;
    corrections?: Prisma.CorrectionRequestUncheckedCreateNestedManyWithoutSessionInput;
};
export type AttendanceSessionCreateOrConnectWithoutShiftInput = {
    where: Prisma.AttendanceSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutShiftInput, Prisma.AttendanceSessionUncheckedCreateWithoutShiftInput>;
};
export type AttendanceSessionCreateManyShiftInputEnvelope = {
    data: Prisma.AttendanceSessionCreateManyShiftInput | Prisma.AttendanceSessionCreateManyShiftInput[];
    skipDuplicates?: boolean;
};
export type AttendanceSessionUpsertWithWhereUniqueWithoutShiftInput = {
    where: Prisma.AttendanceSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceSessionUpdateWithoutShiftInput, Prisma.AttendanceSessionUncheckedUpdateWithoutShiftInput>;
    create: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutShiftInput, Prisma.AttendanceSessionUncheckedCreateWithoutShiftInput>;
};
export type AttendanceSessionUpdateWithWhereUniqueWithoutShiftInput = {
    where: Prisma.AttendanceSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceSessionUpdateWithoutShiftInput, Prisma.AttendanceSessionUncheckedUpdateWithoutShiftInput>;
};
export type AttendanceSessionUpdateManyWithWhereWithoutShiftInput = {
    where: Prisma.AttendanceSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceSessionUpdateManyMutationInput, Prisma.AttendanceSessionUncheckedUpdateManyWithoutShiftInput>;
};
export type AttendanceSessionCreateWithoutBreaksInput = {
    id?: string;
    shiftDate: Date | string;
    clockInAt: Date | string;
    clockOutAt?: Date | string | null;
    grossMinutes?: number | null;
    breakMinutes?: number;
    netMinutes?: number | null;
    status?: $Enums.AttendanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutAttendanceSessionsInput;
    shift?: Prisma.ShiftCreateNestedOneWithoutSessionsInput;
    corrections?: Prisma.CorrectionRequestCreateNestedManyWithoutSessionInput;
};
export type AttendanceSessionUncheckedCreateWithoutBreaksInput = {
    id?: string;
    employeeId: string;
    shiftId?: string | null;
    shiftDate: Date | string;
    clockInAt: Date | string;
    clockOutAt?: Date | string | null;
    grossMinutes?: number | null;
    breakMinutes?: number;
    netMinutes?: number | null;
    status?: $Enums.AttendanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    corrections?: Prisma.CorrectionRequestUncheckedCreateNestedManyWithoutSessionInput;
};
export type AttendanceSessionCreateOrConnectWithoutBreaksInput = {
    where: Prisma.AttendanceSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutBreaksInput, Prisma.AttendanceSessionUncheckedCreateWithoutBreaksInput>;
};
export type AttendanceSessionUpsertWithoutBreaksInput = {
    update: Prisma.XOR<Prisma.AttendanceSessionUpdateWithoutBreaksInput, Prisma.AttendanceSessionUncheckedUpdateWithoutBreaksInput>;
    create: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutBreaksInput, Prisma.AttendanceSessionUncheckedCreateWithoutBreaksInput>;
    where?: Prisma.AttendanceSessionWhereInput;
};
export type AttendanceSessionUpdateToOneWithWhereWithoutBreaksInput = {
    where?: Prisma.AttendanceSessionWhereInput;
    data: Prisma.XOR<Prisma.AttendanceSessionUpdateWithoutBreaksInput, Prisma.AttendanceSessionUncheckedUpdateWithoutBreaksInput>;
};
export type AttendanceSessionUpdateWithoutBreaksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grossMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    netMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutAttendanceSessionsNestedInput;
    shift?: Prisma.ShiftUpdateOneWithoutSessionsNestedInput;
    corrections?: Prisma.CorrectionRequestUpdateManyWithoutSessionNestedInput;
};
export type AttendanceSessionUncheckedUpdateWithoutBreaksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shiftDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grossMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    netMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    corrections?: Prisma.CorrectionRequestUncheckedUpdateManyWithoutSessionNestedInput;
};
export type AttendanceSessionCreateWithoutCorrectionsInput = {
    id?: string;
    shiftDate: Date | string;
    clockInAt: Date | string;
    clockOutAt?: Date | string | null;
    grossMinutes?: number | null;
    breakMinutes?: number;
    netMinutes?: number | null;
    status?: $Enums.AttendanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutAttendanceSessionsInput;
    shift?: Prisma.ShiftCreateNestedOneWithoutSessionsInput;
    breaks?: Prisma.BreakRecordCreateNestedManyWithoutAttendanceSessionInput;
};
export type AttendanceSessionUncheckedCreateWithoutCorrectionsInput = {
    id?: string;
    employeeId: string;
    shiftId?: string | null;
    shiftDate: Date | string;
    clockInAt: Date | string;
    clockOutAt?: Date | string | null;
    grossMinutes?: number | null;
    breakMinutes?: number;
    netMinutes?: number | null;
    status?: $Enums.AttendanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    breaks?: Prisma.BreakRecordUncheckedCreateNestedManyWithoutAttendanceSessionInput;
};
export type AttendanceSessionCreateOrConnectWithoutCorrectionsInput = {
    where: Prisma.AttendanceSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutCorrectionsInput, Prisma.AttendanceSessionUncheckedCreateWithoutCorrectionsInput>;
};
export type AttendanceSessionUpsertWithoutCorrectionsInput = {
    update: Prisma.XOR<Prisma.AttendanceSessionUpdateWithoutCorrectionsInput, Prisma.AttendanceSessionUncheckedUpdateWithoutCorrectionsInput>;
    create: Prisma.XOR<Prisma.AttendanceSessionCreateWithoutCorrectionsInput, Prisma.AttendanceSessionUncheckedCreateWithoutCorrectionsInput>;
    where?: Prisma.AttendanceSessionWhereInput;
};
export type AttendanceSessionUpdateToOneWithWhereWithoutCorrectionsInput = {
    where?: Prisma.AttendanceSessionWhereInput;
    data: Prisma.XOR<Prisma.AttendanceSessionUpdateWithoutCorrectionsInput, Prisma.AttendanceSessionUncheckedUpdateWithoutCorrectionsInput>;
};
export type AttendanceSessionUpdateWithoutCorrectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grossMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    netMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutAttendanceSessionsNestedInput;
    shift?: Prisma.ShiftUpdateOneWithoutSessionsNestedInput;
    breaks?: Prisma.BreakRecordUpdateManyWithoutAttendanceSessionNestedInput;
};
export type AttendanceSessionUncheckedUpdateWithoutCorrectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shiftDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grossMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    netMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breaks?: Prisma.BreakRecordUncheckedUpdateManyWithoutAttendanceSessionNestedInput;
};
export type AttendanceSessionCreateManyEmployeeInput = {
    id?: string;
    shiftId?: string | null;
    shiftDate: Date | string;
    clockInAt: Date | string;
    clockOutAt?: Date | string | null;
    grossMinutes?: number | null;
    breakMinutes?: number;
    netMinutes?: number | null;
    status?: $Enums.AttendanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceSessionUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grossMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    netMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shift?: Prisma.ShiftUpdateOneWithoutSessionsNestedInput;
    breaks?: Prisma.BreakRecordUpdateManyWithoutAttendanceSessionNestedInput;
    corrections?: Prisma.CorrectionRequestUpdateManyWithoutSessionNestedInput;
};
export type AttendanceSessionUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shiftDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grossMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    netMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breaks?: Prisma.BreakRecordUncheckedUpdateManyWithoutAttendanceSessionNestedInput;
    corrections?: Prisma.CorrectionRequestUncheckedUpdateManyWithoutSessionNestedInput;
};
export type AttendanceSessionUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shiftDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grossMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    netMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSessionCreateManyShiftInput = {
    id?: string;
    employeeId: string;
    shiftDate: Date | string;
    clockInAt: Date | string;
    clockOutAt?: Date | string | null;
    grossMinutes?: number | null;
    breakMinutes?: number;
    netMinutes?: number | null;
    status?: $Enums.AttendanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceSessionUpdateWithoutShiftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grossMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    netMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutAttendanceSessionsNestedInput;
    breaks?: Prisma.BreakRecordUpdateManyWithoutAttendanceSessionNestedInput;
    corrections?: Prisma.CorrectionRequestUpdateManyWithoutSessionNestedInput;
};
export type AttendanceSessionUncheckedUpdateWithoutShiftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grossMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    netMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breaks?: Prisma.BreakRecordUncheckedUpdateManyWithoutAttendanceSessionNestedInput;
    corrections?: Prisma.CorrectionRequestUncheckedUpdateManyWithoutSessionNestedInput;
};
export type AttendanceSessionUncheckedUpdateManyWithoutShiftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grossMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    netMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSessionCountOutputType = {
    breaks: number;
    corrections: number;
};
export type AttendanceSessionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    breaks?: boolean | AttendanceSessionCountOutputTypeCountBreaksArgs;
    corrections?: boolean | AttendanceSessionCountOutputTypeCountCorrectionsArgs;
};
export type AttendanceSessionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSessionCountOutputTypeSelect<ExtArgs> | null;
};
export type AttendanceSessionCountOutputTypeCountBreaksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BreakRecordWhereInput;
};
export type AttendanceSessionCountOutputTypeCountCorrectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CorrectionRequestWhereInput;
};
export type AttendanceSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    shiftId?: boolean;
    shiftDate?: boolean;
    clockInAt?: boolean;
    clockOutAt?: boolean;
    grossMinutes?: boolean;
    breakMinutes?: boolean;
    netMinutes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.AttendanceSession$shiftArgs<ExtArgs>;
    breaks?: boolean | Prisma.AttendanceSession$breaksArgs<ExtArgs>;
    corrections?: boolean | Prisma.AttendanceSession$correctionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AttendanceSessionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceSession"]>;
export type AttendanceSessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    shiftId?: boolean;
    shiftDate?: boolean;
    clockInAt?: boolean;
    clockOutAt?: boolean;
    grossMinutes?: boolean;
    breakMinutes?: boolean;
    netMinutes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.AttendanceSession$shiftArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceSession"]>;
export type AttendanceSessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    shiftId?: boolean;
    shiftDate?: boolean;
    clockInAt?: boolean;
    clockOutAt?: boolean;
    grossMinutes?: boolean;
    breakMinutes?: boolean;
    netMinutes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.AttendanceSession$shiftArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceSession"]>;
export type AttendanceSessionSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    shiftId?: boolean;
    shiftDate?: boolean;
    clockInAt?: boolean;
    clockOutAt?: boolean;
    grossMinutes?: boolean;
    breakMinutes?: boolean;
    netMinutes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AttendanceSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "shiftId" | "shiftDate" | "clockInAt" | "clockOutAt" | "grossMinutes" | "breakMinutes" | "netMinutes" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["attendanceSession"]>;
export type AttendanceSessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.AttendanceSession$shiftArgs<ExtArgs>;
    breaks?: boolean | Prisma.AttendanceSession$breaksArgs<ExtArgs>;
    corrections?: boolean | Prisma.AttendanceSession$correctionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AttendanceSessionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AttendanceSessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.AttendanceSession$shiftArgs<ExtArgs>;
};
export type AttendanceSessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.AttendanceSession$shiftArgs<ExtArgs>;
};
export type $AttendanceSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AttendanceSession";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
        shift: Prisma.$ShiftPayload<ExtArgs> | null;
        breaks: Prisma.$BreakRecordPayload<ExtArgs>[];
        corrections: Prisma.$CorrectionRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeId: string;
        shiftId: string | null;
        shiftDate: Date;
        clockInAt: Date;
        clockOutAt: Date | null;
        grossMinutes: number | null;
        breakMinutes: number;
        netMinutes: number | null;
        status: $Enums.AttendanceStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["attendanceSession"]>;
    composites: {};
};
export type AttendanceSessionGetPayload<S extends boolean | null | undefined | AttendanceSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload, S>;
export type AttendanceSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendanceSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendanceSessionCountAggregateInputType | true;
};
export interface AttendanceSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AttendanceSession'];
        meta: {
            name: 'AttendanceSession';
        };
    };
    findUnique<T extends AttendanceSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendanceSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttendanceSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendanceSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttendanceSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttendanceSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttendanceSessionFindManyArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttendanceSessionCreateArgs>(args: Prisma.SelectSubset<T, AttendanceSessionCreateArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttendanceSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttendanceSessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttendanceSessionDeleteArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttendanceSessionUpdateArgs>(args: Prisma.SelectSubset<T, AttendanceSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttendanceSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttendanceSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendanceSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttendanceSessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendanceSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttendanceSessionUpsertArgs>(args: Prisma.SelectSubset<T, AttendanceSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttendanceSessionCountArgs>(args?: Prisma.Subset<T, AttendanceSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendanceSessionCountAggregateOutputType> : number>;
    aggregate<T extends AttendanceSessionAggregateArgs>(args: Prisma.Subset<T, AttendanceSessionAggregateArgs>): Prisma.PrismaPromise<GetAttendanceSessionAggregateType<T>>;
    groupBy<T extends AttendanceSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendanceSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendanceSessionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendanceSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttendanceSessionFieldRefs;
}
export interface Prisma__AttendanceSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    shift<T extends Prisma.AttendanceSession$shiftArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSession$shiftArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    breaks<T extends Prisma.AttendanceSession$breaksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSession$breaksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BreakRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    corrections<T extends Prisma.AttendanceSession$correctionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSession$correctionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CorrectionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttendanceSessionFieldRefs {
    readonly id: Prisma.FieldRef<"AttendanceSession", 'String'>;
    readonly employeeId: Prisma.FieldRef<"AttendanceSession", 'String'>;
    readonly shiftId: Prisma.FieldRef<"AttendanceSession", 'String'>;
    readonly shiftDate: Prisma.FieldRef<"AttendanceSession", 'DateTime'>;
    readonly clockInAt: Prisma.FieldRef<"AttendanceSession", 'DateTime'>;
    readonly clockOutAt: Prisma.FieldRef<"AttendanceSession", 'DateTime'>;
    readonly grossMinutes: Prisma.FieldRef<"AttendanceSession", 'Int'>;
    readonly breakMinutes: Prisma.FieldRef<"AttendanceSession", 'Int'>;
    readonly netMinutes: Prisma.FieldRef<"AttendanceSession", 'Int'>;
    readonly status: Prisma.FieldRef<"AttendanceSession", 'AttendanceStatus'>;
    readonly createdAt: Prisma.FieldRef<"AttendanceSession", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AttendanceSession", 'DateTime'>;
}
export type AttendanceSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSessionSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceSessionOmit<ExtArgs> | null;
    include?: Prisma.AttendanceSessionInclude<ExtArgs> | null;
    where: Prisma.AttendanceSessionWhereUniqueInput;
};
export type AttendanceSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSessionSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceSessionOmit<ExtArgs> | null;
    include?: Prisma.AttendanceSessionInclude<ExtArgs> | null;
    where: Prisma.AttendanceSessionWhereUniqueInput;
};
export type AttendanceSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSessionSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceSessionOmit<ExtArgs> | null;
    include?: Prisma.AttendanceSessionInclude<ExtArgs> | null;
    where?: Prisma.AttendanceSessionWhereInput;
    orderBy?: Prisma.AttendanceSessionOrderByWithRelationInput | Prisma.AttendanceSessionOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceSessionScalarFieldEnum | Prisma.AttendanceSessionScalarFieldEnum[];
};
export type AttendanceSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSessionSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceSessionOmit<ExtArgs> | null;
    include?: Prisma.AttendanceSessionInclude<ExtArgs> | null;
    where?: Prisma.AttendanceSessionWhereInput;
    orderBy?: Prisma.AttendanceSessionOrderByWithRelationInput | Prisma.AttendanceSessionOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceSessionScalarFieldEnum | Prisma.AttendanceSessionScalarFieldEnum[];
};
export type AttendanceSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSessionSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceSessionOmit<ExtArgs> | null;
    include?: Prisma.AttendanceSessionInclude<ExtArgs> | null;
    where?: Prisma.AttendanceSessionWhereInput;
    orderBy?: Prisma.AttendanceSessionOrderByWithRelationInput | Prisma.AttendanceSessionOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceSessionScalarFieldEnum | Prisma.AttendanceSessionScalarFieldEnum[];
};
export type AttendanceSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSessionSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceSessionOmit<ExtArgs> | null;
    include?: Prisma.AttendanceSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceSessionCreateInput, Prisma.AttendanceSessionUncheckedCreateInput>;
};
export type AttendanceSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttendanceSessionCreateManyInput | Prisma.AttendanceSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttendanceSessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceSessionOmit<ExtArgs> | null;
    data: Prisma.AttendanceSessionCreateManyInput | Prisma.AttendanceSessionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AttendanceSessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AttendanceSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSessionSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceSessionOmit<ExtArgs> | null;
    include?: Prisma.AttendanceSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceSessionUpdateInput, Prisma.AttendanceSessionUncheckedUpdateInput>;
    where: Prisma.AttendanceSessionWhereUniqueInput;
};
export type AttendanceSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttendanceSessionUpdateManyMutationInput, Prisma.AttendanceSessionUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceSessionWhereInput;
    limit?: number;
};
export type AttendanceSessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceSessionUpdateManyMutationInput, Prisma.AttendanceSessionUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceSessionWhereInput;
    limit?: number;
    include?: Prisma.AttendanceSessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AttendanceSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSessionSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceSessionOmit<ExtArgs> | null;
    include?: Prisma.AttendanceSessionInclude<ExtArgs> | null;
    where: Prisma.AttendanceSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceSessionCreateInput, Prisma.AttendanceSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttendanceSessionUpdateInput, Prisma.AttendanceSessionUncheckedUpdateInput>;
};
export type AttendanceSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSessionSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceSessionOmit<ExtArgs> | null;
    include?: Prisma.AttendanceSessionInclude<ExtArgs> | null;
    where: Prisma.AttendanceSessionWhereUniqueInput;
};
export type AttendanceSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceSessionWhereInput;
    limit?: number;
};
export type AttendanceSession$shiftArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    where?: Prisma.ShiftWhereInput;
};
export type AttendanceSession$breaksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakRecordSelect<ExtArgs> | null;
    omit?: Prisma.BreakRecordOmit<ExtArgs> | null;
    include?: Prisma.BreakRecordInclude<ExtArgs> | null;
    where?: Prisma.BreakRecordWhereInput;
    orderBy?: Prisma.BreakRecordOrderByWithRelationInput | Prisma.BreakRecordOrderByWithRelationInput[];
    cursor?: Prisma.BreakRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BreakRecordScalarFieldEnum | Prisma.BreakRecordScalarFieldEnum[];
};
export type AttendanceSession$correctionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CorrectionRequestSelect<ExtArgs> | null;
    omit?: Prisma.CorrectionRequestOmit<ExtArgs> | null;
    include?: Prisma.CorrectionRequestInclude<ExtArgs> | null;
    where?: Prisma.CorrectionRequestWhereInput;
    orderBy?: Prisma.CorrectionRequestOrderByWithRelationInput | Prisma.CorrectionRequestOrderByWithRelationInput[];
    cursor?: Prisma.CorrectionRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CorrectionRequestScalarFieldEnum | Prisma.CorrectionRequestScalarFieldEnum[];
};
export type AttendanceSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSessionSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceSessionOmit<ExtArgs> | null;
    include?: Prisma.AttendanceSessionInclude<ExtArgs> | null;
};
