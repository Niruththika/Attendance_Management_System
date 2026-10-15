
// import { Injectable } from "@nestjs/common";
// import { PrismaService } from "../prisma/prisma.service.js";

// @Injectable()
// export class TeamsService {
//   constructor(private readonly prisma: PrismaService) {}

//   async findAll() {
//     return this.prisma.team.findMany({
//       select: {
//         id: true,
//         name: true,
//       },
//       orderBy: {
//         name: "asc",
//       },
//     });
//   }
// }


import {
  Injectable,
  ConflictException,
  BadRequestException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class TeamsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.team.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: "asc",
      },
    });
  }

  async create(name: string) {
    const teamName = name?.trim();

    if (!teamName) {
      throw new BadRequestException("Team name is required.");
    }

    const existingTeam = await this.prisma.team.findFirst({
      where: {
        name: {
          equals: teamName,
          mode: "insensitive",
        },
      },
    });

    if (existingTeam) {
      throw new ConflictException("A team with this name already exists.");
    }

    return this.prisma.team.create({
      data: {
        name: teamName,
      },
      select: {
        id: true,
        name: true,
      },
    });
  }
}
