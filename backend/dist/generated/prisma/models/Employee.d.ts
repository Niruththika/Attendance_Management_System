import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmployeeModel = runtime.Types.Result.DefaultSelection<Prisma.$EmployeePayload>;
export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
};
export type EmployeeMinAggregateOutputType = {
    id: string | null;
    employeeCode: string | null;
    name: string | null;
    email: string | null;
    status: $Enums.RecordStatus | null;
    teamId: string | null;
    managerId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EmployeeMaxAggregateOutputType = {
    id: string | null;
    employeeCode: string | null;
    name: string | null;
    email: string | null;
    status: $Enums.RecordStatus | null;
    teamId: string | null;
    managerId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EmployeeCountAggregateOutputType = {
    id: number;
    employeeCode: number;
    name: number;
    email: number;
    status: number;
    teamId: number;
    managerId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EmployeeMinAggregateInputType = {
    id?: true;
    employeeCode?: true;
    name?: true;
    email?: true;
    status?: true;
    teamId?: true;
    managerId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EmployeeMaxAggregateInputType = {
    id?: true;
    employeeCode?: true;
    name?: true;
    email?: true;
    status?: true;
    teamId?: true;
    managerId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EmployeeCountAggregateInputType = {
    id?: true;
    employeeCode?: true;
    name?: true;
    email?: true;
    status?: true;
    teamId?: true;
    managerId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EmployeeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmployeeCountAggregateInputType;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
};
export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmployee[P]> : Prisma.GetScalarType<T[P], AggregateEmployee[P]>;
};
export type EmployeeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithAggregationInput | Prisma.EmployeeOrderByWithAggregationInput[];
    by: Prisma.EmployeeScalarFieldEnum[] | Prisma.EmployeeScalarFieldEnum;
    having?: Prisma.EmployeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInputType | true;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
};
export type EmployeeGroupByOutputType = {
    id: string;
    employeeCode: string;
    name: string;
    email: string;
    status: $Enums.RecordStatus;
    teamId: string | null;
    managerId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: EmployeeCountAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
};
export type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmployeeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmployeeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmployeeGroupByOutputType[P]>;
}>>;
export type EmployeeWhereInput = {
    AND?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    OR?: Prisma.EmployeeWhereInput[];
    NOT?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    id?: Prisma.StringFilter<"Employee"> | string;
    employeeCode?: Prisma.StringFilter<"Employee"> | string;
    name?: Prisma.StringFilter<"Employee"> | string;
    email?: Prisma.StringFilter<"Employee"> | string;
    status?: Prisma.EnumRecordStatusFilter<"Employee"> | $Enums.RecordStatus;
    teamId?: Prisma.StringNullableFilter<"Employee"> | string | null;
    managerId?: Prisma.StringNullableFilter<"Employee"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
    team?: Prisma.XOR<Prisma.TeamNullableScalarRelationFilter, Prisma.TeamWhereInput> | null;
    manager?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
    directReports?: Prisma.EmployeeListRelationFilter;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    attendanceSessions?: Prisma.AttendanceSessionListRelationFilter;
    shiftAssignments?: Prisma.ShiftAssignmentListRelationFilter;
};
export type EmployeeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeCode?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    teamId?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    team?: Prisma.TeamOrderByWithRelationInput;
    manager?: Prisma.EmployeeOrderByWithRelationInput;
    directReports?: Prisma.EmployeeOrderByRelationAggregateInput;
    user?: Prisma.UserOrderByWithRelationInput;
    attendanceSessions?: Prisma.AttendanceSessionOrderByRelationAggregateInput;
    shiftAssignments?: Prisma.ShiftAssignmentOrderByRelationAggregateInput;
};
export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    employeeCode?: string;
    email?: string;
    AND?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    OR?: Prisma.EmployeeWhereInput[];
    NOT?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    name?: Prisma.StringFilter<"Employee"> | string;
    status?: Prisma.EnumRecordStatusFilter<"Employee"> | $Enums.RecordStatus;
    teamId?: Prisma.StringNullableFilter<"Employee"> | string | null;
    managerId?: Prisma.StringNullableFilter<"Employee"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
    team?: Prisma.XOR<Prisma.TeamNullableScalarRelationFilter, Prisma.TeamWhereInput> | null;
    manager?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
    directReports?: Prisma.EmployeeListRelationFilter;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    attendanceSessions?: Prisma.AttendanceSessionListRelationFilter;
    shiftAssignments?: Prisma.ShiftAssignmentListRelationFilter;
}, "id" | "employeeCode" | "email">;
export type EmployeeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeCode?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    teamId?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EmployeeCountOrderByAggregateInput;
    _max?: Prisma.EmployeeMaxOrderByAggregateInput;
    _min?: Prisma.EmployeeMinOrderByAggregateInput;
};
export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmployeeScalarWhereWithAggregatesInput | Prisma.EmployeeScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmployeeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmployeeScalarWhereWithAggregatesInput | Prisma.EmployeeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Employee"> | string;
    employeeCode?: Prisma.StringWithAggregatesFilter<"Employee"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Employee"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Employee"> | string;
    status?: Prisma.EnumRecordStatusWithAggregatesFilter<"Employee"> | $Enums.RecordStatus;
    teamId?: Prisma.StringNullableWithAggregatesFilter<"Employee"> | string | null;
    managerId?: Prisma.StringNullableWithAggregatesFilter<"Employee"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Employee"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Employee"> | Date | string;
};
export type EmployeeCreateInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    team?: Prisma.TeamCreateNestedOneWithoutEmployeesInput;
    manager?: Prisma.EmployeeCreateNestedOneWithoutDirectReportsInput;
    directReports?: Prisma.EmployeeCreateNestedManyWithoutManagerInput;
    user?: Prisma.UserCreateNestedOneWithoutEmployeeInput;
    attendanceSessions?: Prisma.AttendanceSessionCreateNestedManyWithoutEmployeeInput;
    shiftAssignments?: Prisma.ShiftAssignmentCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUncheckedCreateInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    teamId?: string | null;
    managerId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    directReports?: Prisma.EmployeeUncheckedCreateNestedManyWithoutManagerInput;
    user?: Prisma.UserUncheckedCreateNestedOneWithoutEmployeeInput;
    attendanceSessions?: Prisma.AttendanceSessionUncheckedCreateNestedManyWithoutEmployeeInput;
    shiftAssignments?: Prisma.ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneWithoutEmployeesNestedInput;
    manager?: Prisma.EmployeeUpdateOneWithoutDirectReportsNestedInput;
    directReports?: Prisma.EmployeeUpdateManyWithoutManagerNestedInput;
    user?: Prisma.UserUpdateOneWithoutEmployeeNestedInput;
    attendanceSessions?: Prisma.AttendanceSessionUpdateManyWithoutEmployeeNestedInput;
    shiftAssignments?: Prisma.ShiftAssignmentUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    directReports?: Prisma.EmployeeUncheckedUpdateManyWithoutManagerNestedInput;
    user?: Prisma.UserUncheckedUpdateOneWithoutEmployeeNestedInput;
    attendanceSessions?: Prisma.AttendanceSessionUncheckedUpdateManyWithoutEmployeeNestedInput;
    shiftAssignments?: Prisma.ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeCreateManyInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    teamId?: string | null;
    managerId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmployeeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeListRelationFilter = {
    every?: Prisma.EmployeeWhereInput;
    some?: Prisma.EmployeeWhereInput;
    none?: Prisma.EmployeeWhereInput;
};
export type EmployeeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EmployeeNullableScalarRelationFilter = {
    is?: Prisma.EmployeeWhereInput | null;
    isNot?: Prisma.EmployeeWhereInput | null;
};
export type EmployeeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeCode?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmployeeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeCode?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmployeeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeCode?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmployeeScalarRelationFilter = {
    is?: Prisma.EmployeeWhereInput;
    isNot?: Prisma.EmployeeWhereInput;
};
export type EmployeeCreateNestedManyWithoutTeamInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutTeamInput, Prisma.EmployeeUncheckedCreateWithoutTeamInput> | Prisma.EmployeeCreateWithoutTeamInput[] | Prisma.EmployeeUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutTeamInput | Prisma.EmployeeCreateOrConnectWithoutTeamInput[];
    createMany?: Prisma.EmployeeCreateManyTeamInputEnvelope;
    connect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
};
export type EmployeeUncheckedCreateNestedManyWithoutTeamInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutTeamInput, Prisma.EmployeeUncheckedCreateWithoutTeamInput> | Prisma.EmployeeCreateWithoutTeamInput[] | Prisma.EmployeeUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutTeamInput | Prisma.EmployeeCreateOrConnectWithoutTeamInput[];
    createMany?: Prisma.EmployeeCreateManyTeamInputEnvelope;
    connect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
};
export type EmployeeUpdateManyWithoutTeamNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutTeamInput, Prisma.EmployeeUncheckedCreateWithoutTeamInput> | Prisma.EmployeeCreateWithoutTeamInput[] | Prisma.EmployeeUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutTeamInput | Prisma.EmployeeCreateOrConnectWithoutTeamInput[];
    upsert?: Prisma.EmployeeUpsertWithWhereUniqueWithoutTeamInput | Prisma.EmployeeUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: Prisma.EmployeeCreateManyTeamInputEnvelope;
    set?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    disconnect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    delete?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    connect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    update?: Prisma.EmployeeUpdateWithWhereUniqueWithoutTeamInput | Prisma.EmployeeUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: Prisma.EmployeeUpdateManyWithWhereWithoutTeamInput | Prisma.EmployeeUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: Prisma.EmployeeScalarWhereInput | Prisma.EmployeeScalarWhereInput[];
};
export type EmployeeUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutTeamInput, Prisma.EmployeeUncheckedCreateWithoutTeamInput> | Prisma.EmployeeCreateWithoutTeamInput[] | Prisma.EmployeeUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutTeamInput | Prisma.EmployeeCreateOrConnectWithoutTeamInput[];
    upsert?: Prisma.EmployeeUpsertWithWhereUniqueWithoutTeamInput | Prisma.EmployeeUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: Prisma.EmployeeCreateManyTeamInputEnvelope;
    set?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    disconnect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    delete?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    connect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    update?: Prisma.EmployeeUpdateWithWhereUniqueWithoutTeamInput | Prisma.EmployeeUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: Prisma.EmployeeUpdateManyWithWhereWithoutTeamInput | Prisma.EmployeeUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: Prisma.EmployeeScalarWhereInput | Prisma.EmployeeScalarWhereInput[];
};
export type EmployeeCreateNestedOneWithoutDirectReportsInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutDirectReportsInput, Prisma.EmployeeUncheckedCreateWithoutDirectReportsInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutDirectReportsInput;
    connect?: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeCreateNestedManyWithoutManagerInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutManagerInput, Prisma.EmployeeUncheckedCreateWithoutManagerInput> | Prisma.EmployeeCreateWithoutManagerInput[] | Prisma.EmployeeUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutManagerInput | Prisma.EmployeeCreateOrConnectWithoutManagerInput[];
    createMany?: Prisma.EmployeeCreateManyManagerInputEnvelope;
    connect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
};
export type EmployeeUncheckedCreateNestedManyWithoutManagerInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutManagerInput, Prisma.EmployeeUncheckedCreateWithoutManagerInput> | Prisma.EmployeeCreateWithoutManagerInput[] | Prisma.EmployeeUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutManagerInput | Prisma.EmployeeCreateOrConnectWithoutManagerInput[];
    createMany?: Prisma.EmployeeCreateManyManagerInputEnvelope;
    connect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
};
export type EnumRecordStatusFieldUpdateOperationsInput = {
    set?: $Enums.RecordStatus;
};
export type EmployeeUpdateOneWithoutDirectReportsNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutDirectReportsInput, Prisma.EmployeeUncheckedCreateWithoutDirectReportsInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutDirectReportsInput;
    upsert?: Prisma.EmployeeUpsertWithoutDirectReportsInput;
    disconnect?: Prisma.EmployeeWhereInput | boolean;
    delete?: Prisma.EmployeeWhereInput | boolean;
    connect?: Prisma.EmployeeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeeUpdateToOneWithWhereWithoutDirectReportsInput, Prisma.EmployeeUpdateWithoutDirectReportsInput>, Prisma.EmployeeUncheckedUpdateWithoutDirectReportsInput>;
};
export type EmployeeUpdateManyWithoutManagerNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutManagerInput, Prisma.EmployeeUncheckedCreateWithoutManagerInput> | Prisma.EmployeeCreateWithoutManagerInput[] | Prisma.EmployeeUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutManagerInput | Prisma.EmployeeCreateOrConnectWithoutManagerInput[];
    upsert?: Prisma.EmployeeUpsertWithWhereUniqueWithoutManagerInput | Prisma.EmployeeUpsertWithWhereUniqueWithoutManagerInput[];
    createMany?: Prisma.EmployeeCreateManyManagerInputEnvelope;
    set?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    disconnect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    delete?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    connect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    update?: Prisma.EmployeeUpdateWithWhereUniqueWithoutManagerInput | Prisma.EmployeeUpdateWithWhereUniqueWithoutManagerInput[];
    updateMany?: Prisma.EmployeeUpdateManyWithWhereWithoutManagerInput | Prisma.EmployeeUpdateManyWithWhereWithoutManagerInput[];
    deleteMany?: Prisma.EmployeeScalarWhereInput | Prisma.EmployeeScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EmployeeUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutManagerInput, Prisma.EmployeeUncheckedCreateWithoutManagerInput> | Prisma.EmployeeCreateWithoutManagerInput[] | Prisma.EmployeeUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutManagerInput | Prisma.EmployeeCreateOrConnectWithoutManagerInput[];
    upsert?: Prisma.EmployeeUpsertWithWhereUniqueWithoutManagerInput | Prisma.EmployeeUpsertWithWhereUniqueWithoutManagerInput[];
    createMany?: Prisma.EmployeeCreateManyManagerInputEnvelope;
    set?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    disconnect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    delete?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    connect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    update?: Prisma.EmployeeUpdateWithWhereUniqueWithoutManagerInput | Prisma.EmployeeUpdateWithWhereUniqueWithoutManagerInput[];
    updateMany?: Prisma.EmployeeUpdateManyWithWhereWithoutManagerInput | Prisma.EmployeeUpdateManyWithWhereWithoutManagerInput[];
    deleteMany?: Prisma.EmployeeScalarWhereInput | Prisma.EmployeeScalarWhereInput[];
};
export type EmployeeCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutUserInput, Prisma.EmployeeUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutUserInput;
    connect?: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutUserInput, Prisma.EmployeeUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutUserInput;
    upsert?: Prisma.EmployeeUpsertWithoutUserInput;
    disconnect?: Prisma.EmployeeWhereInput | boolean;
    delete?: Prisma.EmployeeWhereInput | boolean;
    connect?: Prisma.EmployeeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeeUpdateToOneWithWhereWithoutUserInput, Prisma.EmployeeUpdateWithoutUserInput>, Prisma.EmployeeUncheckedUpdateWithoutUserInput>;
};
export type EmployeeCreateNestedOneWithoutShiftAssignmentsInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutShiftAssignmentsInput, Prisma.EmployeeUncheckedCreateWithoutShiftAssignmentsInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutShiftAssignmentsInput;
    connect?: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeUpdateOneRequiredWithoutShiftAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutShiftAssignmentsInput, Prisma.EmployeeUncheckedCreateWithoutShiftAssignmentsInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutShiftAssignmentsInput;
    upsert?: Prisma.EmployeeUpsertWithoutShiftAssignmentsInput;
    connect?: Prisma.EmployeeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeeUpdateToOneWithWhereWithoutShiftAssignmentsInput, Prisma.EmployeeUpdateWithoutShiftAssignmentsInput>, Prisma.EmployeeUncheckedUpdateWithoutShiftAssignmentsInput>;
};
export type EmployeeCreateNestedOneWithoutAttendanceSessionsInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutAttendanceSessionsInput, Prisma.EmployeeUncheckedCreateWithoutAttendanceSessionsInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutAttendanceSessionsInput;
    connect?: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeUpdateOneRequiredWithoutAttendanceSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutAttendanceSessionsInput, Prisma.EmployeeUncheckedCreateWithoutAttendanceSessionsInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutAttendanceSessionsInput;
    upsert?: Prisma.EmployeeUpsertWithoutAttendanceSessionsInput;
    connect?: Prisma.EmployeeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeeUpdateToOneWithWhereWithoutAttendanceSessionsInput, Prisma.EmployeeUpdateWithoutAttendanceSessionsInput>, Prisma.EmployeeUncheckedUpdateWithoutAttendanceSessionsInput>;
};
export type EmployeeCreateWithoutTeamInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    manager?: Prisma.EmployeeCreateNestedOneWithoutDirectReportsInput;
    directReports?: Prisma.EmployeeCreateNestedManyWithoutManagerInput;
    user?: Prisma.UserCreateNestedOneWithoutEmployeeInput;
    attendanceSessions?: Prisma.AttendanceSessionCreateNestedManyWithoutEmployeeInput;
    shiftAssignments?: Prisma.ShiftAssignmentCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUncheckedCreateWithoutTeamInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    managerId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    directReports?: Prisma.EmployeeUncheckedCreateNestedManyWithoutManagerInput;
    user?: Prisma.UserUncheckedCreateNestedOneWithoutEmployeeInput;
    attendanceSessions?: Prisma.AttendanceSessionUncheckedCreateNestedManyWithoutEmployeeInput;
    shiftAssignments?: Prisma.ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeCreateOrConnectWithoutTeamInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutTeamInput, Prisma.EmployeeUncheckedCreateWithoutTeamInput>;
};
export type EmployeeCreateManyTeamInputEnvelope = {
    data: Prisma.EmployeeCreateManyTeamInput | Prisma.EmployeeCreateManyTeamInput[];
    skipDuplicates?: boolean;
};
export type EmployeeUpsertWithWhereUniqueWithoutTeamInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmployeeUpdateWithoutTeamInput, Prisma.EmployeeUncheckedUpdateWithoutTeamInput>;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutTeamInput, Prisma.EmployeeUncheckedCreateWithoutTeamInput>;
};
export type EmployeeUpdateWithWhereUniqueWithoutTeamInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmployeeUpdateWithoutTeamInput, Prisma.EmployeeUncheckedUpdateWithoutTeamInput>;
};
export type EmployeeUpdateManyWithWhereWithoutTeamInput = {
    where: Prisma.EmployeeScalarWhereInput;
    data: Prisma.XOR<Prisma.EmployeeUpdateManyMutationInput, Prisma.EmployeeUncheckedUpdateManyWithoutTeamInput>;
};
export type EmployeeScalarWhereInput = {
    AND?: Prisma.EmployeeScalarWhereInput | Prisma.EmployeeScalarWhereInput[];
    OR?: Prisma.EmployeeScalarWhereInput[];
    NOT?: Prisma.EmployeeScalarWhereInput | Prisma.EmployeeScalarWhereInput[];
    id?: Prisma.StringFilter<"Employee"> | string;
    employeeCode?: Prisma.StringFilter<"Employee"> | string;
    name?: Prisma.StringFilter<"Employee"> | string;
    email?: Prisma.StringFilter<"Employee"> | string;
    status?: Prisma.EnumRecordStatusFilter<"Employee"> | $Enums.RecordStatus;
    teamId?: Prisma.StringNullableFilter<"Employee"> | string | null;
    managerId?: Prisma.StringNullableFilter<"Employee"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
};
export type EmployeeCreateWithoutDirectReportsInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    team?: Prisma.TeamCreateNestedOneWithoutEmployeesInput;
    manager?: Prisma.EmployeeCreateNestedOneWithoutDirectReportsInput;
    user?: Prisma.UserCreateNestedOneWithoutEmployeeInput;
    attendanceSessions?: Prisma.AttendanceSessionCreateNestedManyWithoutEmployeeInput;
    shiftAssignments?: Prisma.ShiftAssignmentCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUncheckedCreateWithoutDirectReportsInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    teamId?: string | null;
    managerId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: Prisma.UserUncheckedCreateNestedOneWithoutEmployeeInput;
    attendanceSessions?: Prisma.AttendanceSessionUncheckedCreateNestedManyWithoutEmployeeInput;
    shiftAssignments?: Prisma.ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeCreateOrConnectWithoutDirectReportsInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutDirectReportsInput, Prisma.EmployeeUncheckedCreateWithoutDirectReportsInput>;
};
export type EmployeeCreateWithoutManagerInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    team?: Prisma.TeamCreateNestedOneWithoutEmployeesInput;
    directReports?: Prisma.EmployeeCreateNestedManyWithoutManagerInput;
    user?: Prisma.UserCreateNestedOneWithoutEmployeeInput;
    attendanceSessions?: Prisma.AttendanceSessionCreateNestedManyWithoutEmployeeInput;
    shiftAssignments?: Prisma.ShiftAssignmentCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUncheckedCreateWithoutManagerInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    teamId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    directReports?: Prisma.EmployeeUncheckedCreateNestedManyWithoutManagerInput;
    user?: Prisma.UserUncheckedCreateNestedOneWithoutEmployeeInput;
    attendanceSessions?: Prisma.AttendanceSessionUncheckedCreateNestedManyWithoutEmployeeInput;
    shiftAssignments?: Prisma.ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeCreateOrConnectWithoutManagerInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutManagerInput, Prisma.EmployeeUncheckedCreateWithoutManagerInput>;
};
export type EmployeeCreateManyManagerInputEnvelope = {
    data: Prisma.EmployeeCreateManyManagerInput | Prisma.EmployeeCreateManyManagerInput[];
    skipDuplicates?: boolean;
};
export type EmployeeUpsertWithoutDirectReportsInput = {
    update: Prisma.XOR<Prisma.EmployeeUpdateWithoutDirectReportsInput, Prisma.EmployeeUncheckedUpdateWithoutDirectReportsInput>;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutDirectReportsInput, Prisma.EmployeeUncheckedCreateWithoutDirectReportsInput>;
    where?: Prisma.EmployeeWhereInput;
};
export type EmployeeUpdateToOneWithWhereWithoutDirectReportsInput = {
    where?: Prisma.EmployeeWhereInput;
    data: Prisma.XOR<Prisma.EmployeeUpdateWithoutDirectReportsInput, Prisma.EmployeeUncheckedUpdateWithoutDirectReportsInput>;
};
export type EmployeeUpdateWithoutDirectReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneWithoutEmployeesNestedInput;
    manager?: Prisma.EmployeeUpdateOneWithoutDirectReportsNestedInput;
    user?: Prisma.UserUpdateOneWithoutEmployeeNestedInput;
    attendanceSessions?: Prisma.AttendanceSessionUpdateManyWithoutEmployeeNestedInput;
    shiftAssignments?: Prisma.ShiftAssignmentUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateWithoutDirectReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUncheckedUpdateOneWithoutEmployeeNestedInput;
    attendanceSessions?: Prisma.AttendanceSessionUncheckedUpdateManyWithoutEmployeeNestedInput;
    shiftAssignments?: Prisma.ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUpsertWithWhereUniqueWithoutManagerInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmployeeUpdateWithoutManagerInput, Prisma.EmployeeUncheckedUpdateWithoutManagerInput>;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutManagerInput, Prisma.EmployeeUncheckedCreateWithoutManagerInput>;
};
export type EmployeeUpdateWithWhereUniqueWithoutManagerInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmployeeUpdateWithoutManagerInput, Prisma.EmployeeUncheckedUpdateWithoutManagerInput>;
};
export type EmployeeUpdateManyWithWhereWithoutManagerInput = {
    where: Prisma.EmployeeScalarWhereInput;
    data: Prisma.XOR<Prisma.EmployeeUpdateManyMutationInput, Prisma.EmployeeUncheckedUpdateManyWithoutManagerInput>;
};
export type EmployeeCreateWithoutUserInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    team?: Prisma.TeamCreateNestedOneWithoutEmployeesInput;
    manager?: Prisma.EmployeeCreateNestedOneWithoutDirectReportsInput;
    directReports?: Prisma.EmployeeCreateNestedManyWithoutManagerInput;
    attendanceSessions?: Prisma.AttendanceSessionCreateNestedManyWithoutEmployeeInput;
    shiftAssignments?: Prisma.ShiftAssignmentCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUncheckedCreateWithoutUserInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    teamId?: string | null;
    managerId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    directReports?: Prisma.EmployeeUncheckedCreateNestedManyWithoutManagerInput;
    attendanceSessions?: Prisma.AttendanceSessionUncheckedCreateNestedManyWithoutEmployeeInput;
    shiftAssignments?: Prisma.ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeCreateOrConnectWithoutUserInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutUserInput, Prisma.EmployeeUncheckedCreateWithoutUserInput>;
};
export type EmployeeUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.EmployeeUpdateWithoutUserInput, Prisma.EmployeeUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutUserInput, Prisma.EmployeeUncheckedCreateWithoutUserInput>;
    where?: Prisma.EmployeeWhereInput;
};
export type EmployeeUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.EmployeeWhereInput;
    data: Prisma.XOR<Prisma.EmployeeUpdateWithoutUserInput, Prisma.EmployeeUncheckedUpdateWithoutUserInput>;
};
export type EmployeeUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneWithoutEmployeesNestedInput;
    manager?: Prisma.EmployeeUpdateOneWithoutDirectReportsNestedInput;
    directReports?: Prisma.EmployeeUpdateManyWithoutManagerNestedInput;
    attendanceSessions?: Prisma.AttendanceSessionUpdateManyWithoutEmployeeNestedInput;
    shiftAssignments?: Prisma.ShiftAssignmentUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    directReports?: Prisma.EmployeeUncheckedUpdateManyWithoutManagerNestedInput;
    attendanceSessions?: Prisma.AttendanceSessionUncheckedUpdateManyWithoutEmployeeNestedInput;
    shiftAssignments?: Prisma.ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeCreateWithoutShiftAssignmentsInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    team?: Prisma.TeamCreateNestedOneWithoutEmployeesInput;
    manager?: Prisma.EmployeeCreateNestedOneWithoutDirectReportsInput;
    directReports?: Prisma.EmployeeCreateNestedManyWithoutManagerInput;
    user?: Prisma.UserCreateNestedOneWithoutEmployeeInput;
    attendanceSessions?: Prisma.AttendanceSessionCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUncheckedCreateWithoutShiftAssignmentsInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    teamId?: string | null;
    managerId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    directReports?: Prisma.EmployeeUncheckedCreateNestedManyWithoutManagerInput;
    user?: Prisma.UserUncheckedCreateNestedOneWithoutEmployeeInput;
    attendanceSessions?: Prisma.AttendanceSessionUncheckedCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeCreateOrConnectWithoutShiftAssignmentsInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutShiftAssignmentsInput, Prisma.EmployeeUncheckedCreateWithoutShiftAssignmentsInput>;
};
export type EmployeeUpsertWithoutShiftAssignmentsInput = {
    update: Prisma.XOR<Prisma.EmployeeUpdateWithoutShiftAssignmentsInput, Prisma.EmployeeUncheckedUpdateWithoutShiftAssignmentsInput>;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutShiftAssignmentsInput, Prisma.EmployeeUncheckedCreateWithoutShiftAssignmentsInput>;
    where?: Prisma.EmployeeWhereInput;
};
export type EmployeeUpdateToOneWithWhereWithoutShiftAssignmentsInput = {
    where?: Prisma.EmployeeWhereInput;
    data: Prisma.XOR<Prisma.EmployeeUpdateWithoutShiftAssignmentsInput, Prisma.EmployeeUncheckedUpdateWithoutShiftAssignmentsInput>;
};
export type EmployeeUpdateWithoutShiftAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneWithoutEmployeesNestedInput;
    manager?: Prisma.EmployeeUpdateOneWithoutDirectReportsNestedInput;
    directReports?: Prisma.EmployeeUpdateManyWithoutManagerNestedInput;
    user?: Prisma.UserUpdateOneWithoutEmployeeNestedInput;
    attendanceSessions?: Prisma.AttendanceSessionUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateWithoutShiftAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    directReports?: Prisma.EmployeeUncheckedUpdateManyWithoutManagerNestedInput;
    user?: Prisma.UserUncheckedUpdateOneWithoutEmployeeNestedInput;
    attendanceSessions?: Prisma.AttendanceSessionUncheckedUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeCreateWithoutAttendanceSessionsInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    team?: Prisma.TeamCreateNestedOneWithoutEmployeesInput;
    manager?: Prisma.EmployeeCreateNestedOneWithoutDirectReportsInput;
    directReports?: Prisma.EmployeeCreateNestedManyWithoutManagerInput;
    user?: Prisma.UserCreateNestedOneWithoutEmployeeInput;
    shiftAssignments?: Prisma.ShiftAssignmentCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUncheckedCreateWithoutAttendanceSessionsInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    teamId?: string | null;
    managerId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    directReports?: Prisma.EmployeeUncheckedCreateNestedManyWithoutManagerInput;
    user?: Prisma.UserUncheckedCreateNestedOneWithoutEmployeeInput;
    shiftAssignments?: Prisma.ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeCreateOrConnectWithoutAttendanceSessionsInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutAttendanceSessionsInput, Prisma.EmployeeUncheckedCreateWithoutAttendanceSessionsInput>;
};
export type EmployeeUpsertWithoutAttendanceSessionsInput = {
    update: Prisma.XOR<Prisma.EmployeeUpdateWithoutAttendanceSessionsInput, Prisma.EmployeeUncheckedUpdateWithoutAttendanceSessionsInput>;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutAttendanceSessionsInput, Prisma.EmployeeUncheckedCreateWithoutAttendanceSessionsInput>;
    where?: Prisma.EmployeeWhereInput;
};
export type EmployeeUpdateToOneWithWhereWithoutAttendanceSessionsInput = {
    where?: Prisma.EmployeeWhereInput;
    data: Prisma.XOR<Prisma.EmployeeUpdateWithoutAttendanceSessionsInput, Prisma.EmployeeUncheckedUpdateWithoutAttendanceSessionsInput>;
};
export type EmployeeUpdateWithoutAttendanceSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneWithoutEmployeesNestedInput;
    manager?: Prisma.EmployeeUpdateOneWithoutDirectReportsNestedInput;
    directReports?: Prisma.EmployeeUpdateManyWithoutManagerNestedInput;
    user?: Prisma.UserUpdateOneWithoutEmployeeNestedInput;
    shiftAssignments?: Prisma.ShiftAssignmentUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateWithoutAttendanceSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    directReports?: Prisma.EmployeeUncheckedUpdateManyWithoutManagerNestedInput;
    user?: Prisma.UserUncheckedUpdateOneWithoutEmployeeNestedInput;
    shiftAssignments?: Prisma.ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeCreateManyTeamInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    managerId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmployeeUpdateWithoutTeamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    manager?: Prisma.EmployeeUpdateOneWithoutDirectReportsNestedInput;
    directReports?: Prisma.EmployeeUpdateManyWithoutManagerNestedInput;
    user?: Prisma.UserUpdateOneWithoutEmployeeNestedInput;
    attendanceSessions?: Prisma.AttendanceSessionUpdateManyWithoutEmployeeNestedInput;
    shiftAssignments?: Prisma.ShiftAssignmentUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateWithoutTeamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    directReports?: Prisma.EmployeeUncheckedUpdateManyWithoutManagerNestedInput;
    user?: Prisma.UserUncheckedUpdateOneWithoutEmployeeNestedInput;
    attendanceSessions?: Prisma.AttendanceSessionUncheckedUpdateManyWithoutEmployeeNestedInput;
    shiftAssignments?: Prisma.ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateManyWithoutTeamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeCreateManyManagerInput = {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    status?: $Enums.RecordStatus;
    teamId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmployeeUpdateWithoutManagerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneWithoutEmployeesNestedInput;
    directReports?: Prisma.EmployeeUpdateManyWithoutManagerNestedInput;
    user?: Prisma.UserUpdateOneWithoutEmployeeNestedInput;
    attendanceSessions?: Prisma.AttendanceSessionUpdateManyWithoutEmployeeNestedInput;
    shiftAssignments?: Prisma.ShiftAssignmentUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateWithoutManagerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    directReports?: Prisma.EmployeeUncheckedUpdateManyWithoutManagerNestedInput;
    user?: Prisma.UserUncheckedUpdateOneWithoutEmployeeNestedInput;
    attendanceSessions?: Prisma.AttendanceSessionUncheckedUpdateManyWithoutEmployeeNestedInput;
    shiftAssignments?: Prisma.ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateManyWithoutManagerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeCountOutputType = {
    directReports: number;
    attendanceSessions: number;
    shiftAssignments: number;
};
export type EmployeeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    directReports?: boolean | EmployeeCountOutputTypeCountDirectReportsArgs;
    attendanceSessions?: boolean | EmployeeCountOutputTypeCountAttendanceSessionsArgs;
    shiftAssignments?: boolean | EmployeeCountOutputTypeCountShiftAssignmentsArgs;
};
export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeCountOutputTypeSelect<ExtArgs> | null;
};
export type EmployeeCountOutputTypeCountDirectReportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
};
export type EmployeeCountOutputTypeCountAttendanceSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceSessionWhereInput;
};
export type EmployeeCountOutputTypeCountShiftAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftAssignmentWhereInput;
};
export type EmployeeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeCode?: boolean;
    name?: boolean;
    email?: boolean;
    status?: boolean;
    teamId?: boolean;
    managerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    team?: boolean | Prisma.Employee$teamArgs<ExtArgs>;
    manager?: boolean | Prisma.Employee$managerArgs<ExtArgs>;
    directReports?: boolean | Prisma.Employee$directReportsArgs<ExtArgs>;
    user?: boolean | Prisma.Employee$userArgs<ExtArgs>;
    attendanceSessions?: boolean | Prisma.Employee$attendanceSessionsArgs<ExtArgs>;
    shiftAssignments?: boolean | Prisma.Employee$shiftAssignmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employee"]>;
export type EmployeeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeCode?: boolean;
    name?: boolean;
    email?: boolean;
    status?: boolean;
    teamId?: boolean;
    managerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    team?: boolean | Prisma.Employee$teamArgs<ExtArgs>;
    manager?: boolean | Prisma.Employee$managerArgs<ExtArgs>;
}, ExtArgs["result"]["employee"]>;
export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeCode?: boolean;
    name?: boolean;
    email?: boolean;
    status?: boolean;
    teamId?: boolean;
    managerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    team?: boolean | Prisma.Employee$teamArgs<ExtArgs>;
    manager?: boolean | Prisma.Employee$managerArgs<ExtArgs>;
}, ExtArgs["result"]["employee"]>;
export type EmployeeSelectScalar = {
    id?: boolean;
    employeeCode?: boolean;
    name?: boolean;
    email?: boolean;
    status?: boolean;
    teamId?: boolean;
    managerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EmployeeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeCode" | "name" | "email" | "status" | "teamId" | "managerId" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>;
export type EmployeeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    team?: boolean | Prisma.Employee$teamArgs<ExtArgs>;
    manager?: boolean | Prisma.Employee$managerArgs<ExtArgs>;
    directReports?: boolean | Prisma.Employee$directReportsArgs<ExtArgs>;
    user?: boolean | Prisma.Employee$userArgs<ExtArgs>;
    attendanceSessions?: boolean | Prisma.Employee$attendanceSessionsArgs<ExtArgs>;
    shiftAssignments?: boolean | Prisma.Employee$shiftAssignmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    team?: boolean | Prisma.Employee$teamArgs<ExtArgs>;
    manager?: boolean | Prisma.Employee$managerArgs<ExtArgs>;
};
export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    team?: boolean | Prisma.Employee$teamArgs<ExtArgs>;
    manager?: boolean | Prisma.Employee$managerArgs<ExtArgs>;
};
export type $EmployeePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Employee";
    objects: {
        team: Prisma.$TeamPayload<ExtArgs> | null;
        manager: Prisma.$EmployeePayload<ExtArgs> | null;
        directReports: Prisma.$EmployeePayload<ExtArgs>[];
        user: Prisma.$UserPayload<ExtArgs> | null;
        attendanceSessions: Prisma.$AttendanceSessionPayload<ExtArgs>[];
        shiftAssignments: Prisma.$ShiftAssignmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeCode: string;
        name: string;
        email: string;
        status: $Enums.RecordStatus;
        teamId: string | null;
        managerId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["employee"]>;
    composites: {};
};
export type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmployeePayload, S>;
export type EmployeeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmployeeCountAggregateInputType | true;
};
export interface EmployeeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Employee'];
        meta: {
            name: 'Employee';
        };
    };
    findUnique<T extends EmployeeFindUniqueArgs>(args: Prisma.SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmployeeFindFirstArgs>(args?: Prisma.SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmployeeFindManyArgs>(args?: Prisma.SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmployeeCreateArgs>(args: Prisma.SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmployeeCreateManyArgs>(args?: Prisma.SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmployeeDeleteArgs>(args: Prisma.SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmployeeUpdateArgs>(args: Prisma.SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmployeeUpdateManyArgs>(args: Prisma.SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmployeeUpsertArgs>(args: Prisma.SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmployeeCountArgs>(args?: Prisma.Subset<T, EmployeeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmployeeCountAggregateOutputType> : number>;
    aggregate<T extends EmployeeAggregateArgs>(args: Prisma.Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>;
    groupBy<T extends EmployeeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmployeeGroupByArgs['orderBy'];
    } : {
        orderBy?: EmployeeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmployeeFieldRefs;
}
export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    team<T extends Prisma.Employee$teamArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Employee$teamArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    manager<T extends Prisma.Employee$managerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Employee$managerArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    directReports<T extends Prisma.Employee$directReportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Employee$directReportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user<T extends Prisma.Employee$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Employee$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    attendanceSessions<T extends Prisma.Employee$attendanceSessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Employee$attendanceSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    shiftAssignments<T extends Prisma.Employee$shiftAssignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Employee$shiftAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmployeeFieldRefs {
    readonly id: Prisma.FieldRef<"Employee", 'String'>;
    readonly employeeCode: Prisma.FieldRef<"Employee", 'String'>;
    readonly name: Prisma.FieldRef<"Employee", 'String'>;
    readonly email: Prisma.FieldRef<"Employee", 'String'>;
    readonly status: Prisma.FieldRef<"Employee", 'RecordStatus'>;
    readonly teamId: Prisma.FieldRef<"Employee", 'String'>;
    readonly managerId: Prisma.FieldRef<"Employee", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Employee", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Employee", 'DateTime'>;
}
export type EmployeeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type EmployeeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type EmployeeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type EmployeeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeCreateInput, Prisma.EmployeeUncheckedCreateInput>;
};
export type EmployeeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmployeeCreateManyInput | Prisma.EmployeeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    data: Prisma.EmployeeCreateManyInput | Prisma.EmployeeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EmployeeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EmployeeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeUpdateInput, Prisma.EmployeeUncheckedUpdateInput>;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmployeeUpdateManyMutationInput, Prisma.EmployeeUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeWhereInput;
    limit?: number;
};
export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeUpdateManyMutationInput, Prisma.EmployeeUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeWhereInput;
    limit?: number;
    include?: Prisma.EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EmployeeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateInput, Prisma.EmployeeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmployeeUpdateInput, Prisma.EmployeeUncheckedUpdateInput>;
};
export type EmployeeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
    limit?: number;
};
export type Employee$teamArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeamSelect<ExtArgs> | null;
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    include?: Prisma.TeamInclude<ExtArgs> | null;
    where?: Prisma.TeamWhereInput;
};
export type Employee$managerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
};
export type Employee$directReportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type Employee$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Employee$attendanceSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Employee$shiftAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EmployeeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
};
