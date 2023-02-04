import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculationType } from 'src/CalculationTypes/calculationTypes.entity';
import { ReportController } from './report.controller';
import { Report } from './report.entity';
import { ReportService } from './report.service';

@Module({
  imports: [TypeOrmModule.forFeature([Report, CalculationType])],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
