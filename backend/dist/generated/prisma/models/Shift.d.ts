import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ShiftModel = runtime.Types.Result.DefaultSelection<Prisma.$ShiftPayload>;
export type AggregateShift = {
    _count: ShiftCountAggregateOutputType | null;
    _avg: ShiftAvgAggregateOutputType | null;
    _sum: ShiftSumAggregateOutputType | null;
    _min: ShiftMinAggregateOutputType | null;
    _max: ShiftMaxAggregateOutputType | null;
};
export type ShiftAvgAggregateOutputType = {
    workingDays: number | null;
    graceMinutes: number | null;
};
export type ShiftSumAggregateOutputType = {
    workingDays: number[];
    graceMinutes: number | null;
};
export type ShiftMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    startTime: string | null;
    endTime: string | null;
    timezone: string | null;
    graceMinutes: number | null;
    status: $Enums.RecordStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShiftMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    startTime: string | null;
    endTime: string | null;
    timezone: string | null;
    graceMinutes: number | null;
    status: $Enums.RecordStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShiftCountAggregateOutputType = {
    id: number;
    name: number;
    startTime: number;
    endTime: number;
    timezone: number;
    workingDays: number;
    graceMinutes: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ShiftAvgAggregateInputType = {
    workingDays?: true;
    graceMinutes?: true;
};
export type ShiftSumAggregateInputType = {
    workingDays?: true;
    graceMinutes?: true;
};
export type ShiftMinAggregateInputType = {
    id?: true;
    name?: true;
    startTime?: true;
    endTime?: true;
    timezone?: true;
    graceMinutes?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShiftMaxAggregateInputType = {
    id?: true;
    name?: true;
    startTime?: true;
    endTime?: true;
    timezone?: true;
    graceMinutes?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShiftCountAggregateInputType = {
    id?: true;
    name?: true;
    startTime?: true;
    endTime?: true;
    timezone?: true;
    workingDays?: true;
    graceMinutes?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ShiftAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftWhereInput;
    orderBy?: Prisma.ShiftOrderByWithRelationInput | Prisma.ShiftOrderByWithRelationInput[];
    cursor?: Prisma.ShiftWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShiftCountAggregateInputType;
    _avg?: ShiftAvgAggregateInputType;
    _sum?: ShiftSumAggregateInputType;
    _min?: ShiftMinAggregateInputType;
    _max?: ShiftMaxAggregateInputType;
};
export type GetShiftAggregateType<T extends ShiftAggregateArgs> = {
    [P in keyof T & keyof AggregateShift]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShift[P]> : Prisma.GetScalarType<T[P], AggregateShift[P]>;
};
export type ShiftGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftWhereInput;
    orderBy?: Prisma.ShiftOrderByWithAggregationInput | Prisma.ShiftOrderByWithAggregationInput[];
    by: Prisma.ShiftScalarFieldEnum[] | Prisma.ShiftScalarFieldEnum;
    having?: Prisma.ShiftScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShiftCountAggregateInputType | true;
    _avg?: ShiftAvgAggregateInputType;
    _sum?: ShiftSumAggregateInputType;
    _min?: ShiftMinAggregateInputType;
    _max?: ShiftMaxAggregateInputType;
};
export type ShiftGroupByOutputType = {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    timezone: string;
    workingDays: number[];
    graceMinutes: number;
    status: $Enums.RecordStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: ShiftCountAggregateOutputType | null;
    _avg: ShiftAvgAggregateOutputType | null;
    _sum: ShiftSumAggregateOutputType | null;
    _min: ShiftMinAggregateOutputType | null;
    _max: ShiftMaxAggregateOutputType | null;
};
export type GetShiftGroupByPayload<T extends ShiftGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShiftGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShiftGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShiftGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShiftGroupByOutputType[P]>;
}>>;
export type ShiftWhereInput = {
    AND?: Prisma.ShiftWhereInput | Prisma.ShiftWhereInput[];
    OR?: Prisma.ShiftWhereInput[];
    NOT?: Prisma.ShiftWhereInput | Prisma.ShiftWhereInput[];
    id?: Prisma.StringFilter<"Shift"> | string;
    name?: Prisma.StringFilter<"Shift"> | string;
    startTime?: Prisma.StringFilter<"Shift"> | string;
    endTime?: Prisma.StringFilter<"Shift"> | string;
    timezone?: Prisma.StringFilter<"Shift"> | string;
    workingDays?: Prisma.IntNullableListFilter<"Shift">;
    graceMinutes?: Prisma.IntFilter<"Shift"> | number;
    status?: Prisma.EnumRecordStatusFilter<"Shift"> | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFilter<"Shift"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Shift"> | Date | string;
    assignments?: Prisma.ShiftAssignmentListRelationFilter;
    sessions?: Prisma.AttendanceSessionListRelationFilter;
};
export type ShiftOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    workingDays?: Prisma.SortOrder;
    graceMinutes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    assignments?: Prisma.ShiftAssignmentOrderByRelationAggregateInput;
    sessions?: Prisma.AttendanceSessionOrderByRelationAggregateInput;
};
export type ShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShiftWhereInput | Prisma.ShiftWhereInput[];
    OR?: Prisma.ShiftWhereInput[];
    NOT?: Prisma.ShiftWhereInput | Prisma.ShiftWhereInput[];
    name?: Prisma.StringFilter<"Shift"> | string;
    startTime?: Prisma.StringFilter<"Shift"> | string;
    endTime?: Prisma.StringFilter<"Shift"> | string;
    timezone?: Prisma.StringFilter<"Shift"> | string;
    workingDays?: Prisma.IntNullableListFilter<"Shift">;
    graceMinutes?: Prisma.IntFilter<"Shift"> | number;
    status?: Prisma.EnumRecordStatusFilter<"Shift"> | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFilter<"Shift"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Shift"> | Date | string;
    assignments?: Prisma.ShiftAssignmentListRelationFilter;
    sessions?: Prisma.AttendanceSessionListRelationFilter;
}, "id">;
export type ShiftOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    workingDays?: Prisma.SortOrder;
    graceMinutes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ShiftCountOrderByAggregateInput;
    _avg?: Prisma.ShiftAvgOrderByAggregateInput;
    _max?: Prisma.ShiftMaxOrderByAggregateInput;
    _min?: Prisma.ShiftMinOrderByAggregateInput;
    _sum?: Prisma.ShiftSumOrderByAggregateInput;
};
export type ShiftScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShiftScalarWhereWithAggregatesInput | Prisma.ShiftScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShiftScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShiftScalarWhereWithAggregatesInput | Prisma.ShiftScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Shift"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Shift"> | string;
    startTime?: Prisma.StringWithAggregatesFilter<"Shift"> | string;
    endTime?: Prisma.StringWithAggregatesFilter<"Shift"> | string;
    timezone?: Prisma.StringWithAggregatesFilter<"Shift"> | string;
    workingDays?: Prisma.IntNullableListFilter<"Shift">;
    graceMinutes?: Prisma.IntWithAggregatesFilter<"Shift"> | number;
    status?: Prisma.EnumRecordStatusWithAggregatesFilter<"Shift"> | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Shift"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Shift"> | Date | string;
};
export type ShiftCreateInput = {
    id?: string;
    name: string;
    startTime: string;
    endTime: string;
    timezone: string;
    workingDays?: Prisma.ShiftCreateworkingDaysInput | number[];
    graceMinutes?: number;
    status?: $Enums.RecordStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignments?: Prisma.ShiftAssignmentCreateNestedManyWithoutShiftInput;
    sessions?: Prisma.AttendanceSessionCreateNestedManyWithoutShiftInput;
};
export type ShiftUncheckedCreateInput = {
    id?: string;
    name: string;
    startTime: string;
    endTime: string;
    timezone: string;
    workingDays?: Prisma.ShiftCreateworkingDaysInput | number[];
    graceMinutes?: number;
    status?: $Enums.RecordStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignments?: Prisma.ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput;
    sessions?: Prisma.AttendanceSessionUncheckedCreateNestedManyWithoutShiftInput;
};
export type ShiftUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    workingDays?: Prisma.ShiftUpdateworkingDaysInput | number[];
    graceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.ShiftAssignmentUpdateManyWithoutShiftNestedInput;
    sessions?: Prisma.AttendanceSessionUpdateManyWithoutShiftNestedInput;
};
export type ShiftUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    workingDays?: Prisma.ShiftUpdateworkingDaysInput | number[];
    graceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput;
    sessions?: Prisma.AttendanceSessionUncheckedUpdateManyWithoutShiftNestedInput;
};
export type ShiftCreateManyInput = {
    id?: string;
    name: string;
    startTime: string;
    endTime: string;
    timezone: string;
    workingDays?: Prisma.ShiftCreateworkingDaysInput | number[];
    graceMinutes?: number;
    status?: $Enums.RecordStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShiftUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    workingDays?: Prisma.ShiftUpdateworkingDaysInput | number[];
    graceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    workingDays?: Prisma.ShiftUpdateworkingDaysInput | number[];
    graceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    has?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    hasEvery?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    hasSome?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ShiftCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    workingDays?: Prisma.SortOrder;
    graceMinutes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShiftAvgOrderByAggregateInput = {
    workingDays?: Prisma.SortOrder;
    graceMinutes?: Prisma.SortOrder;
};
export type ShiftMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    graceMinutes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShiftMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    graceMinutes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShiftSumOrderByAggregateInput = {
    workingDays?: Prisma.SortOrder;
    graceMinutes?: Prisma.SortOrder;
};
export type ShiftScalarRelationFilter = {
    is?: Prisma.ShiftWhereInput;
    isNot?: Prisma.ShiftWhereInput;
};
export type ShiftNullableScalarRelationFilter = {
    is?: Prisma.ShiftWhereInput | null;
    isNot?: Prisma.ShiftWhereInput | null;
};
export type ShiftCreateworkingDaysInput = {
    set: number[];
};
export type ShiftUpdateworkingDaysInput = {
    set?: number[];
    push?: number | number[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ShiftCreateNestedOneWithoutAssignmentsInput = {
    create?: Prisma.XOR<Prisma.ShiftCreateWithoutAssignmentsInput, Prisma.ShiftUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.ShiftCreateOrConnectWithoutAssignmentsInput;
    connect?: Prisma.ShiftWhereUniqueInput;
};
export type ShiftUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftCreateWithoutAssignmentsInput, Prisma.ShiftUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.ShiftCreateOrConnectWithoutAssignmentsInput;
    upsert?: Prisma.ShiftUpsertWithoutAssignmentsInput;
    connect?: Prisma.ShiftWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShiftUpdateToOneWithWhereWithoutAssignmentsInput, Prisma.ShiftUpdateWithoutAssignmentsInput>, Prisma.ShiftUncheckedUpdateWithoutAssignmentsInput>;
};
export type ShiftCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.ShiftCreateWithoutSessionsInput, Prisma.ShiftUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.ShiftCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.ShiftWhereUniqueInput;
};
export type ShiftUpdateOneWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftCreateWithoutSessionsInput, Prisma.ShiftUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.ShiftCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.ShiftUpsertWithoutSessionsInput;
    disconnect?: Prisma.ShiftWhereInput | boolean;
    delete?: Prisma.ShiftWhereInput | boolean;
    connect?: Prisma.ShiftWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShiftUpdateToOneWithWhereWithoutSessionsInput, Prisma.ShiftUpdateWithoutSessionsInput>, Prisma.ShiftUncheckedUpdateWithoutSessionsInput>;
};
export type ShiftCreateWithoutAssignmentsInput = {
    id?: string;
    name: string;
    startTime: string;
    endTime: string;
    timezone: string;
    workingDays?: Prisma.ShiftCreateworkingDaysInput | number[];
    graceMinutes?: number;
    status?: $Enums.RecordStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessions?: Prisma.AttendanceSessionCreateNestedManyWithoutShiftInput;
};
export type ShiftUncheckedCreateWithoutAssignmentsInput = {
    id?: string;
    name: string;
    startTime: string;
    endTime: string;
    timezone: string;
    workingDays?: Prisma.ShiftCreateworkingDaysInput | number[];
    graceMinutes?: number;
    status?: $Enums.RecordStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessions?: Prisma.AttendanceSessionUncheckedCreateNestedManyWithoutShiftInput;
};
export type ShiftCreateOrConnectWithoutAssignmentsInput = {
    where: Prisma.ShiftWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftCreateWithoutAssignmentsInput, Prisma.ShiftUncheckedCreateWithoutAssignmentsInput>;
};
export type ShiftUpsertWithoutAssignmentsInput = {
    update: Prisma.XOR<Prisma.ShiftUpdateWithoutAssignmentsInput, Prisma.ShiftUncheckedUpdateWithoutAssignmentsInput>;
    create: Prisma.XOR<Prisma.ShiftCreateWithoutAssignmentsInput, Prisma.ShiftUncheckedCreateWithoutAssignmentsInput>;
    where?: Prisma.ShiftWhereInput;
};
export type ShiftUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: Prisma.ShiftWhereInput;
    data: Prisma.XOR<Prisma.ShiftUpdateWithoutAssignmentsInput, Prisma.ShiftUncheckedUpdateWithoutAssignmentsInput>;
};
export type ShiftUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    workingDays?: Prisma.ShiftUpdateworkingDaysInput | number[];
    graceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.AttendanceSessionUpdateManyWithoutShiftNestedInput;
};
export type ShiftUncheckedUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    workingDays?: Prisma.ShiftUpdateworkingDaysInput | number[];
    graceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.AttendanceSessionUncheckedUpdateManyWithoutShiftNestedInput;
};
export type ShiftCreateWithoutSessionsInput = {
    id?: string;
    name: string;
    startTime: string;
    endTime: string;
    timezone: string;
    workingDays?: Prisma.ShiftCreateworkingDaysInput | number[];
    graceMinutes?: number;
    status?: $Enums.RecordStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignments?: Prisma.ShiftAssignmentCreateNestedManyWithoutShiftInput;
};
export type ShiftUncheckedCreateWithoutSessionsInput = {
    id?: string;
    name: string;
    startTime: string;
    endTime: string;
    timezone: string;
    workingDays?: Prisma.ShiftCreateworkingDaysInput | number[];
    graceMinutes?: number;
    status?: $Enums.RecordStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignments?: Prisma.ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput;
};
export type ShiftCreateOrConnectWithoutSessionsInput = {
    where: Prisma.ShiftWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftCreateWithoutSessionsInput, Prisma.ShiftUncheckedCreateWithoutSessionsInput>;
};
export type ShiftUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.ShiftUpdateWithoutSessionsInput, Prisma.ShiftUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.ShiftCreateWithoutSessionsInput, Prisma.ShiftUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.ShiftWhereInput;
};
export type ShiftUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.ShiftWhereInput;
    data: Prisma.XOR<Prisma.ShiftUpdateWithoutSessionsInput, Prisma.ShiftUncheckedUpdateWithoutSessionsInput>;
};
export type ShiftUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    workingDays?: Prisma.ShiftUpdateworkingDaysInput | number[];
    graceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.ShiftAssignmentUpdateManyWithoutShiftNestedInput;
};
export type ShiftUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    workingDays?: Prisma.ShiftUpdateworkingDaysInput | number[];
    graceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput;
};
export type ShiftCountOutputType = {
    assignments: number;
    sessions: number;
};
export type ShiftCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignments?: boolean | ShiftCountOutputTypeCountAssignmentsArgs;
    sessions?: boolean | ShiftCountOutputTypeCountSessionsArgs;
};
export type ShiftCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftCountOutputTypeSelect<ExtArgs> | null;
};
export type ShiftCountOutputTypeCountAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftAssignmentWhereInput;
};
export type ShiftCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceSessionWhereInput;
};
export type ShiftSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    timezone?: boolean;
    workingDays?: boolean;
    graceMinutes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    assignments?: boolean | Prisma.Shift$assignmentsArgs<ExtArgs>;
    sessions?: boolean | Prisma.Shift$sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ShiftCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shift"]>;
export type ShiftSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    timezone?: boolean;
    workingDays?: boolean;
    graceMinutes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["shift"]>;
export type ShiftSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    timezone?: boolean;
    workingDays?: boolean;
    graceMinutes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["shift"]>;
export type ShiftSelectScalar = {
    id?: boolean;
    name?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    timezone?: boolean;
    workingDays?: boolean;
    graceMinutes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ShiftOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "startTime" | "endTime" | "timezone" | "workingDays" | "graceMinutes" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["shift"]>;
export type ShiftInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignments?: boolean | Prisma.Shift$assignmentsArgs<ExtArgs>;
    sessions?: boolean | Prisma.Shift$sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ShiftCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ShiftIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ShiftIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ShiftPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Shift";
    objects: {
        assignments: Prisma.$ShiftAssignmentPayload<ExtArgs>[];
        sessions: Prisma.$AttendanceSessionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        startTime: string;
        endTime: string;
        timezone: string;
        workingDays: number[];
        graceMinutes: number;
        status: $Enums.RecordStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["shift"]>;
    composites: {};
};
export type ShiftGetPayload<S extends boolean | null | undefined | ShiftDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShiftPayload, S>;
export type ShiftCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShiftCountAggregateInputType | true;
};
export interface ShiftDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Shift'];
        meta: {
            name: 'Shift';
        };
    };
    findUnique<T extends ShiftFindUniqueArgs>(args: Prisma.SelectSubset<T, ShiftFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShiftFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShiftFindFirstArgs>(args?: Prisma.SelectSubset<T, ShiftFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShiftFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShiftFindManyArgs>(args?: Prisma.SelectSubset<T, ShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShiftCreateArgs>(args: Prisma.SelectSubset<T, ShiftCreateArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShiftCreateManyArgs>(args?: Prisma.SelectSubset<T, ShiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShiftCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShiftDeleteArgs>(args: Prisma.SelectSubset<T, ShiftDeleteArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShiftUpdateArgs>(args: Prisma.SelectSubset<T, ShiftUpdateArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShiftDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShiftUpdateManyArgs>(args: Prisma.SelectSubset<T, ShiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShiftUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShiftUpsertArgs>(args: Prisma.SelectSubset<T, ShiftUpsertArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShiftCountArgs>(args?: Prisma.Subset<T, ShiftCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShiftCountAggregateOutputType> : number>;
    aggregate<T extends ShiftAggregateArgs>(args: Prisma.Subset<T, ShiftAggregateArgs>): Prisma.PrismaPromise<GetShiftAggregateType<T>>;
    groupBy<T extends ShiftGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShiftGroupByArgs['orderBy'];
    } : {
        orderBy?: ShiftGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShiftFieldRefs;
}
export interface Prisma__ShiftClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    assignments<T extends Prisma.Shift$assignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Shift$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessions<T extends Prisma.Shift$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Shift$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShiftFieldRefs {
    readonly id: Prisma.FieldRef<"Shift", 'String'>;
    readonly name: Prisma.FieldRef<"Shift", 'String'>;
    readonly startTime: Prisma.FieldRef<"Shift", 'String'>;
    readonly endTime: Prisma.FieldRef<"Shift", 'String'>;
    readonly timezone: Prisma.FieldRef<"Shift", 'String'>;
    readonly workingDays: Prisma.FieldRef<"Shift", 'Int[]'>;
    readonly graceMinutes: Prisma.FieldRef<"Shift", 'Int'>;
    readonly status: Prisma.FieldRef<"Shift", 'RecordStatus'>;
    readonly createdAt: Prisma.FieldRef<"Shift", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Shift", 'DateTime'>;
}
export type ShiftFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    where: Prisma.ShiftWhereUniqueInput;
};
export type ShiftFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    where: Prisma.ShiftWhereUniqueInput;
};
export type ShiftFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    where?: Prisma.ShiftWhereInput;
    orderBy?: Prisma.ShiftOrderByWithRelationInput | Prisma.ShiftOrderByWithRelationInput[];
    cursor?: Prisma.ShiftWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShiftScalarFieldEnum | Prisma.ShiftScalarFieldEnum[];
};
export type ShiftFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    where?: Prisma.ShiftWhereInput;
    orderBy?: Prisma.ShiftOrderByWithRelationInput | Prisma.ShiftOrderByWithRelationInput[];
    cursor?: Prisma.ShiftWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShiftScalarFieldEnum | Prisma.ShiftScalarFieldEnum[];
};
export type ShiftFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    where?: Prisma.ShiftWhereInput;
    orderBy?: Prisma.ShiftOrderByWithRelationInput | Prisma.ShiftOrderByWithRelationInput[];
    cursor?: Prisma.ShiftWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShiftScalarFieldEnum | Prisma.ShiftScalarFieldEnum[];
};
export type ShiftCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftCreateInput, Prisma.ShiftUncheckedCreateInput>;
};
export type ShiftCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShiftCreateManyInput | Prisma.ShiftCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ShiftCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    data: Prisma.ShiftCreateManyInput | Prisma.ShiftCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ShiftUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftUpdateInput, Prisma.ShiftUncheckedUpdateInput>;
    where: Prisma.ShiftWhereUniqueInput;
};
export type ShiftUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShiftUpdateManyMutationInput, Prisma.ShiftUncheckedUpdateManyInput>;
    where?: Prisma.ShiftWhereInput;
    limit?: number;
};
export type ShiftUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftUpdateManyMutationInput, Prisma.ShiftUncheckedUpdateManyInput>;
    where?: Prisma.ShiftWhereInput;
    limit?: number;
};
export type ShiftUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    where: Prisma.ShiftWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftCreateInput, Prisma.ShiftUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShiftUpdateInput, Prisma.ShiftUncheckedUpdateInput>;
};
export type ShiftDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    where: Prisma.ShiftWhereUniqueInput;
};
export type ShiftDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftWhereInput;
    limit?: number;
};
export type Shift$assignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.ShiftAssignmentOmit<ExtArgs> | null;
    include?: Prisma.ShiftAssignmentInclude<ExtArgs> | null;
    where?: Prisma.ShiftAssignmentWhereInput;
    orderBy?: Prisma.ShiftAssignmentOrderByWithRelationInput | Prisma.ShiftAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.ShiftAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShiftAssignmentScalarFieldEnum | Prisma.ShiftAssignmentScalarFieldEnum[];
};
export type Shift$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShiftDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
};
