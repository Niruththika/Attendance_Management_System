import { PrismaService } from "../prisma/prisma.service.js";
export declare class TeamsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        name: string;
        id: string;
    }[]>;
    create(name: string): Promise<{
        name: string;
        id: string;
    }>;
}
