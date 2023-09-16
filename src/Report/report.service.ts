import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { identity } from 'rxjs';
import { CalculationType } from 'src/CalculationTypes/calculationTypes.entity';
import { ReportStatus } from 'src/ReportStatus/reportStatus.entity';
import { User } from 'src/user/entities/user.entity';
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
    @InjectRepository(ReportStatus) 
    private reportStatusRepository: Repository<ReportStatus>,
    @InjectRepository(User) 
    private userRepository: Repository<User>,
  ) {}

  getAll(): Promise<Report []> {
    return this.repository.find({ 
        select: {
            User: {
                email: true,
                firstName: true,
                lastName: true,
                userId: true,
                username: true
            },
            UpdatedBy: {
                email: true,
                firstName: true,
                lastName: true,
                userId: true,
                username: true
            }
        }, 
        relations: { 
            Type: true,
            Status: true, 
            Proof: { 
                Status: true,
                Type: true,
                ItemProof: {
                    Item: {
                        Role: true
                    }
                },
            },
            Item: {
                Role: true
            },
            User: true,
            UpdatedBy: true 
        }
    })
  }

  getByID(ID: number): Promise<Report> {
      return this.repository.findOne({ 
          where: {id: ID},
          select: {
            User: {
                email: true,
                firstName: true,
                lastName: true,
                userId: true,
                username: true
            },
            UpdatedBy: {
                email: true,
                firstName: true,
                lastName: true,
                userId: true,
                username: true
            }, 
          }, 
          relations: { 
            Type: true, 
            Status: true,
            Proof: { 
                Status: true,
                Type: true,
                ItemProof: {
                    Item: {
                        Role: true
                    }
                },
            },
            Item: {
                Role: true
            },
            User: true,
            UpdatedBy: true
            }
        })
  }

  async add(report: CreateReport): Promise<Report> {
    report.Type = await this.calculationTypeRepository.findOneBy({ id: report.TypeId })
    report.Status = await this.reportStatusRepository.findOneBy({ id: report.reportStatusId })
    report.User = await this.userRepository.findOneBy({ username: report.userId})
    report.ReportDate = new Date(report.ReportDate)
    report.EligibilityStartDate = new Date(report.EligibilityStartDate)
    report.EligibilityEndDate = new Date(report.EligibilityEndDate)
    report.UpdatedBy = await this.userRepository.findOneBy({ username: report.updateby})

    return this.repository.save(report)
  }

  async updateReport(report: CreateReport, id: number) {
    report.Type = await this.calculationTypeRepository.findOneBy({ id: report.TypeId })
    report.Status = await this.reportStatusRepository.findOneBy({ id: report.reportStatusId })
    report.ReportDate = new Date(report.ReportDate)
    report.EligibilityStartDate = new Date(report.EligibilityStartDate)
    report.EligibilityEndDate = new Date(report.EligibilityEndDate)
    report.User = await this.userRepository.findOneBy({ username: report.userId})
    report.UpdatedBy = await this.userRepository.findOneBy({ username: report.updateby})

    delete report.TypeId



    return this.repository.createQueryBuilder()
        .update(Report)
        .set({
            Type: report.Type,
            Status: report.Status,
            name: report.name,
            lastName: report.lastName,
            ReportDate: report.ReportDate,
            EligibilityStartDate: report.EligibilityStartDate,
            EligibilityEndDate: report.EligibilityEndDate,
            total: report.total,
            result: report.result,
            percentage: report.percentage,
            User:  report.User,
            UpdatedBy: report.UpdatedBy,
        })
        .where("id = :id", { id: id })
        .execute()
    
    
    // return this.repository.update(id, report)
  }

}