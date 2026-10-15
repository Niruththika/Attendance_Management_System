import { TeamsService } from "./teams.service.js";
export declare class TeamsController {
    private readonly teamsService;
    constructor(teamsService: TeamsService);
    findAll(): Promise<{
        name: string;
        id: string;
    }[]>;
    create(name: string): Promise<{
        name: string;
        id: string;
    }>;
}
