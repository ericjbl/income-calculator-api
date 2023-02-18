import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportStatus } from './reportStatus.entity';
import { CreateReportStatus } from './create-reportStatus.dto';

@Injectable()
export class ReportStatusService {
  constructor(
    @InjectRepository(ReportStatus) 
    private reportStatusRepository: Repository<ReportStatus>,
  ) {}

  findAll(): Promise<ReportStatus []> {
    return this.reportStatusRepository.find()
  }

  add(status: CreateReportStatus): Promise<ReportStatus> {
    return this.reportStatusRepository.save(status)
  }

}
