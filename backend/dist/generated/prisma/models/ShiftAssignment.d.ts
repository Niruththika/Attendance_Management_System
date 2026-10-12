import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ShiftAssignmentModel = runtime.Types.Result.DefaultSelection<Prisma.$ShiftAssignmentPayload>;
export type AggregateShiftAssignment = {
    _count: ShiftAssignmentCountAggregateOutputType | null;
    _min: ShiftAssignmentMinAggregateOutputType | null;
    _max: ShiftAssignmentMaxAggregateOutputType | null;
};
export type ShiftAssignmentMinAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    shiftId: string | null;
    effectiveFrom: Date | null;
    effectiveTo: Date | null;
    createdAt: Date | null;
};
export type ShiftAssignmentMaxAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    shiftId: string | null;
    effectiveFrom: Date | null;
    effectiveTo: Date | null;
    createdAt: Date | null;
};
export type ShiftAssignmentCountAggregateOutputType = {
    id: number;
    employeeId: number;
    shiftId: number;
    effectiveFrom: number;
    effectiveTo: number;
    createdAt: number;
    _all: number;
};
export type ShiftAssignmentMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    shiftId?: true;
    effectiveFrom?: true;
    effectiveTo?: true;
    createdAt?: true;
};
export type ShiftAssignmentMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    shiftId?: true;
    effectiveFrom?: true;
    effectiveTo?: true;
    createdAt?: true;
};
export type ShiftAssignmentCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    shiftId?: true;
    effectiveFrom?: true;
    effectiveTo?: true;
    createdAt?: true;
    _all?: true;
};
export type ShiftAssignmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftAssignmentWhereInput;
    orderBy?: Prisma.ShiftAssignmentOrderByWithRelationInput | Prisma.ShiftAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.ShiftAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShiftAssignmentCountAggregateInputType;
    _min?: ShiftAssignmentMinAggregateInputType;
    _max?: ShiftAssignmentMaxAggregateInputType;
};
export type GetShiftAssignmentAggregateType<T extends ShiftAssignmentAggregateArgs> = {
    [P in keyof T & keyof AggregateShiftAssignment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShiftAssignment[P]> : Prisma.GetScalarType<T[P], AggregateShiftAssignment[P]>;
};
export type ShiftAssignmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftAssignmentWhereInput;
    orderBy?: Prisma.ShiftAssignmentOrderByWithAggregationInput | Prisma.ShiftAssignmentOrderByWithAggregationInput[];
    by: Prisma.ShiftAssignmentScalarFieldEnum[] | Prisma.ShiftAssignmentScalarFieldEnum;
    having?: Prisma.ShiftAssignmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShiftAssignmentCountAggregateInputType | true;
    _min?: ShiftAssignmentMinAggregateInputType;
    _max?: ShiftAssignmentMaxAggregateInputType;
};
export type ShiftAssignmentGroupByOutputType = {
    id: string;
    employeeId: string;
    shiftId: string;
    effectiveFrom: Date;
    effectiveTo: Date | null;
    createdAt: Date;
    _count: ShiftAssignmentCountAggregateOutputType | null;
    _min: ShiftAssignmentMinAggregateOutputType | null;
    _max: ShiftAssignmentMaxAggregateOutputType | null;
};
export type GetShiftAssignmentGroupByPayload<T extends ShiftAssignmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShiftAssignmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShiftAssignmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShiftAssignmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShiftAssignmentGroupByOutputType[P]>;
}>>;
export type ShiftAssignmentWhereInput = {
    AND?: Prisma.ShiftAssignmentWhereInput | Prisma.ShiftAssignmentWhereInput[];
    OR?: Prisma.ShiftAssignmentWhereInput[];
    NOT?: Prisma.ShiftAssignmentWhereInput | Prisma.ShiftAssignmentWhereInput[];
    id?: Prisma.StringFilter<"ShiftAssignment"> | string;
    employeeId?: Prisma.StringFilter<"ShiftAssignment"> | string;
    shiftId?: Prisma.StringFilter<"ShiftAssignment"> | string;
    effectiveFrom?: Prisma.DateTimeFilter<"ShiftAssignment"> | Date | string;
    effectiveTo?: Prisma.DateTimeNullableFilter<"ShiftAssignment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShiftAssignment"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    shift?: Prisma.XOR<Prisma.ShiftScalarRelationFilter, Prisma.ShiftWhereInput>;
};
export type ShiftAssignmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    shift?: Prisma.ShiftOrderByWithRelationInput;
};
export type ShiftAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    employeeId_shiftId_effectiveFrom?: Prisma.ShiftAssignmentEmployeeIdShiftIdEffectiveFromCompoundUniqueInput;
    AND?: Prisma.ShiftAssignmentWhereInput | Prisma.ShiftAssignmentWhereInput[];
    OR?: Prisma.ShiftAssignmentWhereInput[];
    NOT?: Prisma.ShiftAssignmentWhereInput | Prisma.ShiftAssignmentWhereInput[];
    employeeId?: Prisma.StringFilter<"ShiftAssignment"> | string;
    shiftId?: Prisma.StringFilter<"ShiftAssignment"> | string;
    effectiveFrom?: Prisma.DateTimeFilter<"ShiftAssignment"> | Date | string;
    effectiveTo?: Prisma.DateTimeNullableFilter<"ShiftAssignment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShiftAssignment"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    shift?: Prisma.XOR<Prisma.ShiftScalarRelationFilter, Prisma.ShiftWhereInput>;
}, "id" | "employeeId_shiftId_effectiveFrom">;
export type ShiftAssignmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ShiftAssignmentCountOrderByAggregateInput;
    _max?: Prisma.ShiftAssignmentMaxOrderByAggregateInput;
    _min?: Prisma.ShiftAssignmentMinOrderByAggregateInput;
};
export type ShiftAssignmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShiftAssignmentScalarWhereWithAggregatesInput | Prisma.ShiftAssignmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShiftAssignmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShiftAssignmentScalarWhereWithAggregatesInput | Prisma.ShiftAssignmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShiftAssignment"> | string;
    employeeId?: Prisma.StringWithAggregatesFilter<"ShiftAssignment"> | string;
    shiftId?: Prisma.StringWithAggregatesFilter<"ShiftAssignment"> | string;
    effectiveFrom?: Prisma.DateTimeWithAggregatesFilter<"ShiftAssignment"> | Date | string;
    effectiveTo?: Prisma.DateTimeNullableWithAggregatesFilter<"ShiftAssignment"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShiftAssignment"> | Date | string;
};
export type ShiftAssignmentCreateInput = {
    id?: string;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutShiftAssignmentsInput;
    shift: Prisma.ShiftCreateNestedOneWithoutAssignmentsInput;
};
export type ShiftAssignmentUncheckedCreateInput = {
    id?: string;
    employeeId: string;
    shiftId: string;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    createdAt?: Date | string;
};
export type ShiftAssignmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutShiftAssignmentsNestedInput;
    shift?: Prisma.ShiftUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type ShiftAssignmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftId?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftAssignmentCreateManyInput = {
    id?: string;
    employeeId: string;
    shiftId: string;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    createdAt?: Date | string;
};
export type ShiftAssignmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftAssignmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftId?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftAssignmentListRelationFilter = {
    every?: Prisma.ShiftAssignmentWhereInput;
    some?: Prisma.ShiftAssignmentWhereInput;
    none?: Prisma.ShiftAssignmentWhereInput;
};
export type ShiftAssignmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShiftAssignmentEmployeeIdShiftIdEffectiveFromCompoundUniqueInput = {
    employeeId: string;
    shiftId: string;
    effectiveFrom: Date | string;
};
export type ShiftAssignmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveTo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShiftAssignmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveTo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShiftAssignmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveTo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShiftAssignmentCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.ShiftAssignmentCreateWithoutEmployeeInput, Prisma.ShiftAssignmentUncheckedCreateWithoutEmployeeInput> | Prisma.ShiftAssignmentCreateWithoutEmployeeInput[] | Prisma.ShiftAssignmentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.ShiftAssignmentCreateOrConnectWithoutEmployeeInput | Prisma.ShiftAssignmentCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.ShiftAssignmentCreateManyEmployeeInputEnvelope;
    connect?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
};
export type ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.ShiftAssignmentCreateWithoutEmployeeInput, Prisma.ShiftAssignmentUncheckedCreateWithoutEmployeeInput> | Prisma.ShiftAssignmentCreateWithoutEmployeeInput[] | Prisma.ShiftAssignmentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.ShiftAssignmentCreateOrConnectWithoutEmployeeInput | Prisma.ShiftAssignmentCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.ShiftAssignmentCreateManyEmployeeInputEnvelope;
    connect?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
};
export type ShiftAssignmentUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftAssignmentCreateWithoutEmployeeInput, Prisma.ShiftAssignmentUncheckedCreateWithoutEmployeeInput> | Prisma.ShiftAssignmentCreateWithoutEmployeeInput[] | Prisma.ShiftAssignmentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.ShiftAssignmentCreateOrConnectWithoutEmployeeInput | Prisma.ShiftAssignmentCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.ShiftAssignmentUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.ShiftAssignmentUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.ShiftAssignmentCreateManyEmployeeInputEnvelope;
    set?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    disconnect?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    delete?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    connect?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    update?: Prisma.ShiftAssignmentUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.ShiftAssignmentUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.ShiftAssignmentUpdateManyWithWhereWithoutEmployeeInput | Prisma.ShiftAssignmentUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.ShiftAssignmentScalarWhereInput | Prisma.ShiftAssignmentScalarWhereInput[];
};
export type ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftAssignmentCreateWithoutEmployeeInput, Prisma.ShiftAssignmentUncheckedCreateWithoutEmployeeInput> | Prisma.ShiftAssignmentCreateWithoutEmployeeInput[] | Prisma.ShiftAssignmentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.ShiftAssignmentCreateOrConnectWithoutEmployeeInput | Prisma.ShiftAssignmentCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.ShiftAssignmentUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.ShiftAssignmentUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.ShiftAssignmentCreateManyEmployeeInputEnvelope;
    set?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    disconnect?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    delete?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    connect?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    update?: Prisma.ShiftAssignmentUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.ShiftAssignmentUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.ShiftAssignmentUpdateManyWithWhereWithoutEmployeeInput | Prisma.ShiftAssignmentUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.ShiftAssignmentScalarWhereInput | Prisma.ShiftAssignmentScalarWhereInput[];
};
export type ShiftAssignmentCreateNestedManyWithoutShiftInput = {
    create?: Prisma.XOR<Prisma.ShiftAssignmentCreateWithoutShiftInput, Prisma.ShiftAssignmentUncheckedCreateWithoutShiftInput> | Prisma.ShiftAssignmentCreateWithoutShiftInput[] | Prisma.ShiftAssignmentUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.ShiftAssignmentCreateOrConnectWithoutShiftInput | Prisma.ShiftAssignmentCreateOrConnectWithoutShiftInput[];
    createMany?: Prisma.ShiftAssignmentCreateManyShiftInputEnvelope;
    connect?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
};
export type ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput = {
    create?: Prisma.XOR<Prisma.ShiftAssignmentCreateWithoutShiftInput, Prisma.ShiftAssignmentUncheckedCreateWithoutShiftInput> | Prisma.ShiftAssignmentCreateWithoutShiftInput[] | Prisma.ShiftAssignmentUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.ShiftAssignmentCreateOrConnectWithoutShiftInput | Prisma.ShiftAssignmentCreateOrConnectWithoutShiftInput[];
    createMany?: Prisma.ShiftAssignmentCreateManyShiftInputEnvelope;
    connect?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
};
export type ShiftAssignmentUpdateManyWithoutShiftNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftAssignmentCreateWithoutShiftInput, Prisma.ShiftAssignmentUncheckedCreateWithoutShiftInput> | Prisma.ShiftAssignmentCreateWithoutShiftInput[] | Prisma.ShiftAssignmentUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.ShiftAssignmentCreateOrConnectWithoutShiftInput | Prisma.ShiftAssignmentCreateOrConnectWithoutShiftInput[];
    upsert?: Prisma.ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput | Prisma.ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput[];
    createMany?: Prisma.ShiftAssignmentCreateManyShiftInputEnvelope;
    set?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    disconnect?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    delete?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    connect?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    update?: Prisma.ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput | Prisma.ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput[];
    updateMany?: Prisma.ShiftAssignmentUpdateManyWithWhereWithoutShiftInput | Prisma.ShiftAssignmentUpdateManyWithWhereWithoutShiftInput[];
    deleteMany?: Prisma.ShiftAssignmentScalarWhereInput | Prisma.ShiftAssignmentScalarWhereInput[];
};
export type ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftAssignmentCreateWithoutShiftInput, Prisma.ShiftAssignmentUncheckedCreateWithoutShiftInput> | Prisma.ShiftAssignmentCreateWithoutShiftInput[] | Prisma.ShiftAssignmentUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.ShiftAssignmentCreateOrConnectWithoutShiftInput | Prisma.ShiftAssignmentCreateOrConnectWithoutShiftInput[];
    upsert?: Prisma.ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput | Prisma.ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput[];
    createMany?: Prisma.ShiftAssignmentCreateManyShiftInputEnvelope;
    set?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    disconnect?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    delete?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    connect?: Prisma.ShiftAssignmentWhereUniqueInput | Prisma.ShiftAssignmentWhereUniqueInput[];
    update?: Prisma.ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput | Prisma.ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput[];
    updateMany?: Prisma.ShiftAssignmentUpdateManyWithWhereWithoutShiftInput | Prisma.ShiftAssignmentUpdateManyWithWhereWithoutShiftInput[];
    deleteMany?: Prisma.ShiftAssignmentScalarWhereInput | Prisma.ShiftAssignmentScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type ShiftAssignmentCreateWithoutEmployeeInput = {
    id?: string;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    createdAt?: Date | string;
    shift: Prisma.ShiftCreateNestedOneWithoutAssignmentsInput;
};
export type ShiftAssignmentUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    shiftId: string;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    createdAt?: Date | string;
};
export type ShiftAssignmentCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.ShiftAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftAssignmentCreateWithoutEmployeeInput, Prisma.ShiftAssignmentUncheckedCreateWithoutEmployeeInput>;
};
export type ShiftAssignmentCreateManyEmployeeInputEnvelope = {
    data: Prisma.ShiftAssignmentCreateManyEmployeeInput | Prisma.ShiftAssignmentCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type ShiftAssignmentUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.ShiftAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShiftAssignmentUpdateWithoutEmployeeInput, Prisma.ShiftAssignmentUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.ShiftAssignmentCreateWithoutEmployeeInput, Prisma.ShiftAssignmentUncheckedCreateWithoutEmployeeInput>;
};
export type ShiftAssignmentUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.ShiftAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShiftAssignmentUpdateWithoutEmployeeInput, Prisma.ShiftAssignmentUncheckedUpdateWithoutEmployeeInput>;
};
export type ShiftAssignmentUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.ShiftAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.ShiftAssignmentUpdateManyMutationInput, Prisma.ShiftAssignmentUncheckedUpdateManyWithoutEmployeeInput>;
};
export type ShiftAssignmentScalarWhereInput = {
    AND?: Prisma.ShiftAssignmentScalarWhereInput | Prisma.ShiftAssignmentScalarWhereInput[];
    OR?: Prisma.ShiftAssignmentScalarWhereInput[];
    NOT?: Prisma.ShiftAssignmentScalarWhereInput | Prisma.ShiftAssignmentScalarWhereInput[];
    id?: Prisma.StringFilter<"ShiftAssignment"> | string;
    employeeId?: Prisma.StringFilter<"ShiftAssignment"> | string;
    shiftId?: Prisma.StringFilter<"ShiftAssignment"> | string;
    effectiveFrom?: Prisma.DateTimeFilter<"ShiftAssignment"> | Date | string;
    effectiveTo?: Prisma.DateTimeNullableFilter<"ShiftAssignment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShiftAssignment"> | Date | string;
};
export type ShiftAssignmentCreateWithoutShiftInput = {
    id?: string;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutShiftAssignmentsInput;
};
export type ShiftAssignmentUncheckedCreateWithoutShiftInput = {
    id?: string;
    employeeId: string;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    createdAt?: Date | string;
};
export type ShiftAssignmentCreateOrConnectWithoutShiftInput = {
    where: Prisma.ShiftAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftAssignmentCreateWithoutShiftInput, Prisma.ShiftAssignmentUncheckedCreateWithoutShiftInput>;
};
export type ShiftAssignmentCreateManyShiftInputEnvelope = {
    data: Prisma.ShiftAssignmentCreateManyShiftInput | Prisma.ShiftAssignmentCreateManyShiftInput[];
    skipDuplicates?: boolean;
};
export type ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput = {
    where: Prisma.ShiftAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShiftAssignmentUpdateWithoutShiftInput, Prisma.ShiftAssignmentUncheckedUpdateWithoutShiftInput>;
    create: Prisma.XOR<Prisma.ShiftAssignmentCreateWithoutShiftInput, Prisma.ShiftAssignmentUncheckedCreateWithoutShiftInput>;
};
export type ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput = {
    where: Prisma.ShiftAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShiftAssignmentUpdateWithoutShiftInput, Prisma.ShiftAssignmentUncheckedUpdateWithoutShiftInput>;
};
export type ShiftAssignmentUpdateManyWithWhereWithoutShiftInput = {
    where: Prisma.ShiftAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.ShiftAssignmentUpdateManyMutationInput, Prisma.ShiftAssignmentUncheckedUpdateManyWithoutShiftInput>;
};
export type ShiftAssignmentCreateManyEmployeeInput = {
    id?: string;
    shiftId: string;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    createdAt?: Date | string;
};
export type ShiftAssignmentUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shift?: Prisma.ShiftUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type ShiftAssignmentUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftId?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftAssignmentUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    shiftId?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftAssignmentCreateManyShiftInput = {
    id?: string;
    employeeId: string;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    createdAt?: Date | string;
};
export type ShiftAssignmentUpdateWithoutShiftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutShiftAssignmentsNestedInput;
};
export type ShiftAssignmentUncheckedUpdateWithoutShiftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftAssignmentUncheckedUpdateManyWithoutShiftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftAssignmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    shiftId?: boolean;
    effectiveFrom?: boolean;
    effectiveTo?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.ShiftDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shiftAssignment"]>;
export type ShiftAssignmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    shiftId?: boolean;
    effectiveFrom?: boolean;
    effectiveTo?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.ShiftDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shiftAssignment"]>;
export type ShiftAssignmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    shiftId?: boolean;
    effectiveFrom?: boolean;
    effectiveTo?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.ShiftDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shiftAssignment"]>;
export type ShiftAssignmentSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    shiftId?: boolean;
    effectiveFrom?: boolean;
    effectiveTo?: boolean;
    createdAt?: boolean;
};
export type ShiftAssignmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "shiftId" | "effectiveFrom" | "effectiveTo" | "createdAt", ExtArgs["result"]["shiftAssignment"]>;
export type ShiftAssignmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.ShiftDefaultArgs<ExtArgs>;
};
export type ShiftAssignmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.ShiftDefaultArgs<ExtArgs>;
};
export type ShiftAssignmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.ShiftDefaultArgs<ExtArgs>;
};
export type $ShiftAssignmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShiftAssignment";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
        shift: Prisma.$ShiftPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeId: string;
        shiftId: string;
        effectiveFrom: Date;
        effectiveTo: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["shiftAssignment"]>;
    composites: {};
};
export type ShiftAssignmentGetPayload<S extends boolean | null | undefined | ShiftAssignmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShiftAssignmentPayload, S>;
export type ShiftAssignmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShiftAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShiftAssignmentCountAggregateInputType | true;
};
export interface ShiftAssignmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShiftAssignment'];
        meta: {
            name: 'ShiftAssignment';
        };
    };
    findUnique<T extends ShiftAssignmentFindUniqueArgs>(args: Prisma.SelectSubset<T, ShiftAssignmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShiftAssignmentClient<runtime.Types.Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShiftAssignmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShiftAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShiftAssignmentClient<runtime.Types.Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShiftAssignmentFindFirstArgs>(args?: Prisma.SelectSubset<T, ShiftAssignmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShiftAssignmentClient<runtime.Types.Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShiftAssignmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShiftAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShiftAssignmentClient<runtime.Types.Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShiftAssignmentFindManyArgs>(args?: Prisma.SelectSubset<T, ShiftAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShiftAssignmentCreateArgs>(args: Prisma.SelectSubset<T, ShiftAssignmentCreateArgs<ExtArgs>>): Prisma.Prisma__ShiftAssignmentClient<runtime.Types.Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShiftAssignmentCreateManyArgs>(args?: Prisma.SelectSubset<T, ShiftAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShiftAssignmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShiftAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShiftAssignmentDeleteArgs>(args: Prisma.SelectSubset<T, ShiftAssignmentDeleteArgs<ExtArgs>>): Prisma.Prisma__ShiftAssignmentClient<runtime.Types.Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShiftAssignmentUpdateArgs>(args: Prisma.SelectSubset<T, ShiftAssignmentUpdateArgs<ExtArgs>>): Prisma.Prisma__ShiftAssignmentClient<runtime.Types.Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShiftAssignmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShiftAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShiftAssignmentUpdateManyArgs>(args: Prisma.SelectSubset<T, ShiftAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShiftAssignmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShiftAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShiftAssignmentUpsertArgs>(args: Prisma.SelectSubset<T, ShiftAssignmentUpsertArgs<ExtArgs>>): Prisma.Prisma__ShiftAssignmentClient<runtime.Types.Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShiftAssignmentCountArgs>(args?: Prisma.Subset<T, ShiftAssignmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShiftAssignmentCountAggregateOutputType> : number>;
    aggregate<T extends ShiftAssignmentAggregateArgs>(args: Prisma.Subset<T, ShiftAssignmentAggregateArgs>): Prisma.PrismaPromise<GetShiftAssignmentAggregateType<T>>;
    groupBy<T extends ShiftAssignmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShiftAssignmentGroupByArgs['orderBy'];
    } : {
        orderBy?: ShiftAssignmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShiftAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShiftAssignmentFieldRefs;
}
export interface Prisma__ShiftAssignmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    shift<T extends Prisma.ShiftDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShiftDefaultArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShiftAssignmentFieldRefs {
    readonly id: Prisma.FieldRef<"ShiftAssignment", 'String'>;
    readonly employeeId: Prisma.FieldRef<"ShiftAssignment", 'String'>;
    readonly shiftId: Prisma.FieldRef<"ShiftAssignment", 'String'>;
    readonly effectiveFrom: Prisma.FieldRef<"ShiftAssignment", 'DateTime'>;
    readonly effectiveTo: Prisma.FieldRef<"ShiftAssignment", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ShiftAssignment", 'DateTime'>;
}
export type ShiftAssignmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.ShiftAssignmentOmit<ExtArgs> | null;
    include?: Prisma.ShiftAssignmentInclude<ExtArgs> | null;
    where: Prisma.ShiftAssignmentWhereUniqueInput;
};
export type ShiftAssignmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.ShiftAssignmentOmit<ExtArgs> | null;
    include?: Prisma.ShiftAssignmentInclude<ExtArgs> | null;
    where: Prisma.ShiftAssignmentWhereUniqueInput;
};
export type ShiftAssignmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShiftAssignmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShiftAssignmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShiftAssignmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.ShiftAssignmentOmit<ExtArgs> | null;
    include?: Prisma.ShiftAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftAssignmentCreateInput, Prisma.ShiftAssignmentUncheckedCreateInput>;
};
export type ShiftAssignmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShiftAssignmentCreateManyInput | Prisma.ShiftAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ShiftAssignmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftAssignmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShiftAssignmentOmit<ExtArgs> | null;
    data: Prisma.ShiftAssignmentCreateManyInput | Prisma.ShiftAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ShiftAssignmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ShiftAssignmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.ShiftAssignmentOmit<ExtArgs> | null;
    include?: Prisma.ShiftAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftAssignmentUpdateInput, Prisma.ShiftAssignmentUncheckedUpdateInput>;
    where: Prisma.ShiftAssignmentWhereUniqueInput;
};
export type ShiftAssignmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShiftAssignmentUpdateManyMutationInput, Prisma.ShiftAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.ShiftAssignmentWhereInput;
    limit?: number;
};
export type ShiftAssignmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftAssignmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShiftAssignmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftAssignmentUpdateManyMutationInput, Prisma.ShiftAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.ShiftAssignmentWhereInput;
    limit?: number;
    include?: Prisma.ShiftAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ShiftAssignmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.ShiftAssignmentOmit<ExtArgs> | null;
    include?: Prisma.ShiftAssignmentInclude<ExtArgs> | null;
    where: Prisma.ShiftAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftAssignmentCreateInput, Prisma.ShiftAssignmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShiftAssignmentUpdateInput, Prisma.ShiftAssignmentUncheckedUpdateInput>;
};
export type ShiftAssignmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.ShiftAssignmentOmit<ExtArgs> | null;
    include?: Prisma.ShiftAssignmentInclude<ExtArgs> | null;
    where: Prisma.ShiftAssignmentWhereUniqueInput;
};
export type ShiftAssignmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftAssignmentWhereInput;
    limit?: number;
};
export type ShiftAssignmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.ShiftAssignmentOmit<ExtArgs> | null;
    include?: Prisma.ShiftAssignmentInclude<ExtArgs> | null;
};
