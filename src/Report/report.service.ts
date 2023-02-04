import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalculationType } from 'src/CalculationTypes/calculationTypes.entity';
import { Repository } from 'typeorm';
import { CreateReport } from './dto/createReport.dto';
import { Report } from './report.entity';


@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report) 
    private repository: Repository<Report>,
    @InjectRepository(CalculationType) 
    private calculationTypeRepository: Repository<CalculationType>,
  ) {}

  getAll(): Promise<Report []> {
    return this.repository.find({ 
        relations: { 
            Type: true, 
            Proof: { 
                Status: true,
                Type: true,
                Item: true,
            },
            Item: {
                Role: true
            }
        }
    })
  }

  getByID(ID: number): Promise<Report> {
      return this.repository.findOne({ 
          where: {id: ID}, 
          relations: { 
            Type: true, 
            Proof: { 
                Status: true,
                Type: true,
                Item: true,
            },
            Item: {
                Role: true
            }
        }
        })
  }

  async add(report: CreateReport): Promise<Report> {
    report.Type = await this.calculationTypeRepository.findOneBy({ id: report.TypeId })
    report.ReportDate = new Date(report.ReportDate)
    report.EligibilityStartDate = new Date(report.EligibilityStartDate)
    report.EligibilityEndDate = new Date(report.EligibilityEndDate)

    return this.repository.save(report)
  }

  async update(report: CreateReport, id: number) {
    report.Type = await this.calculationTypeRepository.findOneBy({ id: report.TypeId })
    report.ReportDate = new Date(report.ReportDate)
    report.EligibilityStartDate = new Date(report.EligibilityStartDate)
    report.EligibilityEndDate = new Date(report.EligibilityEndDate)

    delete report.TypeId

    return this.repository.update(id, report)
  }

}