import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ReportStatus } from './reportStatus.entity';
import { ReportStatusService } from './reportStatus.service';
import { CreateReportStatus } from './create-reportStatus.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('/reportStatus')
@UseGuards(AuthGuard)
export class ReportStatusController {
  constructor(private readonly reportStatusService: ReportStatusService) {}

  @Get()
  getAll(): Promise<ReportStatus[]> {
    return this.reportStatusService.findAll();
  }

  @Post('/add')
  create(@Body() CreateReportStatus: CreateReportStatus): Promise<ReportStatus> {
    return this.reportStatusService.add(CreateReportStatus)
  }
}
