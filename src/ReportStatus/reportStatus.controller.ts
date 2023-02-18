import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReportStatus } from './reportStatus.entity';
import { ReportStatusService } from './reportStatus.service';
import { CreateReportStatus } from './create-reportStatus.dto';

@Controller('/reportStatus')
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
