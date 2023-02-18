import { Module } from '@nestjs/common';
import { ReportStatusController } from './reportStatus.controller';
import { ReportStatusService } from './reportStatus.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportStatus } from './reportStatus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReportStatus])],
  controllers: [ReportStatusController],
  providers: [ReportStatusService],
})
export class ReportStatusModule {}
