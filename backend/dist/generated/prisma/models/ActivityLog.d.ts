import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ActivityLogModel = runtime.Types.Result.DefaultSelection<Prisma.$ActivityLogPayload>;
export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null;
    _min: ActivityLogMinAggregateOutputType | null;
    _max: ActivityLogMaxAggregateOutputType | null;
};
export type ActivityLogMinAggregateOutputType = {
    id: string | null;
    actorId: string | null;
    action: string | null;
    targetType: string | null;
    targetId: string | null;
    createdAt: Date | null;
};
export type ActivityLogMaxAggregateOutputType = {
    id: string | null;
    actorId: string | null;
    action: string | null;
    targetType: string | null;
    targetId: string | null;
    createdAt: Date | null;
};
export type ActivityLogCountAggregateOutputType = {
    id: number;
    actorId: number;
    action: number;
    targetType: number;
    targetId: number;
    oldValues: number;
    newValues: number;
    createdAt: number;
    _all: number;
};
export type ActivityLogMinAggregateInputType = {
    id?: true;
    actorId?: true;
    action?: true;
    targetType?: true;
    targetId?: true;
    createdAt?: true;
};
export type ActivityLogMaxAggregateInputType = {
    id?: true;
    actorId?: true;
    action?: true;
    targetType?: true;
    targetId?: true;
    createdAt?: true;
};
export type ActivityLogCountAggregateInputType = {
    id?: true;
    actorId?: true;
    action?: true;
    targetType?: true;
    targetId?: true;
    oldValues?: true;
    newValues?: true;
    createdAt?: true;
    _all?: true;
};
export type ActivityLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityLogWhereInput;
    orderBy?: Prisma.ActivityLogOrderByWithRelationInput | Prisma.ActivityLogOrderByWithRelationInput[];
    cursor?: Prisma.ActivityLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ActivityLogCountAggregateInputType;
    _min?: ActivityLogMinAggregateInputType;
    _max?: ActivityLogMaxAggregateInputType;
};
export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
    [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActivityLog[P]> : Prisma.GetScalarType<T[P], AggregateActivityLog[P]>;
};
export type ActivityLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityLogWhereInput;
    orderBy?: Prisma.ActivityLogOrderByWithAggregationInput | Prisma.ActivityLogOrderByWithAggregationInput[];
    by: Prisma.ActivityLogScalarFieldEnum[] | Prisma.ActivityLogScalarFieldEnum;
    having?: Prisma.ActivityLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActivityLogCountAggregateInputType | true;
    _min?: ActivityLogMinAggregateInputType;
    _max?: ActivityLogMaxAggregateInputType;
};
export type ActivityLogGroupByOutputType = {
    id: string;
    actorId: string | null;
    action: string;
    targetType: string;
    targetId: string;
    oldValues: runtime.JsonValue | null;
    newValues: runtime.JsonValue | null;
    createdAt: Date;
    _count: ActivityLogCountAggregateOutputType | null;
    _min: ActivityLogMinAggregateOutputType | null;
    _max: ActivityLogMaxAggregateOutputType | null;
};
export type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ActivityLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ActivityLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ActivityLogGroupByOutputType[P]>;
}>>;
export type ActivityLogWhereInput = {
    AND?: Prisma.ActivityLogWhereInput | Prisma.ActivityLogWhereInput[];
    OR?: Prisma.ActivityLogWhereInput[];
    NOT?: Prisma.ActivityLogWhereInput | Prisma.ActivityLogWhereInput[];
    id?: Prisma.StringFilter<"ActivityLog"> | string;
    actorId?: Prisma.StringNullableFilter<"ActivityLog"> | string | null;
    action?: Prisma.StringFilter<"ActivityLog"> | string;
    targetType?: Prisma.StringFilter<"ActivityLog"> | string;
    targetId?: Prisma.StringFilter<"ActivityLog"> | string;
    oldValues?: Prisma.JsonNullableFilter<"ActivityLog">;
    newValues?: Prisma.JsonNullableFilter<"ActivityLog">;
    createdAt?: Prisma.DateTimeFilter<"ActivityLog"> | Date | string;
    actor?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type ActivityLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    oldValues?: Prisma.SortOrderInput | Prisma.SortOrder;
    newValues?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    actor?: Prisma.UserOrderByWithRelationInput;
};
export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ActivityLogWhereInput | Prisma.ActivityLogWhereInput[];
    OR?: Prisma.ActivityLogWhereInput[];
    NOT?: Prisma.ActivityLogWhereInput | Prisma.ActivityLogWhereInput[];
    actorId?: Prisma.StringNullableFilter<"ActivityLog"> | string | null;
    action?: Prisma.StringFilter<"ActivityLog"> | string;
    targetType?: Prisma.StringFilter<"ActivityLog"> | string;
    targetId?: Prisma.StringFilter<"ActivityLog"> | string;
    oldValues?: Prisma.JsonNullableFilter<"ActivityLog">;
    newValues?: Prisma.JsonNullableFilter<"ActivityLog">;
    createdAt?: Prisma.DateTimeFilter<"ActivityLog"> | Date | string;
    actor?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type ActivityLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    oldValues?: Prisma.SortOrderInput | Prisma.SortOrder;
    newValues?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ActivityLogCountOrderByAggregateInput;
    _max?: Prisma.ActivityLogMaxOrderByAggregateInput;
    _min?: Prisma.ActivityLogMinOrderByAggregateInput;
};
export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.ActivityLogScalarWhereWithAggregatesInput | Prisma.ActivityLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.ActivityLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ActivityLogScalarWhereWithAggregatesInput | Prisma.ActivityLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ActivityLog"> | string;
    actorId?: Prisma.StringNullableWithAggregatesFilter<"ActivityLog"> | string | null;
    action?: Prisma.StringWithAggregatesFilter<"ActivityLog"> | string;
    targetType?: Prisma.StringWithAggregatesFilter<"ActivityLog"> | string;
    targetId?: Prisma.StringWithAggregatesFilter<"ActivityLog"> | string;
    oldValues?: Prisma.JsonNullableWithAggregatesFilter<"ActivityLog">;
    newValues?: Prisma.JsonNullableWithAggregatesFilter<"ActivityLog">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string;
};
export type ActivityLogCreateInput = {
    id?: string;
    action: string;
    targetType: string;
    targetId: string;
    oldValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    newValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    actor?: Prisma.UserCreateNestedOneWithoutActivityLogsInput;
};
export type ActivityLogUncheckedCreateInput = {
    id?: string;
    actorId?: string | null;
    action: string;
    targetType: string;
    targetId: string;
    oldValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    newValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ActivityLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    newValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actor?: Prisma.UserUpdateOneWithoutActivityLogsNestedInput;
};
export type ActivityLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    newValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityLogCreateManyInput = {
    id?: string;
    actorId?: string | null;
    action: string;
    targetType: string;
    targetId: string;
    oldValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    newValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ActivityLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    newValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    newValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityLogListRelationFilter = {
    every?: Prisma.ActivityLogWhereInput;
    some?: Prisma.ActivityLogWhereInput;
    none?: Prisma.ActivityLogWhereInput;
};
export type ActivityLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ActivityLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    oldValues?: Prisma.SortOrder;
    newValues?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ActivityLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ActivityLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ActivityLogCreateNestedManyWithoutActorInput = {
    create?: Prisma.XOR<Prisma.ActivityLogCreateWithoutActorInput, Prisma.ActivityLogUncheckedCreateWithoutActorInput> | Prisma.ActivityLogCreateWithoutActorInput[] | Prisma.ActivityLogUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ActivityLogCreateOrConnectWithoutActorInput | Prisma.ActivityLogCreateOrConnectWithoutActorInput[];
    createMany?: Prisma.ActivityLogCreateManyActorInputEnvelope;
    connect?: Prisma.ActivityLogWhereUniqueInput | Prisma.ActivityLogWhereUniqueInput[];
};
export type ActivityLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: Prisma.XOR<Prisma.ActivityLogCreateWithoutActorInput, Prisma.ActivityLogUncheckedCreateWithoutActorInput> | Prisma.ActivityLogCreateWithoutActorInput[] | Prisma.ActivityLogUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ActivityLogCreateOrConnectWithoutActorInput | Prisma.ActivityLogCreateOrConnectWithoutActorInput[];
    createMany?: Prisma.ActivityLogCreateManyActorInputEnvelope;
    connect?: Prisma.ActivityLogWhereUniqueInput | Prisma.ActivityLogWhereUniqueInput[];
};
export type ActivityLogUpdateManyWithoutActorNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityLogCreateWithoutActorInput, Prisma.ActivityLogUncheckedCreateWithoutActorInput> | Prisma.ActivityLogCreateWithoutActorInput[] | Prisma.ActivityLogUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ActivityLogCreateOrConnectWithoutActorInput | Prisma.ActivityLogCreateOrConnectWithoutActorInput[];
    upsert?: Prisma.ActivityLogUpsertWithWhereUniqueWithoutActorInput | Prisma.ActivityLogUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: Prisma.ActivityLogCreateManyActorInputEnvelope;
    set?: Prisma.ActivityLogWhereUniqueInput | Prisma.ActivityLogWhereUniqueInput[];
    disconnect?: Prisma.ActivityLogWhereUniqueInput | Prisma.ActivityLogWhereUniqueInput[];
    delete?: Prisma.ActivityLogWhereUniqueInput | Prisma.ActivityLogWhereUniqueInput[];
    connect?: Prisma.ActivityLogWhereUniqueInput | Prisma.ActivityLogWhereUniqueInput[];
    update?: Prisma.ActivityLogUpdateWithWhereUniqueWithoutActorInput | Prisma.ActivityLogUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?: Prisma.ActivityLogUpdateManyWithWhereWithoutActorInput | Prisma.ActivityLogUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: Prisma.ActivityLogScalarWhereInput | Prisma.ActivityLogScalarWhereInput[];
};
export type ActivityLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityLogCreateWithoutActorInput, Prisma.ActivityLogUncheckedCreateWithoutActorInput> | Prisma.ActivityLogCreateWithoutActorInput[] | Prisma.ActivityLogUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ActivityLogCreateOrConnectWithoutActorInput | Prisma.ActivityLogCreateOrConnectWithoutActorInput[];
    upsert?: Prisma.ActivityLogUpsertWithWhereUniqueWithoutActorInput | Prisma.ActivityLogUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: Prisma.ActivityLogCreateManyActorInputEnvelope;
    set?: Prisma.ActivityLogWhereUniqueInput | Prisma.ActivityLogWhereUniqueInput[];
    disconnect?: Prisma.ActivityLogWhereUniqueInput | Prisma.ActivityLogWhereUniqueInput[];
    delete?: Prisma.ActivityLogWhereUniqueInput | Prisma.ActivityLogWhereUniqueInput[];
    connect?: Prisma.ActivityLogWhereUniqueInput | Prisma.ActivityLogWhereUniqueInput[];
    update?: Prisma.ActivityLogUpdateWithWhereUniqueWithoutActorInput | Prisma.ActivityLogUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?: Prisma.ActivityLogUpdateManyWithWhereWithoutActorInput | Prisma.ActivityLogUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: Prisma.ActivityLogScalarWhereInput | Prisma.ActivityLogScalarWhereInput[];
};
export type ActivityLogCreateWithoutActorInput = {
    id?: string;
    action: string;
    targetType: string;
    targetId: string;
    oldValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    newValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ActivityLogUncheckedCreateWithoutActorInput = {
    id?: string;
    action: string;
    targetType: string;
    targetId: string;
    oldValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    newValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ActivityLogCreateOrConnectWithoutActorInput = {
    where: Prisma.ActivityLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityLogCreateWithoutActorInput, Prisma.ActivityLogUncheckedCreateWithoutActorInput>;
};
export type ActivityLogCreateManyActorInputEnvelope = {
    data: Prisma.ActivityLogCreateManyActorInput | Prisma.ActivityLogCreateManyActorInput[];
    skipDuplicates?: boolean;
};
export type ActivityLogUpsertWithWhereUniqueWithoutActorInput = {
    where: Prisma.ActivityLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.ActivityLogUpdateWithoutActorInput, Prisma.ActivityLogUncheckedUpdateWithoutActorInput>;
    create: Prisma.XOR<Prisma.ActivityLogCreateWithoutActorInput, Prisma.ActivityLogUncheckedCreateWithoutActorInput>;
};
export type ActivityLogUpdateWithWhereUniqueWithoutActorInput = {
    where: Prisma.ActivityLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.ActivityLogUpdateWithoutActorInput, Prisma.ActivityLogUncheckedUpdateWithoutActorInput>;
};
export type ActivityLogUpdateManyWithWhereWithoutActorInput = {
    where: Prisma.ActivityLogScalarWhereInput;
    data: Prisma.XOR<Prisma.ActivityLogUpdateManyMutationInput, Prisma.ActivityLogUncheckedUpdateManyWithoutActorInput>;
};
export type ActivityLogScalarWhereInput = {
    AND?: Prisma.ActivityLogScalarWhereInput | Prisma.ActivityLogScalarWhereInput[];
    OR?: Prisma.ActivityLogScalarWhereInput[];
    NOT?: Prisma.ActivityLogScalarWhereInput | Prisma.ActivityLogScalarWhereInput[];
    id?: Prisma.StringFilter<"ActivityLog"> | string;
    actorId?: Prisma.StringNullableFilter<"ActivityLog"> | string | null;
    action?: Prisma.StringFilter<"ActivityLog"> | string;
    targetType?: Prisma.StringFilter<"ActivityLog"> | string;
    targetId?: Prisma.StringFilter<"ActivityLog"> | string;
    oldValues?: Prisma.JsonNullableFilter<"ActivityLog">;
    newValues?: Prisma.JsonNullableFilter<"ActivityLog">;
    createdAt?: Prisma.DateTimeFilter<"ActivityLog"> | Date | string;
};
export type ActivityLogCreateManyActorInput = {
    id?: string;
    action: string;
    targetType: string;
    targetId: string;
    oldValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    newValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ActivityLogUpdateWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    newValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityLogUncheckedUpdateWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    newValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityLogUncheckedUpdateManyWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    newValues?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    actorId?: boolean;
    action?: boolean;
    targetType?: boolean;
    targetId?: boolean;
    oldValues?: boolean;
    newValues?: boolean;
    createdAt?: boolean;
    actor?: boolean | Prisma.ActivityLog$actorArgs<ExtArgs>;
}, ExtArgs["result"]["activityLog"]>;
export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    actorId?: boolean;
    action?: boolean;
    targetType?: boolean;
    targetId?: boolean;
    oldValues?: boolean;
    newValues?: boolean;
    createdAt?: boolean;
    actor?: boolean | Prisma.ActivityLog$actorArgs<ExtArgs>;
}, ExtArgs["result"]["activityLog"]>;
export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    actorId?: boolean;
    action?: boolean;
    targetType?: boolean;
    targetId?: boolean;
    oldValues?: boolean;
    newValues?: boolean;
    createdAt?: boolean;
    actor?: boolean | Prisma.ActivityLog$actorArgs<ExtArgs>;
}, ExtArgs["result"]["activityLog"]>;
export type ActivityLogSelectScalar = {
    id?: boolean;
    actorId?: boolean;
    action?: boolean;
    targetType?: boolean;
    targetId?: boolean;
    oldValues?: boolean;
    newValues?: boolean;
    createdAt?: boolean;
};
export type ActivityLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "actorId" | "action" | "targetType" | "targetId" | "oldValues" | "newValues" | "createdAt", ExtArgs["result"]["activityLog"]>;
export type ActivityLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actor?: boolean | Prisma.ActivityLog$actorArgs<ExtArgs>;
};
export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actor?: boolean | Prisma.ActivityLog$actorArgs<ExtArgs>;
};
export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actor?: boolean | Prisma.ActivityLog$actorArgs<ExtArgs>;
};
export type $ActivityLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ActivityLog";
    objects: {
        actor: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        actorId: string | null;
        action: string;
        targetType: string;
        targetId: string;
        oldValues: runtime.JsonValue | null;
        newValues: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["activityLog"]>;
    composites: {};
};
export type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload, S>;
export type ActivityLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActivityLogCountAggregateInputType | true;
};
export interface ActivityLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'];
        meta: {
            name: 'ActivityLog';
        };
    };
    findUnique<T extends ActivityLogFindUniqueArgs>(args: Prisma.SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ActivityLogClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivityLogClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ActivityLogFindFirstArgs>(args?: Prisma.SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__ActivityLogClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivityLogClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ActivityLogFindManyArgs>(args?: Prisma.SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ActivityLogCreateArgs>(args: Prisma.SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma.Prisma__ActivityLogClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ActivityLogCreateManyArgs>(args?: Prisma.SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ActivityLogDeleteArgs>(args: Prisma.SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma.Prisma__ActivityLogClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ActivityLogUpdateArgs>(args: Prisma.SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma.Prisma__ActivityLogClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ActivityLogUpdateManyArgs>(args: Prisma.SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ActivityLogUpsertArgs>(args: Prisma.SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma.Prisma__ActivityLogClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ActivityLogCountArgs>(args?: Prisma.Subset<T, ActivityLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ActivityLogCountAggregateOutputType> : number>;
    aggregate<T extends ActivityLogAggregateArgs>(args: Prisma.Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>;
    groupBy<T extends ActivityLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ActivityLogGroupByArgs['orderBy'];
    } : {
        orderBy?: ActivityLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ActivityLogFieldRefs;
}
export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    actor<T extends Prisma.ActivityLog$actorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ActivityLog$actorArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ActivityLogFieldRefs {
    readonly id: Prisma.FieldRef<"ActivityLog", 'String'>;
    readonly actorId: Prisma.FieldRef<"ActivityLog", 'String'>;
    readonly action: Prisma.FieldRef<"ActivityLog", 'String'>;
    readonly targetType: Prisma.FieldRef<"ActivityLog", 'String'>;
    readonly targetId: Prisma.FieldRef<"ActivityLog", 'String'>;
    readonly oldValues: Prisma.FieldRef<"ActivityLog", 'Json'>;
    readonly newValues: Prisma.FieldRef<"ActivityLog", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"ActivityLog", 'DateTime'>;
}
export type ActivityLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogSelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogInclude<ExtArgs> | null;
    where: Prisma.ActivityLogWhereUniqueInput;
};
export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogSelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogInclude<ExtArgs> | null;
    where: Prisma.ActivityLogWhereUniqueInput;
};
export type ActivityLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogSelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogInclude<ExtArgs> | null;
    where?: Prisma.ActivityLogWhereInput;
    orderBy?: Prisma.ActivityLogOrderByWithRelationInput | Prisma.ActivityLogOrderByWithRelationInput[];
    cursor?: Prisma.ActivityLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityLogScalarFieldEnum | Prisma.ActivityLogScalarFieldEnum[];
};
export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogSelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogInclude<ExtArgs> | null;
    where?: Prisma.ActivityLogWhereInput;
    orderBy?: Prisma.ActivityLogOrderByWithRelationInput | Prisma.ActivityLogOrderByWithRelationInput[];
    cursor?: Prisma.ActivityLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityLogScalarFieldEnum | Prisma.ActivityLogScalarFieldEnum[];
};
export type ActivityLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogSelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogInclude<ExtArgs> | null;
    where?: Prisma.ActivityLogWhereInput;
    orderBy?: Prisma.ActivityLogOrderByWithRelationInput | Prisma.ActivityLogOrderByWithRelationInput[];
    cursor?: Prisma.ActivityLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityLogScalarFieldEnum | Prisma.ActivityLogScalarFieldEnum[];
};
export type ActivityLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogSelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivityLogCreateInput, Prisma.ActivityLogUncheckedCreateInput>;
};
export type ActivityLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ActivityLogCreateManyInput | Prisma.ActivityLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ActivityLogOmit<ExtArgs> | null;
    data: Prisma.ActivityLogCreateManyInput | Prisma.ActivityLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ActivityLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogSelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivityLogUpdateInput, Prisma.ActivityLogUncheckedUpdateInput>;
    where: Prisma.ActivityLogWhereUniqueInput;
};
export type ActivityLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ActivityLogUpdateManyMutationInput, Prisma.ActivityLogUncheckedUpdateManyInput>;
    where?: Prisma.ActivityLogWhereInput;
    limit?: number;
};
export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ActivityLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivityLogUpdateManyMutationInput, Prisma.ActivityLogUncheckedUpdateManyInput>;
    where?: Prisma.ActivityLogWhereInput;
    limit?: number;
    include?: Prisma.ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ActivityLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogSelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogInclude<ExtArgs> | null;
    where: Prisma.ActivityLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityLogCreateInput, Prisma.ActivityLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ActivityLogUpdateInput, Prisma.ActivityLogUncheckedUpdateInput>;
};
export type ActivityLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogSelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogInclude<ExtArgs> | null;
    where: Prisma.ActivityLogWhereUniqueInput;
};
export type ActivityLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityLogWhereInput;
    limit?: number;
};
export type ActivityLog$actorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type ActivityLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogSelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogInclude<ExtArgs> | null;
};
