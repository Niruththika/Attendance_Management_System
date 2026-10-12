
import {
  Body,
  Controller,
  Get,
  Patch,
  Param,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { CorrectionsService } from "./corrections.service.js";

interface AuthenticatedRequest {
  user: {
    userId: string;
    email: string;
    role: string;
    employeeId: string | null;
  };
}

@Controller("corrections")
@UseGuards(JwtAuthGuard)
export class CorrectionsController {
  constructor(
    private readonly correctionsService: CorrectionsService,
  ) {}

  @Post()
  createRequest(
    @Request() req: AuthenticatedRequest,
    @Body()
    body: {
      sessionId: string;
      reason: string;
      proposedIn?: string;
      proposedOut?: string;
    },
  ) {
    return this.correctionsService.createRequest(
      req.user.userId,
      body.sessionId,
      body.reason,
      body.proposedIn,
      body.proposedOut,
    );
  }

  @Get("my-requests")
  getMyRequests(@Request() req: AuthenticatedRequest) {
    return this.correctionsService.getMyRequests(req.user.userId);
  }

    @Get("pending")
  getPendingRequests(@Request() req: AuthenticatedRequest) {
    return this.correctionsService.getPendingRequests(req.user.userId);
  }

  @Patch(":id/review")
  reviewRequest(
    @Request() req: AuthenticatedRequest,
    @Param("id") id: string,
    @Body()
    body: {
      decision: "APPROVED" | "REJECTED";
      reviewNote?: string;
    },
  ) {
    return this.correctionsService.reviewRequest(
      req.user.userId,
      id,
      body.decision,
      body.reviewNote,
    );
  }
}
