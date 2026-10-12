import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BreakRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$BreakRecordPayload>;
export type AggregateBreakRecord = {
    _count: BreakRecordCountAggregateOutputType | null;
    _min: BreakRecordMinAggregateOutputType | null;
    _max: BreakRecordMaxAggregateOutputType | null;
};
export type BreakRecordMinAggregateOutputType = {
    id: string | null;
    attendanceSessionId: string | null;
    startedAt: Date | null;
    endedAt: Date | null;
    breakType: $Enums.BreakType | null;
    createdAt: Date | null;
};
export type BreakRecordMaxAggregateOutputType = {
    id: string | null;
    attendanceSessionId: string | null;
    startedAt: Date | null;
    endedAt: Date | null;
    breakType: $Enums.BreakType | null;
    createdAt: Date | null;
};
export type BreakRecordCountAggregateOutputType = {
    id: number;
    attendanceSessionId: number;
    startedAt: number;
    endedAt: number;
    breakType: number;
    createdAt: number;
    _all: number;
};
export type BreakRecordMinAggregateInputType = {
    id?: true;
    attendanceSessionId?: true;
    startedAt?: true;
    endedAt?: true;
    breakType?: true;
    createdAt?: true;
};
export type BreakRecordMaxAggregateInputType = {
    id?: true;
    attendanceSessionId?: true;
    startedAt?: true;
    endedAt?: true;
    breakType?: true;
    createdAt?: true;
};
export type BreakRecordCountAggregateInputType = {
    id?: true;
    attendanceSessionId?: true;
    startedAt?: true;
    endedAt?: true;
    breakType?: true;
    createdAt?: true;
    _all?: true;
};
export type BreakRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BreakRecordWhereInput;
    orderBy?: Prisma.BreakRecordOrderByWithRelationInput | Prisma.BreakRecordOrderByWithRelationInput[];
    cursor?: Prisma.BreakRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BreakRecordCountAggregateInputType;
    _min?: BreakRecordMinAggregateInputType;
    _max?: BreakRecordMaxAggregateInputType;
};
export type GetBreakRecordAggregateType<T extends BreakRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateBreakRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBreakRecord[P]> : Prisma.GetScalarType<T[P], AggregateBreakRecord[P]>;
};
export type BreakRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BreakRecordWhereInput;
    orderBy?: Prisma.BreakRecordOrderByWithAggregationInput | Prisma.BreakRecordOrderByWithAggregationInput[];
    by: Prisma.BreakRecordScalarFieldEnum[] | Prisma.BreakRecordScalarFieldEnum;
    having?: Prisma.BreakRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BreakRecordCountAggregateInputType | true;
    _min?: BreakRecordMinAggregateInputType;
    _max?: BreakRecordMaxAggregateInputType;
};
export type BreakRecordGroupByOutputType = {
    id: string;
    attendanceSessionId: string;
    startedAt: Date;
    endedAt: Date | null;
    breakType: $Enums.BreakType;
    createdAt: Date;
    _count: BreakRecordCountAggregateOutputType | null;
    _min: BreakRecordMinAggregateOutputType | null;
    _max: BreakRecordMaxAggregateOutputType | null;
};
export type GetBreakRecordGroupByPayload<T extends BreakRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BreakRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BreakRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BreakRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BreakRecordGroupByOutputType[P]>;
}>>;
export type BreakRecordWhereInput = {
    AND?: Prisma.BreakRecordWhereInput | Prisma.BreakRecordWhereInput[];
    OR?: Prisma.BreakRecordWhereInput[];
    NOT?: Prisma.BreakRecordWhereInput | Prisma.BreakRecordWhereInput[];
    id?: Prisma.StringFilter<"BreakRecord"> | string;
    attendanceSessionId?: Prisma.StringFilter<"BreakRecord"> | string;
    startedAt?: Prisma.DateTimeFilter<"BreakRecord"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"BreakRecord"> | Date | string | null;
    breakType?: Prisma.EnumBreakTypeFilter<"BreakRecord"> | $Enums.BreakType;
    createdAt?: Prisma.DateTimeFilter<"BreakRecord"> | Date | string;
    attendanceSession?: Prisma.XOR<Prisma.AttendanceSessionScalarRelationFilter, Prisma.AttendanceSessionWhereInput>;
};
export type BreakRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    attendanceSessionId?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    breakType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    attendanceSession?: Prisma.AttendanceSessionOrderByWithRelationInput;
};
export type BreakRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BreakRecordWhereInput | Prisma.BreakRecordWhereInput[];
    OR?: Prisma.BreakRecordWhereInput[];
    NOT?: Prisma.BreakRecordWhereInput | Prisma.BreakRecordWhereInput[];
    attendanceSessionId?: Prisma.StringFilter<"BreakRecord"> | string;
    startedAt?: Prisma.DateTimeFilter<"BreakRecord"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"BreakRecord"> | Date | string | null;
    breakType?: Prisma.EnumBreakTypeFilter<"BreakRecord"> | $Enums.BreakType;
    createdAt?: Prisma.DateTimeFilter<"BreakRecord"> | Date | string;
    attendanceSession?: Prisma.XOR<Prisma.AttendanceSessionScalarRelationFilter, Prisma.AttendanceSessionWhereInput>;
}, "id">;
export type BreakRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    attendanceSessionId?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    breakType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BreakRecordCountOrderByAggregateInput;
    _max?: Prisma.BreakRecordMaxOrderByAggregateInput;
    _min?: Prisma.BreakRecordMinOrderByAggregateInput;
};
export type BreakRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.BreakRecordScalarWhereWithAggregatesInput | Prisma.BreakRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.BreakRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BreakRecordScalarWhereWithAggregatesInput | Prisma.BreakRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BreakRecord"> | string;
    attendanceSessionId?: Prisma.StringWithAggregatesFilter<"BreakRecord"> | string;
    startedAt?: Prisma.DateTimeWithAggregatesFilter<"BreakRecord"> | Date | string;
    endedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BreakRecord"> | Date | string | null;
    breakType?: Prisma.EnumBreakTypeWithAggregatesFilter<"BreakRecord"> | $Enums.BreakType;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BreakRecord"> | Date | string;
};
export type BreakRecordCreateInput = {
    id?: string;
    startedAt: Date | string;
    endedAt?: Date | string | null;
    breakType?: $Enums.BreakType;
    createdAt?: Date | string;
    attendanceSession: Prisma.AttendanceSessionCreateNestedOneWithoutBreaksInput;
};
export type BreakRecordUncheckedCreateInput = {
    id?: string;
    attendanceSessionId: string;
    startedAt: Date | string;
    endedAt?: Date | string | null;
    breakType?: $Enums.BreakType;
    createdAt?: Date | string;
};
export type BreakRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    breakType?: Prisma.EnumBreakTypeFieldUpdateOperationsInput | $Enums.BreakType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendanceSession?: Prisma.AttendanceSessionUpdateOneRequiredWithoutBreaksNestedInput;
};
export type BreakRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceSessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    breakType?: Prisma.EnumBreakTypeFieldUpdateOperationsInput | $Enums.BreakType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BreakRecordCreateManyInput = {
    id?: string;
    attendanceSessionId: string;
    startedAt: Date | string;
    endedAt?: Date | string | null;
    breakType?: $Enums.BreakType;
    createdAt?: Date | string;
};
export type BreakRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    breakType?: Prisma.EnumBreakTypeFieldUpdateOperationsInput | $Enums.BreakType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BreakRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceSessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    breakType?: Prisma.EnumBreakTypeFieldUpdateOperationsInput | $Enums.BreakType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BreakRecordListRelationFilter = {
    every?: Prisma.BreakRecordWhereInput;
    some?: Prisma.BreakRecordWhereInput;
    none?: Prisma.BreakRecordWhereInput;
};
export type BreakRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BreakRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attendanceSessionId?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    breakType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BreakRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attendanceSessionId?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    breakType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BreakRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attendanceSessionId?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    breakType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BreakRecordCreateNestedManyWithoutAttendanceSessionInput = {
    create?: Prisma.XOR<Prisma.BreakRecordCreateWithoutAttendanceSessionInput, Prisma.BreakRecordUncheckedCreateWithoutAttendanceSessionInput> | Prisma.BreakRecordCreateWithoutAttendanceSessionInput[] | Prisma.BreakRecordUncheckedCreateWithoutAttendanceSessionInput[];
    connectOrCreate?: Prisma.BreakRecordCreateOrConnectWithoutAttendanceSessionInput | Prisma.BreakRecordCreateOrConnectWithoutAttendanceSessionInput[];
    createMany?: Prisma.BreakRecordCreateManyAttendanceSessionInputEnvelope;
    connect?: Prisma.BreakRecordWhereUniqueInput | Prisma.BreakRecordWhereUniqueInput[];
};
export type BreakRecordUncheckedCreateNestedManyWithoutAttendanceSessionInput = {
    create?: Prisma.XOR<Prisma.BreakRecordCreateWithoutAttendanceSessionInput, Prisma.BreakRecordUncheckedCreateWithoutAttendanceSessionInput> | Prisma.BreakRecordCreateWithoutAttendanceSessionInput[] | Prisma.BreakRecordUncheckedCreateWithoutAttendanceSessionInput[];
    connectOrCreate?: Prisma.BreakRecordCreateOrConnectWithoutAttendanceSessionInput | Prisma.BreakRecordCreateOrConnectWithoutAttendanceSessionInput[];
    createMany?: Prisma.BreakRecordCreateManyAttendanceSessionInputEnvelope;
    connect?: Prisma.BreakRecordWhereUniqueInput | Prisma.BreakRecordWhereUniqueInput[];
};
export type BreakRecordUpdateManyWithoutAttendanceSessionNestedInput = {
    create?: Prisma.XOR<Prisma.BreakRecordCreateWithoutAttendanceSessionInput, Prisma.BreakRecordUncheckedCreateWithoutAttendanceSessionInput> | Prisma.BreakRecordCreateWithoutAttendanceSessionInput[] | Prisma.BreakRecordUncheckedCreateWithoutAttendanceSessionInput[];
    connectOrCreate?: Prisma.BreakRecordCreateOrConnectWithoutAttendanceSessionInput | Prisma.BreakRecordCreateOrConnectWithoutAttendanceSessionInput[];
    upsert?: Prisma.BreakRecordUpsertWithWhereUniqueWithoutAttendanceSessionInput | Prisma.BreakRecordUpsertWithWhereUniqueWithoutAttendanceSessionInput[];
    createMany?: Prisma.BreakRecordCreateManyAttendanceSessionInputEnvelope;
    set?: Prisma.BreakRecordWhereUniqueInput | Prisma.BreakRecordWhereUniqueInput[];
    disconnect?: Prisma.BreakRecordWhereUniqueInput | Prisma.BreakRecordWhereUniqueInput[];
    delete?: Prisma.BreakRecordWhereUniqueInput | Prisma.BreakRecordWhereUniqueInput[];
    connect?: Prisma.BreakRecordWhereUniqueInput | Prisma.BreakRecordWhereUniqueInput[];
    update?: Prisma.BreakRecordUpdateWithWhereUniqueWithoutAttendanceSessionInput | Prisma.BreakRecordUpdateWithWhereUniqueWithoutAttendanceSessionInput[];
    updateMany?: Prisma.BreakRecordUpdateManyWithWhereWithoutAttendanceSessionInput | Prisma.BreakRecordUpdateManyWithWhereWithoutAttendanceSessionInput[];
    deleteMany?: Prisma.BreakRecordScalarWhereInput | Prisma.BreakRecordScalarWhereInput[];
};
export type BreakRecordUncheckedUpdateManyWithoutAttendanceSessionNestedInput = {
    create?: Prisma.XOR<Prisma.BreakRecordCreateWithoutAttendanceSessionInput, Prisma.BreakRecordUncheckedCreateWithoutAttendanceSessionInput> | Prisma.BreakRecordCreateWithoutAttendanceSessionInput[] | Prisma.BreakRecordUncheckedCreateWithoutAttendanceSessionInput[];
    connectOrCreate?: Prisma.BreakRecordCreateOrConnectWithoutAttendanceSessionInput | Prisma.BreakRecordCreateOrConnectWithoutAttendanceSessionInput[];
    upsert?: Prisma.BreakRecordUpsertWithWhereUniqueWithoutAttendanceSessionInput | Prisma.BreakRecordUpsertWithWhereUniqueWithoutAttendanceSessionInput[];
    createMany?: Prisma.BreakRecordCreateManyAttendanceSessionInputEnvelope;
    set?: Prisma.BreakRecordWhereUniqueInput | Prisma.BreakRecordWhereUniqueInput[];
    disconnect?: Prisma.BreakRecordWhereUniqueInput | Prisma.BreakRecordWhereUniqueInput[];
    delete?: Prisma.BreakRecordWhereUniqueInput | Prisma.BreakRecordWhereUniqueInput[];
    connect?: Prisma.BreakRecordWhereUniqueInput | Prisma.BreakRecordWhereUniqueInput[];
    update?: Prisma.BreakRecordUpdateWithWhereUniqueWithoutAttendanceSessionInput | Prisma.BreakRecordUpdateWithWhereUniqueWithoutAttendanceSessionInput[];
    updateMany?: Prisma.BreakRecordUpdateManyWithWhereWithoutAttendanceSessionInput | Prisma.BreakRecordUpdateManyWithWhereWithoutAttendanceSessionInput[];
    deleteMany?: Prisma.BreakRecordScalarWhereInput | Prisma.BreakRecordScalarWhereInput[];
};
export type EnumBreakTypeFieldUpdateOperationsInput = {
    set?: $Enums.BreakType;
};
export type BreakRecordCreateWithoutAttendanceSessionInput = {
    id?: string;
    startedAt: Date | string;
    endedAt?: Date | string | null;
    breakType?: $Enums.BreakType;
    createdAt?: Date | string;
};
export type BreakRecordUncheckedCreateWithoutAttendanceSessionInput = {
    id?: string;
    startedAt: Date | string;
    endedAt?: Date | string | null;
    breakType?: $Enums.BreakType;
    createdAt?: Date | string;
};
export type BreakRecordCreateOrConnectWithoutAttendanceSessionInput = {
    where: Prisma.BreakRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.BreakRecordCreateWithoutAttendanceSessionInput, Prisma.BreakRecordUncheckedCreateWithoutAttendanceSessionInput>;
};
export type BreakRecordCreateManyAttendanceSessionInputEnvelope = {
    data: Prisma.BreakRecordCreateManyAttendanceSessionInput | Prisma.BreakRecordCreateManyAttendanceSessionInput[];
    skipDuplicates?: boolean;
};
export type BreakRecordUpsertWithWhereUniqueWithoutAttendanceSessionInput = {
    where: Prisma.BreakRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.BreakRecordUpdateWithoutAttendanceSessionInput, Prisma.BreakRecordUncheckedUpdateWithoutAttendanceSessionInput>;
    create: Prisma.XOR<Prisma.BreakRecordCreateWithoutAttendanceSessionInput, Prisma.BreakRecordUncheckedCreateWithoutAttendanceSessionInput>;
};
export type BreakRecordUpdateWithWhereUniqueWithoutAttendanceSessionInput = {
    where: Prisma.BreakRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.BreakRecordUpdateWithoutAttendanceSessionInput, Prisma.BreakRecordUncheckedUpdateWithoutAttendanceSessionInput>;
};
export type BreakRecordUpdateManyWithWhereWithoutAttendanceSessionInput = {
    where: Prisma.BreakRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.BreakRecordUpdateManyMutationInput, Prisma.BreakRecordUncheckedUpdateManyWithoutAttendanceSessionInput>;
};
export type BreakRecordScalarWhereInput = {
    AND?: Prisma.BreakRecordScalarWhereInput | Prisma.BreakRecordScalarWhereInput[];
    OR?: Prisma.BreakRecordScalarWhereInput[];
    NOT?: Prisma.BreakRecordScalarWhereInput | Prisma.BreakRecordScalarWhereInput[];
    id?: Prisma.StringFilter<"BreakRecord"> | string;
    attendanceSessionId?: Prisma.StringFilter<"BreakRecord"> | string;
    startedAt?: Prisma.DateTimeFilter<"BreakRecord"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"BreakRecord"> | Date | string | null;
    breakType?: Prisma.EnumBreakTypeFilter<"BreakRecord"> | $Enums.BreakType;
    createdAt?: Prisma.DateTimeFilter<"BreakRecord"> | Date | string;
};
export type BreakRecordCreateManyAttendanceSessionInput = {
    id?: string;
    startedAt: Date | string;
    endedAt?: Date | string | null;
    breakType?: $Enums.BreakType;
    createdAt?: Date | string;
};
export type BreakRecordUpdateWithoutAttendanceSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    breakType?: Prisma.EnumBreakTypeFieldUpdateOperationsInput | $Enums.BreakType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BreakRecordUncheckedUpdateWithoutAttendanceSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    breakType?: Prisma.EnumBreakTypeFieldUpdateOperationsInput | $Enums.BreakType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BreakRecordUncheckedUpdateManyWithoutAttendanceSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    breakType?: Prisma.EnumBreakTypeFieldUpdateOperationsInput | $Enums.BreakType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BreakRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attendanceSessionId?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    breakType?: boolean;
    createdAt?: boolean;
    attendanceSession?: boolean | Prisma.AttendanceSessionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["breakRecord"]>;
export type BreakRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attendanceSessionId?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    breakType?: boolean;
    createdAt?: boolean;
    attendanceSession?: boolean | Prisma.AttendanceSessionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["breakRecord"]>;
export type BreakRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attendanceSessionId?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    breakType?: boolean;
    createdAt?: boolean;
    attendanceSession?: boolean | Prisma.AttendanceSessionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["breakRecord"]>;
export type BreakRecordSelectScalar = {
    id?: boolean;
    attendanceSessionId?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    breakType?: boolean;
    createdAt?: boolean;
};
export type BreakRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "attendanceSessionId" | "startedAt" | "endedAt" | "breakType" | "createdAt", ExtArgs["result"]["breakRecord"]>;
export type BreakRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendanceSession?: boolean | Prisma.AttendanceSessionDefaultArgs<ExtArgs>;
};
export type BreakRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendanceSession?: boolean | Prisma.AttendanceSessionDefaultArgs<ExtArgs>;
};
export type BreakRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendanceSession?: boolean | Prisma.AttendanceSessionDefaultArgs<ExtArgs>;
};
export type $BreakRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BreakRecord";
    objects: {
        attendanceSession: Prisma.$AttendanceSessionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        attendanceSessionId: string;
        startedAt: Date;
        endedAt: Date | null;
        breakType: $Enums.BreakType;
        createdAt: Date;
    }, ExtArgs["result"]["breakRecord"]>;
    composites: {};
};
export type BreakRecordGetPayload<S extends boolean | null | undefined | BreakRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BreakRecordPayload, S>;
export type BreakRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BreakRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BreakRecordCountAggregateInputType | true;
};
export interface BreakRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BreakRecord'];
        meta: {
            name: 'BreakRecord';
        };
    };
    findUnique<T extends BreakRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, BreakRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BreakRecordClient<runtime.Types.Result.GetResult<Prisma.$BreakRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BreakRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BreakRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BreakRecordClient<runtime.Types.Result.GetResult<Prisma.$BreakRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BreakRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, BreakRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__BreakRecordClient<runtime.Types.Result.GetResult<Prisma.$BreakRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BreakRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BreakRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BreakRecordClient<runtime.Types.Result.GetResult<Prisma.$BreakRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BreakRecordFindManyArgs>(args?: Prisma.SelectSubset<T, BreakRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BreakRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BreakRecordCreateArgs>(args: Prisma.SelectSubset<T, BreakRecordCreateArgs<ExtArgs>>): Prisma.Prisma__BreakRecordClient<runtime.Types.Result.GetResult<Prisma.$BreakRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BreakRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, BreakRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BreakRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BreakRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BreakRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BreakRecordDeleteArgs>(args: Prisma.SelectSubset<T, BreakRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__BreakRecordClient<runtime.Types.Result.GetResult<Prisma.$BreakRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BreakRecordUpdateArgs>(args: Prisma.SelectSubset<T, BreakRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__BreakRecordClient<runtime.Types.Result.GetResult<Prisma.$BreakRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BreakRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, BreakRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BreakRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, BreakRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BreakRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BreakRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BreakRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BreakRecordUpsertArgs>(args: Prisma.SelectSubset<T, BreakRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__BreakRecordClient<runtime.Types.Result.GetResult<Prisma.$BreakRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BreakRecordCountArgs>(args?: Prisma.Subset<T, BreakRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BreakRecordCountAggregateOutputType> : number>;
    aggregate<T extends BreakRecordAggregateArgs>(args: Prisma.Subset<T, BreakRecordAggregateArgs>): Prisma.PrismaPromise<GetBreakRecordAggregateType<T>>;
    groupBy<T extends BreakRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BreakRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: BreakRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BreakRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBreakRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BreakRecordFieldRefs;
}
export interface Prisma__BreakRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    attendanceSession<T extends Prisma.AttendanceSessionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSessionDefaultArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BreakRecordFieldRefs {
    readonly id: Prisma.FieldRef<"BreakRecord", 'String'>;
    readonly attendanceSessionId: Prisma.FieldRef<"BreakRecord", 'String'>;
    readonly startedAt: Prisma.FieldRef<"BreakRecord", 'DateTime'>;
    readonly endedAt: Prisma.FieldRef<"BreakRecord", 'DateTime'>;
    readonly breakType: Prisma.FieldRef<"BreakRecord", 'BreakType'>;
    readonly createdAt: Prisma.FieldRef<"BreakRecord", 'DateTime'>;
}
export type BreakRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakRecordSelect<ExtArgs> | null;
    omit?: Prisma.BreakRecordOmit<ExtArgs> | null;
    include?: Prisma.BreakRecordInclude<ExtArgs> | null;
    where: Prisma.BreakRecordWhereUniqueInput;
};
export type BreakRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakRecordSelect<ExtArgs> | null;
    omit?: Prisma.BreakRecordOmit<ExtArgs> | null;
    include?: Prisma.BreakRecordInclude<ExtArgs> | null;
    where: Prisma.BreakRecordWhereUniqueInput;
};
export type BreakRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BreakRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BreakRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BreakRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakRecordSelect<ExtArgs> | null;
    omit?: Prisma.BreakRecordOmit<ExtArgs> | null;
    include?: Prisma.BreakRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BreakRecordCreateInput, Prisma.BreakRecordUncheckedCreateInput>;
};
export type BreakRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BreakRecordCreateManyInput | Prisma.BreakRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BreakRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BreakRecordOmit<ExtArgs> | null;
    data: Prisma.BreakRecordCreateManyInput | Prisma.BreakRecordCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BreakRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BreakRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakRecordSelect<ExtArgs> | null;
    omit?: Prisma.BreakRecordOmit<ExtArgs> | null;
    include?: Prisma.BreakRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BreakRecordUpdateInput, Prisma.BreakRecordUncheckedUpdateInput>;
    where: Prisma.BreakRecordWhereUniqueInput;
};
export type BreakRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BreakRecordUpdateManyMutationInput, Prisma.BreakRecordUncheckedUpdateManyInput>;
    where?: Prisma.BreakRecordWhereInput;
    limit?: number;
};
export type BreakRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BreakRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BreakRecordUpdateManyMutationInput, Prisma.BreakRecordUncheckedUpdateManyInput>;
    where?: Prisma.BreakRecordWhereInput;
    limit?: number;
    include?: Prisma.BreakRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BreakRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakRecordSelect<ExtArgs> | null;
    omit?: Prisma.BreakRecordOmit<ExtArgs> | null;
    include?: Prisma.BreakRecordInclude<ExtArgs> | null;
    where: Prisma.BreakRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.BreakRecordCreateInput, Prisma.BreakRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BreakRecordUpdateInput, Prisma.BreakRecordUncheckedUpdateInput>;
};
export type BreakRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakRecordSelect<ExtArgs> | null;
    omit?: Prisma.BreakRecordOmit<ExtArgs> | null;
    include?: Prisma.BreakRecordInclude<ExtArgs> | null;
    where: Prisma.BreakRecordWhereUniqueInput;
};
export type BreakRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BreakRecordWhereInput;
    limit?: number;
};
export type BreakRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakRecordSelect<ExtArgs> | null;
    omit?: Prisma.BreakRecordOmit<ExtArgs> | null;
    include?: Prisma.BreakRecordInclude<ExtArgs> | null;
};
