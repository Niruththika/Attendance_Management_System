import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CorrectionRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$CorrectionRequestPayload>;
export type AggregateCorrectionRequest = {
    _count: CorrectionRequestCountAggregateOutputType | null;
    _min: CorrectionRequestMinAggregateOutputType | null;
    _max: CorrectionRequestMaxAggregateOutputType | null;
};
export type CorrectionRequestMinAggregateOutputType = {
    id: string | null;
    sessionId: string | null;
    requestedById: string | null;
    reviewedById: string | null;
    originalClockInAt: Date | null;
    originalClockOutAt: Date | null;
    proposedIn: Date | null;
    proposedOut: Date | null;
    reason: string | null;
    status: $Enums.CorrectionStatus | null;
    reviewNote: string | null;
    reviewedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CorrectionRequestMaxAggregateOutputType = {
    id: string | null;
    sessionId: string | null;
    requestedById: string | null;
    reviewedById: string | null;
    originalClockInAt: Date | null;
    originalClockOutAt: Date | null;
    proposedIn: Date | null;
    proposedOut: Date | null;
    reason: string | null;
    status: $Enums.CorrectionStatus | null;
    reviewNote: string | null;
    reviewedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CorrectionRequestCountAggregateOutputType = {
    id: number;
    sessionId: number;
    requestedById: number;
    reviewedById: number;
    originalClockInAt: number;
    originalClockOutAt: number;
    proposedIn: number;
    proposedOut: number;
    reason: number;
    status: number;
    reviewNote: number;
    reviewedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CorrectionRequestMinAggregateInputType = {
    id?: true;
    sessionId?: true;
    requestedById?: true;
    reviewedById?: true;
    originalClockInAt?: true;
    originalClockOutAt?: true;
    proposedIn?: true;
    proposedOut?: true;
    reason?: true;
    status?: true;
    reviewNote?: true;
    reviewedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CorrectionRequestMaxAggregateInputType = {
    id?: true;
    sessionId?: true;
    requestedById?: true;
    reviewedById?: true;
    originalClockInAt?: true;
    originalClockOutAt?: true;
    proposedIn?: true;
    proposedOut?: true;
    reason?: true;
    status?: true;
    reviewNote?: true;
    reviewedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CorrectionRequestCountAggregateInputType = {
    id?: true;
    sessionId?: true;
    requestedById?: true;
    reviewedById?: true;
    originalClockInAt?: true;
    originalClockOutAt?: true;
    proposedIn?: true;
    proposedOut?: true;
    reason?: true;
    status?: true;
    reviewNote?: true;
    reviewedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CorrectionRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CorrectionRequestWhereInput;
    orderBy?: Prisma.CorrectionRequestOrderByWithRelationInput | Prisma.CorrectionRequestOrderByWithRelationInput[];
    cursor?: Prisma.CorrectionRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CorrectionRequestCountAggregateInputType;
    _min?: CorrectionRequestMinAggregateInputType;
    _max?: CorrectionRequestMaxAggregateInputType;
};
export type GetCorrectionRequestAggregateType<T extends CorrectionRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateCorrectionRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCorrectionRequest[P]> : Prisma.GetScalarType<T[P], AggregateCorrectionRequest[P]>;
};
export type CorrectionRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CorrectionRequestWhereInput;
    orderBy?: Prisma.CorrectionRequestOrderByWithAggregationInput | Prisma.CorrectionRequestOrderByWithAggregationInput[];
    by: Prisma.CorrectionRequestScalarFieldEnum[] | Prisma.CorrectionRequestScalarFieldEnum;
    having?: Prisma.CorrectionRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CorrectionRequestCountAggregateInputType | true;
    _min?: CorrectionRequestMinAggregateInputType;
    _max?: CorrectionRequestMaxAggregateInputType;
};
export type CorrectionRequestGroupByOutputType = {
    id: string;
    sessionId: string;
    requestedById: string;
    reviewedById: string | null;
    originalClockInAt: Date | null;
    originalClockOutAt: Date | null;
    proposedIn: Date | null;
    proposedOut: Date | null;
    reason: string;
    status: $Enums.CorrectionStatus;
    reviewNote: string | null;
    reviewedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CorrectionRequestCountAggregateOutputType | null;
    _min: CorrectionRequestMinAggregateOutputType | null;
    _max: CorrectionRequestMaxAggregateOutputType | null;
};
export type GetCorrectionRequestGroupByPayload<T extends CorrectionRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CorrectionRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CorrectionRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CorrectionRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CorrectionRequestGroupByOutputType[P]>;
}>>;
export type CorrectionRequestWhereInput = {
    AND?: Prisma.CorrectionRequestWhereInput | Prisma.CorrectionRequestWhereInput[];
    OR?: Prisma.CorrectionRequestWhereInput[];
    NOT?: Prisma.CorrectionRequestWhereInput | Prisma.CorrectionRequestWhereInput[];
    id?: Prisma.StringFilter<"CorrectionRequest"> | string;
    sessionId?: Prisma.StringFilter<"CorrectionRequest"> | string;
    requestedById?: Prisma.StringFilter<"CorrectionRequest"> | string;
    reviewedById?: Prisma.StringNullableFilter<"CorrectionRequest"> | string | null;
    originalClockInAt?: Prisma.DateTimeNullableFilter<"CorrectionRequest"> | Date | string | null;
    originalClockOutAt?: Prisma.DateTimeNullableFilter<"CorrectionRequest"> | Date | string | null;
    proposedIn?: Prisma.DateTimeNullableFilter<"CorrectionRequest"> | Date | string | null;
    proposedOut?: Prisma.DateTimeNullableFilter<"CorrectionRequest"> | Date | string | null;
    reason?: Prisma.StringFilter<"CorrectionRequest"> | string;
    status?: Prisma.EnumCorrectionStatusFilter<"CorrectionRequest"> | $Enums.CorrectionStatus;
    reviewNote?: Prisma.StringNullableFilter<"CorrectionRequest"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"CorrectionRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CorrectionRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CorrectionRequest"> | Date | string;
    session?: Prisma.XOR<Prisma.AttendanceSessionScalarRelationFilter, Prisma.AttendanceSessionWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    reviewedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type CorrectionRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalClockInAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalClockOutAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedIn?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedOut?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    session?: Prisma.AttendanceSessionOrderByWithRelationInput;
    requestedBy?: Prisma.UserOrderByWithRelationInput;
    reviewedBy?: Prisma.UserOrderByWithRelationInput;
};
export type CorrectionRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CorrectionRequestWhereInput | Prisma.CorrectionRequestWhereInput[];
    OR?: Prisma.CorrectionRequestWhereInput[];
    NOT?: Prisma.CorrectionRequestWhereInput | Prisma.CorrectionRequestWhereInput[];
    sessionId?: Prisma.StringFilter<"CorrectionRequest"> | string;
    requestedById?: Prisma.StringFilter<"CorrectionRequest"> | string;
    reviewedById?: Prisma.StringNullableFilter<"CorrectionRequest"> | string | null;
    originalClockInAt?: Prisma.DateTimeNullableFilter<"CorrectionRequest"> | Date | string | null;
    originalClockOutAt?: Prisma.DateTimeNullableFilter<"CorrectionRequest"> | Date | string | null;
    proposedIn?: Prisma.DateTimeNullableFilter<"CorrectionRequest"> | Date | string | null;
    proposedOut?: Prisma.DateTimeNullableFilter<"CorrectionRequest"> | Date | string | null;
    reason?: Prisma.StringFilter<"CorrectionRequest"> | string;
    status?: Prisma.EnumCorrectionStatusFilter<"CorrectionRequest"> | $Enums.CorrectionStatus;
    reviewNote?: Prisma.StringNullableFilter<"CorrectionRequest"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"CorrectionRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CorrectionRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CorrectionRequest"> | Date | string;
    session?: Prisma.XOR<Prisma.AttendanceSessionScalarRelationFilter, Prisma.AttendanceSessionWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    reviewedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type CorrectionRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalClockInAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalClockOutAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedIn?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedOut?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CorrectionRequestCountOrderByAggregateInput;
    _max?: Prisma.CorrectionRequestMaxOrderByAggregateInput;
    _min?: Prisma.CorrectionRequestMinOrderByAggregateInput;
};
export type CorrectionRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.CorrectionRequestScalarWhereWithAggregatesInput | Prisma.CorrectionRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.CorrectionRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CorrectionRequestScalarWhereWithAggregatesInput | Prisma.CorrectionRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CorrectionRequest"> | string;
    sessionId?: Prisma.StringWithAggregatesFilter<"CorrectionRequest"> | string;
    requestedById?: Prisma.StringWithAggregatesFilter<"CorrectionRequest"> | string;
    reviewedById?: Prisma.StringNullableWithAggregatesFilter<"CorrectionRequest"> | string | null;
    originalClockInAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CorrectionRequest"> | Date | string | null;
    originalClockOutAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CorrectionRequest"> | Date | string | null;
    proposedIn?: Prisma.DateTimeNullableWithAggregatesFilter<"CorrectionRequest"> | Date | string | null;
    proposedOut?: Prisma.DateTimeNullableWithAggregatesFilter<"CorrectionRequest"> | Date | string | null;
    reason?: Prisma.StringWithAggregatesFilter<"CorrectionRequest"> | string;
    status?: Prisma.EnumCorrectionStatusWithAggregatesFilter<"CorrectionRequest"> | $Enums.CorrectionStatus;
    reviewNote?: Prisma.StringNullableWithAggregatesFilter<"CorrectionRequest"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CorrectionRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CorrectionRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CorrectionRequest"> | Date | string;
};
export type CorrectionRequestCreateInput = {
    id?: string;
    originalClockInAt?: Date | string | null;
    originalClockOutAt?: Date | string | null;
    proposedIn?: Date | string | null;
    proposedOut?: Date | string | null;
    reason: string;
    status?: $Enums.CorrectionStatus;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    session: Prisma.AttendanceSessionCreateNestedOneWithoutCorrectionsInput;
    requestedBy: Prisma.UserCreateNestedOneWithoutRequestedCorrectionsInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutReviewedCorrectionsInput;
};
export type CorrectionRequestUncheckedCreateInput = {
    id?: string;
    sessionId: string;
    requestedById: string;
    reviewedById?: string | null;
    originalClockInAt?: Date | string | null;
    originalClockOutAt?: Date | string | null;
    proposedIn?: Date | string | null;
    proposedOut?: Date | string | null;
    reason: string;
    status?: $Enums.CorrectionStatus;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CorrectionRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalClockInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    originalClockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    session?: Prisma.AttendanceSessionUpdateOneRequiredWithoutCorrectionsNestedInput;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutRequestedCorrectionsNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutReviewedCorrectionsNestedInput;
};
export type CorrectionRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalClockInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    originalClockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CorrectionRequestCreateManyInput = {
    id?: string;
    sessionId: string;
    requestedById: string;
    reviewedById?: string | null;
    originalClockInAt?: Date | string | null;
    originalClockOutAt?: Date | string | null;
    proposedIn?: Date | string | null;
    proposedOut?: Date | string | null;
    reason: string;
    status?: $Enums.CorrectionStatus;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CorrectionRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalClockInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    originalClockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CorrectionRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalClockInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    originalClockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CorrectionRequestListRelationFilter = {
    every?: Prisma.CorrectionRequestWhereInput;
    some?: Prisma.CorrectionRequestWhereInput;
    none?: Prisma.CorrectionRequestWhereInput;
};
export type CorrectionRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CorrectionRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    originalClockInAt?: Prisma.SortOrder;
    originalClockOutAt?: Prisma.SortOrder;
    proposedIn?: Prisma.SortOrder;
    proposedOut?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CorrectionRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    originalClockInAt?: Prisma.SortOrder;
    originalClockOutAt?: Prisma.SortOrder;
    proposedIn?: Prisma.SortOrder;
    proposedOut?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CorrectionRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    originalClockInAt?: Prisma.SortOrder;
    originalClockOutAt?: Prisma.SortOrder;
    proposedIn?: Prisma.SortOrder;
    proposedOut?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CorrectionRequestCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutRequestedByInput, Prisma.CorrectionRequestUncheckedCreateWithoutRequestedByInput> | Prisma.CorrectionRequestCreateWithoutRequestedByInput[] | Prisma.CorrectionRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.CorrectionRequestCreateOrConnectWithoutRequestedByInput | Prisma.CorrectionRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.CorrectionRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
};
export type CorrectionRequestCreateNestedManyWithoutReviewedByInput = {
    create?: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutReviewedByInput, Prisma.CorrectionRequestUncheckedCreateWithoutReviewedByInput> | Prisma.CorrectionRequestCreateWithoutReviewedByInput[] | Prisma.CorrectionRequestUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.CorrectionRequestCreateOrConnectWithoutReviewedByInput | Prisma.CorrectionRequestCreateOrConnectWithoutReviewedByInput[];
    createMany?: Prisma.CorrectionRequestCreateManyReviewedByInputEnvelope;
    connect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
};
export type CorrectionRequestUncheckedCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutRequestedByInput, Prisma.CorrectionRequestUncheckedCreateWithoutRequestedByInput> | Prisma.CorrectionRequestCreateWithoutRequestedByInput[] | Prisma.CorrectionRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.CorrectionRequestCreateOrConnectWithoutRequestedByInput | Prisma.CorrectionRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.CorrectionRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
};
export type CorrectionRequestUncheckedCreateNestedManyWithoutReviewedByInput = {
    create?: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutReviewedByInput, Prisma.CorrectionRequestUncheckedCreateWithoutReviewedByInput> | Prisma.CorrectionRequestCreateWithoutReviewedByInput[] | Prisma.CorrectionRequestUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.CorrectionRequestCreateOrConnectWithoutReviewedByInput | Prisma.CorrectionRequestCreateOrConnectWithoutReviewedByInput[];
    createMany?: Prisma.CorrectionRequestCreateManyReviewedByInputEnvelope;
    connect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
};
export type CorrectionRequestUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutRequestedByInput, Prisma.CorrectionRequestUncheckedCreateWithoutRequestedByInput> | Prisma.CorrectionRequestCreateWithoutRequestedByInput[] | Prisma.CorrectionRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.CorrectionRequestCreateOrConnectWithoutRequestedByInput | Prisma.CorrectionRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.CorrectionRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.CorrectionRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.CorrectionRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    disconnect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    delete?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    connect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    update?: Prisma.CorrectionRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.CorrectionRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.CorrectionRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.CorrectionRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.CorrectionRequestScalarWhereInput | Prisma.CorrectionRequestScalarWhereInput[];
};
export type CorrectionRequestUpdateManyWithoutReviewedByNestedInput = {
    create?: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutReviewedByInput, Prisma.CorrectionRequestUncheckedCreateWithoutReviewedByInput> | Prisma.CorrectionRequestCreateWithoutReviewedByInput[] | Prisma.CorrectionRequestUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.CorrectionRequestCreateOrConnectWithoutReviewedByInput | Prisma.CorrectionRequestCreateOrConnectWithoutReviewedByInput[];
    upsert?: Prisma.CorrectionRequestUpsertWithWhereUniqueWithoutReviewedByInput | Prisma.CorrectionRequestUpsertWithWhereUniqueWithoutReviewedByInput[];
    createMany?: Prisma.CorrectionRequestCreateManyReviewedByInputEnvelope;
    set?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    disconnect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    delete?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    connect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    update?: Prisma.CorrectionRequestUpdateWithWhereUniqueWithoutReviewedByInput | Prisma.CorrectionRequestUpdateWithWhereUniqueWithoutReviewedByInput[];
    updateMany?: Prisma.CorrectionRequestUpdateManyWithWhereWithoutReviewedByInput | Prisma.CorrectionRequestUpdateManyWithWhereWithoutReviewedByInput[];
    deleteMany?: Prisma.CorrectionRequestScalarWhereInput | Prisma.CorrectionRequestScalarWhereInput[];
};
export type CorrectionRequestUncheckedUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutRequestedByInput, Prisma.CorrectionRequestUncheckedCreateWithoutRequestedByInput> | Prisma.CorrectionRequestCreateWithoutRequestedByInput[] | Prisma.CorrectionRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.CorrectionRequestCreateOrConnectWithoutRequestedByInput | Prisma.CorrectionRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.CorrectionRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.CorrectionRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.CorrectionRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    disconnect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    delete?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    connect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    update?: Prisma.CorrectionRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.CorrectionRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.CorrectionRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.CorrectionRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.CorrectionRequestScalarWhereInput | Prisma.CorrectionRequestScalarWhereInput[];
};
export type CorrectionRequestUncheckedUpdateManyWithoutReviewedByNestedInput = {
    create?: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutReviewedByInput, Prisma.CorrectionRequestUncheckedCreateWithoutReviewedByInput> | Prisma.CorrectionRequestCreateWithoutReviewedByInput[] | Prisma.CorrectionRequestUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.CorrectionRequestCreateOrConnectWithoutReviewedByInput | Prisma.CorrectionRequestCreateOrConnectWithoutReviewedByInput[];
    upsert?: Prisma.CorrectionRequestUpsertWithWhereUniqueWithoutReviewedByInput | Prisma.CorrectionRequestUpsertWithWhereUniqueWithoutReviewedByInput[];
    createMany?: Prisma.CorrectionRequestCreateManyReviewedByInputEnvelope;
    set?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    disconnect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    delete?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    connect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    update?: Prisma.CorrectionRequestUpdateWithWhereUniqueWithoutReviewedByInput | Prisma.CorrectionRequestUpdateWithWhereUniqueWithoutReviewedByInput[];
    updateMany?: Prisma.CorrectionRequestUpdateManyWithWhereWithoutReviewedByInput | Prisma.CorrectionRequestUpdateManyWithWhereWithoutReviewedByInput[];
    deleteMany?: Prisma.CorrectionRequestScalarWhereInput | Prisma.CorrectionRequestScalarWhereInput[];
};
export type CorrectionRequestCreateNestedManyWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutSessionInput, Prisma.CorrectionRequestUncheckedCreateWithoutSessionInput> | Prisma.CorrectionRequestCreateWithoutSessionInput[] | Prisma.CorrectionRequestUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.CorrectionRequestCreateOrConnectWithoutSessionInput | Prisma.CorrectionRequestCreateOrConnectWithoutSessionInput[];
    createMany?: Prisma.CorrectionRequestCreateManySessionInputEnvelope;
    connect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
};
export type CorrectionRequestUncheckedCreateNestedManyWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutSessionInput, Prisma.CorrectionRequestUncheckedCreateWithoutSessionInput> | Prisma.CorrectionRequestCreateWithoutSessionInput[] | Prisma.CorrectionRequestUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.CorrectionRequestCreateOrConnectWithoutSessionInput | Prisma.CorrectionRequestCreateOrConnectWithoutSessionInput[];
    createMany?: Prisma.CorrectionRequestCreateManySessionInputEnvelope;
    connect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
};
export type CorrectionRequestUpdateManyWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutSessionInput, Prisma.CorrectionRequestUncheckedCreateWithoutSessionInput> | Prisma.CorrectionRequestCreateWithoutSessionInput[] | Prisma.CorrectionRequestUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.CorrectionRequestCreateOrConnectWithoutSessionInput | Prisma.CorrectionRequestCreateOrConnectWithoutSessionInput[];
    upsert?: Prisma.CorrectionRequestUpsertWithWhereUniqueWithoutSessionInput | Prisma.CorrectionRequestUpsertWithWhereUniqueWithoutSessionInput[];
    createMany?: Prisma.CorrectionRequestCreateManySessionInputEnvelope;
    set?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    disconnect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    delete?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    connect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    update?: Prisma.CorrectionRequestUpdateWithWhereUniqueWithoutSessionInput | Prisma.CorrectionRequestUpdateWithWhereUniqueWithoutSessionInput[];
    updateMany?: Prisma.CorrectionRequestUpdateManyWithWhereWithoutSessionInput | Prisma.CorrectionRequestUpdateManyWithWhereWithoutSessionInput[];
    deleteMany?: Prisma.CorrectionRequestScalarWhereInput | Prisma.CorrectionRequestScalarWhereInput[];
};
export type CorrectionRequestUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutSessionInput, Prisma.CorrectionRequestUncheckedCreateWithoutSessionInput> | Prisma.CorrectionRequestCreateWithoutSessionInput[] | Prisma.CorrectionRequestUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.CorrectionRequestCreateOrConnectWithoutSessionInput | Prisma.CorrectionRequestCreateOrConnectWithoutSessionInput[];
    upsert?: Prisma.CorrectionRequestUpsertWithWhereUniqueWithoutSessionInput | Prisma.CorrectionRequestUpsertWithWhereUniqueWithoutSessionInput[];
    createMany?: Prisma.CorrectionRequestCreateManySessionInputEnvelope;
    set?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    disconnect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    delete?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    connect?: Prisma.CorrectionRequestWhereUniqueInput | Prisma.CorrectionRequestWhereUniqueInput[];
    update?: Prisma.CorrectionRequestUpdateWithWhereUniqueWithoutSessionInput | Prisma.CorrectionRequestUpdateWithWhereUniqueWithoutSessionInput[];
    updateMany?: Prisma.CorrectionRequestUpdateManyWithWhereWithoutSessionInput | Prisma.CorrectionRequestUpdateManyWithWhereWithoutSessionInput[];
    deleteMany?: Prisma.CorrectionRequestScalarWhereInput | Prisma.CorrectionRequestScalarWhereInput[];
};
export type EnumCorrectionStatusFieldUpdateOperationsInput = {
    set?: $Enums.CorrectionStatus;
};
export type CorrectionRequestCreateWithoutRequestedByInput = {
    id?: string;
    originalClockInAt?: Date | string | null;
    originalClockOutAt?: Date | string | null;
    proposedIn?: Date | string | null;
    proposedOut?: Date | string | null;
    reason: string;
    status?: $Enums.CorrectionStatus;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    session: Prisma.AttendanceSessionCreateNestedOneWithoutCorrectionsInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutReviewedCorrectionsInput;
};
export type CorrectionRequestUncheckedCreateWithoutRequestedByInput = {
    id?: string;
    sessionId: string;
    reviewedById?: string | null;
    originalClockInAt?: Date | string | null;
    originalClockOutAt?: Date | string | null;
    proposedIn?: Date | string | null;
    proposedOut?: Date | string | null;
    reason: string;
    status?: $Enums.CorrectionStatus;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CorrectionRequestCreateOrConnectWithoutRequestedByInput = {
    where: Prisma.CorrectionRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutRequestedByInput, Prisma.CorrectionRequestUncheckedCreateWithoutRequestedByInput>;
};
export type CorrectionRequestCreateManyRequestedByInputEnvelope = {
    data: Prisma.CorrectionRequestCreateManyRequestedByInput | Prisma.CorrectionRequestCreateManyRequestedByInput[];
    skipDuplicates?: boolean;
};
export type CorrectionRequestCreateWithoutReviewedByInput = {
    id?: string;
    originalClockInAt?: Date | string | null;
    originalClockOutAt?: Date | string | null;
    proposedIn?: Date | string | null;
    proposedOut?: Date | string | null;
    reason: string;
    status?: $Enums.CorrectionStatus;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    session: Prisma.AttendanceSessionCreateNestedOneWithoutCorrectionsInput;
    requestedBy: Prisma.UserCreateNestedOneWithoutRequestedCorrectionsInput;
};
export type CorrectionRequestUncheckedCreateWithoutReviewedByInput = {
    id?: string;
    sessionId: string;
    requestedById: string;
    originalClockInAt?: Date | string | null;
    originalClockOutAt?: Date | string | null;
    proposedIn?: Date | string | null;
    proposedOut?: Date | string | null;
    reason: string;
    status?: $Enums.CorrectionStatus;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CorrectionRequestCreateOrConnectWithoutReviewedByInput = {
    where: Prisma.CorrectionRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutReviewedByInput, Prisma.CorrectionRequestUncheckedCreateWithoutReviewedByInput>;
};
export type CorrectionRequestCreateManyReviewedByInputEnvelope = {
    data: Prisma.CorrectionRequestCreateManyReviewedByInput | Prisma.CorrectionRequestCreateManyReviewedByInput[];
    skipDuplicates?: boolean;
};
export type CorrectionRequestUpsertWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.CorrectionRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.CorrectionRequestUpdateWithoutRequestedByInput, Prisma.CorrectionRequestUncheckedUpdateWithoutRequestedByInput>;
    create: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutRequestedByInput, Prisma.CorrectionRequestUncheckedCreateWithoutRequestedByInput>;
};
export type CorrectionRequestUpdateWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.CorrectionRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.CorrectionRequestUpdateWithoutRequestedByInput, Prisma.CorrectionRequestUncheckedUpdateWithoutRequestedByInput>;
};
export type CorrectionRequestUpdateManyWithWhereWithoutRequestedByInput = {
    where: Prisma.CorrectionRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.CorrectionRequestUpdateManyMutationInput, Prisma.CorrectionRequestUncheckedUpdateManyWithoutRequestedByInput>;
};
export type CorrectionRequestScalarWhereInput = {
    AND?: Prisma.CorrectionRequestScalarWhereInput | Prisma.CorrectionRequestScalarWhereInput[];
    OR?: Prisma.CorrectionRequestScalarWhereInput[];
    NOT?: Prisma.CorrectionRequestScalarWhereInput | Prisma.CorrectionRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"CorrectionRequest"> | string;
    sessionId?: Prisma.StringFilter<"CorrectionRequest"> | string;
    requestedById?: Prisma.StringFilter<"CorrectionRequest"> | string;
    reviewedById?: Prisma.StringNullableFilter<"CorrectionRequest"> | string | null;
    originalClockInAt?: Prisma.DateTimeNullableFilter<"CorrectionRequest"> | Date | string | null;
    originalClockOutAt?: Prisma.DateTimeNullableFilter<"CorrectionRequest"> | Date | string | null;
    proposedIn?: Prisma.DateTimeNullableFilter<"CorrectionRequest"> | Date | string | null;
    proposedOut?: Prisma.DateTimeNullableFilter<"CorrectionRequest"> | Date | string | null;
    reason?: Prisma.StringFilter<"CorrectionRequest"> | string;
    status?: Prisma.EnumCorrectionStatusFilter<"CorrectionRequest"> | $Enums.CorrectionStatus;
    reviewNote?: Prisma.StringNullableFilter<"CorrectionRequest"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"CorrectionRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CorrectionRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CorrectionRequest"> | Date | string;
};
export type CorrectionRequestUpsertWithWhereUniqueWithoutReviewedByInput = {
    where: Prisma.CorrectionRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.CorrectionRequestUpdateWithoutReviewedByInput, Prisma.CorrectionRequestUncheckedUpdateWithoutReviewedByInput>;
    create: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutReviewedByInput, Prisma.CorrectionRequestUncheckedCreateWithoutReviewedByInput>;
};
export type CorrectionRequestUpdateWithWhereUniqueWithoutReviewedByInput = {
    where: Prisma.CorrectionRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.CorrectionRequestUpdateWithoutReviewedByInput, Prisma.CorrectionRequestUncheckedUpdateWithoutReviewedByInput>;
};
export type CorrectionRequestUpdateManyWithWhereWithoutReviewedByInput = {
    where: Prisma.CorrectionRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.CorrectionRequestUpdateManyMutationInput, Prisma.CorrectionRequestUncheckedUpdateManyWithoutReviewedByInput>;
};
export type CorrectionRequestCreateWithoutSessionInput = {
    id?: string;
    originalClockInAt?: Date | string | null;
    originalClockOutAt?: Date | string | null;
    proposedIn?: Date | string | null;
    proposedOut?: Date | string | null;
    reason: string;
    status?: $Enums.CorrectionStatus;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    requestedBy: Prisma.UserCreateNestedOneWithoutRequestedCorrectionsInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutReviewedCorrectionsInput;
};
export type CorrectionRequestUncheckedCreateWithoutSessionInput = {
    id?: string;
    requestedById: string;
    reviewedById?: string | null;
    originalClockInAt?: Date | string | null;
    originalClockOutAt?: Date | string | null;
    proposedIn?: Date | string | null;
    proposedOut?: Date | string | null;
    reason: string;
    status?: $Enums.CorrectionStatus;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CorrectionRequestCreateOrConnectWithoutSessionInput = {
    where: Prisma.CorrectionRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutSessionInput, Prisma.CorrectionRequestUncheckedCreateWithoutSessionInput>;
};
export type CorrectionRequestCreateManySessionInputEnvelope = {
    data: Prisma.CorrectionRequestCreateManySessionInput | Prisma.CorrectionRequestCreateManySessionInput[];
    skipDuplicates?: boolean;
};
export type CorrectionRequestUpsertWithWhereUniqueWithoutSessionInput = {
    where: Prisma.CorrectionRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.CorrectionRequestUpdateWithoutSessionInput, Prisma.CorrectionRequestUncheckedUpdateWithoutSessionInput>;
    create: Prisma.XOR<Prisma.CorrectionRequestCreateWithoutSessionInput, Prisma.CorrectionRequestUncheckedCreateWithoutSessionInput>;
};
export type CorrectionRequestUpdateWithWhereUniqueWithoutSessionInput = {
    where: Prisma.CorrectionRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.CorrectionRequestUpdateWithoutSessionInput, Prisma.CorrectionRequestUncheckedUpdateWithoutSessionInput>;
};
export type CorrectionRequestUpdateManyWithWhereWithoutSessionInput = {
    where: Prisma.CorrectionRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.CorrectionRequestUpdateManyMutationInput, Prisma.CorrectionRequestUncheckedUpdateManyWithoutSessionInput>;
};
export type CorrectionRequestCreateManyRequestedByInput = {
    id?: string;
    sessionId: string;
    reviewedById?: string | null;
    originalClockInAt?: Date | string | null;
    originalClockOutAt?: Date | string | null;
    proposedIn?: Date | string | null;
    proposedOut?: Date | string | null;
    reason: string;
    status?: $Enums.CorrectionStatus;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CorrectionRequestCreateManyReviewedByInput = {
    id?: string;
    sessionId: string;
    requestedById: string;
    originalClockInAt?: Date | string | null;
    originalClockOutAt?: Date | string | null;
    proposedIn?: Date | string | null;
    proposedOut?: Date | string | null;
    reason: string;
    status?: $Enums.CorrectionStatus;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CorrectionRequestUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalClockInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    originalClockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    session?: Prisma.AttendanceSessionUpdateOneRequiredWithoutCorrectionsNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutReviewedCorrectionsNestedInput;
};
export type CorrectionRequestUncheckedUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalClockInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    originalClockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CorrectionRequestUncheckedUpdateManyWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalClockInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    originalClockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CorrectionRequestUpdateWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalClockInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    originalClockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    session?: Prisma.AttendanceSessionUpdateOneRequiredWithoutCorrectionsNestedInput;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutRequestedCorrectionsNestedInput;
};
export type CorrectionRequestUncheckedUpdateWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    originalClockInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    originalClockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CorrectionRequestUncheckedUpdateManyWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    originalClockInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    originalClockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CorrectionRequestCreateManySessionInput = {
    id?: string;
    requestedById: string;
    reviewedById?: string | null;
    originalClockInAt?: Date | string | null;
    originalClockOutAt?: Date | string | null;
    proposedIn?: Date | string | null;
    proposedOut?: Date | string | null;
    reason: string;
    status?: $Enums.CorrectionStatus;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CorrectionRequestUpdateWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalClockInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    originalClockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutRequestedCorrectionsNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutReviewedCorrectionsNestedInput;
};
export type CorrectionRequestUncheckedUpdateWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalClockInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    originalClockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CorrectionRequestUncheckedUpdateManyWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalClockInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    originalClockOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CorrectionRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessionId?: boolean;
    requestedById?: boolean;
    reviewedById?: boolean;
    originalClockInAt?: boolean;
    originalClockOutAt?: boolean;
    proposedIn?: boolean;
    proposedOut?: boolean;
    reason?: boolean;
    status?: boolean;
    reviewNote?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    session?: boolean | Prisma.AttendanceSessionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.CorrectionRequest$reviewedByArgs<ExtArgs>;
}, ExtArgs["result"]["correctionRequest"]>;
export type CorrectionRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessionId?: boolean;
    requestedById?: boolean;
    reviewedById?: boolean;
    originalClockInAt?: boolean;
    originalClockOutAt?: boolean;
    proposedIn?: boolean;
    proposedOut?: boolean;
    reason?: boolean;
    status?: boolean;
    reviewNote?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    session?: boolean | Prisma.AttendanceSessionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.CorrectionRequest$reviewedByArgs<ExtArgs>;
}, ExtArgs["result"]["correctionRequest"]>;
export type CorrectionRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessionId?: boolean;
    requestedById?: boolean;
    reviewedById?: boolean;
    originalClockInAt?: boolean;
    originalClockOutAt?: boolean;
    proposedIn?: boolean;
    proposedOut?: boolean;
    reason?: boolean;
    status?: boolean;
    reviewNote?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    session?: boolean | Prisma.AttendanceSessionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.CorrectionRequest$reviewedByArgs<ExtArgs>;
}, ExtArgs["result"]["correctionRequest"]>;
export type CorrectionRequestSelectScalar = {
    id?: boolean;
    sessionId?: boolean;
    requestedById?: boolean;
    reviewedById?: boolean;
    originalClockInAt?: boolean;
    originalClockOutAt?: boolean;
    proposedIn?: boolean;
    proposedOut?: boolean;
    reason?: boolean;
    status?: boolean;
    reviewNote?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CorrectionRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sessionId" | "requestedById" | "reviewedById" | "originalClockInAt" | "originalClockOutAt" | "proposedIn" | "proposedOut" | "reason" | "status" | "reviewNote" | "reviewedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["correctionRequest"]>;
export type CorrectionRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | Prisma.AttendanceSessionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.CorrectionRequest$reviewedByArgs<ExtArgs>;
};
export type CorrectionRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | Prisma.AttendanceSessionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.CorrectionRequest$reviewedByArgs<ExtArgs>;
};
export type CorrectionRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | Prisma.AttendanceSessionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.CorrectionRequest$reviewedByArgs<ExtArgs>;
};
export type $CorrectionRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CorrectionRequest";
    objects: {
        session: Prisma.$AttendanceSessionPayload<ExtArgs>;
        requestedBy: Prisma.$UserPayload<ExtArgs>;
        reviewedBy: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sessionId: string;
        requestedById: string;
        reviewedById: string | null;
        originalClockInAt: Date | null;
        originalClockOutAt: Date | null;
        proposedIn: Date | null;
        proposedOut: Date | null;
        reason: string;
        status: $Enums.CorrectionStatus;
        reviewNote: string | null;
        reviewedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["correctionRequest"]>;
    composites: {};
};
export type CorrectionRequestGetPayload<S extends boolean | null | undefined | CorrectionRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CorrectionRequestPayload, S>;
export type CorrectionRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CorrectionRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CorrectionRequestCountAggregateInputType | true;
};
export interface CorrectionRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CorrectionRequest'];
        meta: {
            name: 'CorrectionRequest';
        };
    };
    findUnique<T extends CorrectionRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, CorrectionRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CorrectionRequestClient<runtime.Types.Result.GetResult<Prisma.$CorrectionRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CorrectionRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CorrectionRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CorrectionRequestClient<runtime.Types.Result.GetResult<Prisma.$CorrectionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CorrectionRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, CorrectionRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__CorrectionRequestClient<runtime.Types.Result.GetResult<Prisma.$CorrectionRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CorrectionRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CorrectionRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CorrectionRequestClient<runtime.Types.Result.GetResult<Prisma.$CorrectionRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CorrectionRequestFindManyArgs>(args?: Prisma.SelectSubset<T, CorrectionRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CorrectionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CorrectionRequestCreateArgs>(args: Prisma.SelectSubset<T, CorrectionRequestCreateArgs<ExtArgs>>): Prisma.Prisma__CorrectionRequestClient<runtime.Types.Result.GetResult<Prisma.$CorrectionRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CorrectionRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, CorrectionRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CorrectionRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CorrectionRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CorrectionRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CorrectionRequestDeleteArgs>(args: Prisma.SelectSubset<T, CorrectionRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__CorrectionRequestClient<runtime.Types.Result.GetResult<Prisma.$CorrectionRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CorrectionRequestUpdateArgs>(args: Prisma.SelectSubset<T, CorrectionRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__CorrectionRequestClient<runtime.Types.Result.GetResult<Prisma.$CorrectionRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CorrectionRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, CorrectionRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CorrectionRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, CorrectionRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CorrectionRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CorrectionRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CorrectionRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CorrectionRequestUpsertArgs>(args: Prisma.SelectSubset<T, CorrectionRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__CorrectionRequestClient<runtime.Types.Result.GetResult<Prisma.$CorrectionRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CorrectionRequestCountArgs>(args?: Prisma.Subset<T, CorrectionRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CorrectionRequestCountAggregateOutputType> : number>;
    aggregate<T extends CorrectionRequestAggregateArgs>(args: Prisma.Subset<T, CorrectionRequestAggregateArgs>): Prisma.PrismaPromise<GetCorrectionRequestAggregateType<T>>;
    groupBy<T extends CorrectionRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CorrectionRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: CorrectionRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CorrectionRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCorrectionRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CorrectionRequestFieldRefs;
}
export interface Prisma__CorrectionRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    session<T extends Prisma.AttendanceSessionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSessionDefaultArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requestedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reviewedBy<T extends Prisma.CorrectionRequest$reviewedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CorrectionRequest$reviewedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CorrectionRequestFieldRefs {
    readonly id: Prisma.FieldRef<"CorrectionRequest", 'String'>;
    readonly sessionId: Prisma.FieldRef<"CorrectionRequest", 'String'>;
    readonly requestedById: Prisma.FieldRef<"CorrectionRequest", 'String'>;
    readonly reviewedById: Prisma.FieldRef<"CorrectionRequest", 'String'>;
    readonly originalClockInAt: Prisma.FieldRef<"CorrectionRequest", 'DateTime'>;
    readonly originalClockOutAt: Prisma.FieldRef<"CorrectionRequest", 'DateTime'>;
    readonly proposedIn: Prisma.FieldRef<"CorrectionRequest", 'DateTime'>;
    readonly proposedOut: Prisma.FieldRef<"CorrectionRequest", 'DateTime'>;
    readonly reason: Prisma.FieldRef<"CorrectionRequest", 'String'>;
    readonly status: Prisma.FieldRef<"CorrectionRequest", 'CorrectionStatus'>;
    readonly reviewNote: Prisma.FieldRef<"CorrectionRequest", 'String'>;
    readonly reviewedAt: Prisma.FieldRef<"CorrectionRequest", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"CorrectionRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CorrectionRequest", 'DateTime'>;
}
export type CorrectionRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CorrectionRequestSelect<ExtArgs> | null;
    omit?: Prisma.CorrectionRequestOmit<ExtArgs> | null;
    include?: Prisma.CorrectionRequestInclude<ExtArgs> | null;
    where: Prisma.CorrectionRequestWhereUniqueInput;
};
export type CorrectionRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CorrectionRequestSelect<ExtArgs> | null;
    omit?: Prisma.CorrectionRequestOmit<ExtArgs> | null;
    include?: Prisma.CorrectionRequestInclude<ExtArgs> | null;
    where: Prisma.CorrectionRequestWhereUniqueInput;
};
export type CorrectionRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CorrectionRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CorrectionRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CorrectionRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CorrectionRequestSelect<ExtArgs> | null;
    omit?: Prisma.CorrectionRequestOmit<ExtArgs> | null;
    include?: Prisma.CorrectionRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CorrectionRequestCreateInput, Prisma.CorrectionRequestUncheckedCreateInput>;
};
export type CorrectionRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CorrectionRequestCreateManyInput | Prisma.CorrectionRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CorrectionRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CorrectionRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CorrectionRequestOmit<ExtArgs> | null;
    data: Prisma.CorrectionRequestCreateManyInput | Prisma.CorrectionRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CorrectionRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CorrectionRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CorrectionRequestSelect<ExtArgs> | null;
    omit?: Prisma.CorrectionRequestOmit<ExtArgs> | null;
    include?: Prisma.CorrectionRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CorrectionRequestUpdateInput, Prisma.CorrectionRequestUncheckedUpdateInput>;
    where: Prisma.CorrectionRequestWhereUniqueInput;
};
export type CorrectionRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CorrectionRequestUpdateManyMutationInput, Prisma.CorrectionRequestUncheckedUpdateManyInput>;
    where?: Prisma.CorrectionRequestWhereInput;
    limit?: number;
};
export type CorrectionRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CorrectionRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CorrectionRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CorrectionRequestUpdateManyMutationInput, Prisma.CorrectionRequestUncheckedUpdateManyInput>;
    where?: Prisma.CorrectionRequestWhereInput;
    limit?: number;
    include?: Prisma.CorrectionRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CorrectionRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CorrectionRequestSelect<ExtArgs> | null;
    omit?: Prisma.CorrectionRequestOmit<ExtArgs> | null;
    include?: Prisma.CorrectionRequestInclude<ExtArgs> | null;
    where: Prisma.CorrectionRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CorrectionRequestCreateInput, Prisma.CorrectionRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CorrectionRequestUpdateInput, Prisma.CorrectionRequestUncheckedUpdateInput>;
};
export type CorrectionRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CorrectionRequestSelect<ExtArgs> | null;
    omit?: Prisma.CorrectionRequestOmit<ExtArgs> | null;
    include?: Prisma.CorrectionRequestInclude<ExtArgs> | null;
    where: Prisma.CorrectionRequestWhereUniqueInput;
};
export type CorrectionRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CorrectionRequestWhereInput;
    limit?: number;
};
export type CorrectionRequest$reviewedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type CorrectionRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CorrectionRequestSelect<ExtArgs> | null;
    omit?: Prisma.CorrectionRequestOmit<ExtArgs> | null;
    include?: Prisma.CorrectionRequestInclude<ExtArgs> | null;
};
