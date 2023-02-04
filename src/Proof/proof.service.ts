import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/Items/item.entity';
import { ProofStatus } from 'src/ProofStatus/proofStatus.entity';
import { ProofTypes } from 'src/ProofTypes/proofTypes.entity';
import { Report } from 'src/Report/report.entity';
import { Repository } from 'typeorm';
import { CreateProof } from './dto/createProof.dto';
import { Proof } from './proof.entity';


@Injectable()
export class ProofService {
  constructor(
    @InjectRepository(Proof) 
    private repository: Repository<Proof>,
    @InjectRepository(Item) 
    private itemRepository: Repository<Item>,
    @InjectRepository(ProofTypes) 
    private proofTypesRepository: Repository<ProofTypes>,
    @InjectRepository(ProofStatus) 
    private proofStatusRepository: Repository<ProofStatus>,
    @InjectRepository(Report) 
    private reportRepository: Repository<Report>,
  ) {}

  getAllProofByReport(reportId: number): Promise<Proof []> {
    return this.repository.find({
        where: {
            Report: { id: reportId }
        }
    })
  }

  async add(proof: CreateProof): Promise<Proof> {
    proof.Item = await this.itemRepository.findOneBy({ id: proof.ItemId })
    proof.Report = await this.reportRepository.findOneBy({ id: proof.ReportId })
    proof.Status = await this.proofStatusRepository.findOneBy({ id: proof.StatusId})
    proof.Type = await this.proofTypesRepository.findOneBy({ id: proof.TypeId })
    proof.StartDate = new Date(proof.StartDate)
    proof.EndDate = new Date(proof.EndDate)

    return this.repository.save(proof)
  }

  async update(proof: CreateProof, id: number) {
    proof.Item = await this.itemRepository.findOneBy({ id: proof.ItemId })
    proof.Report = await this.reportRepository.findOneBy({ id: proof.ReportId })
    proof.Status = await this.proofStatusRepository.findOneBy({ id: proof.StatusId})
    proof.Type = await this.proofTypesRepository.findOneBy({ id: proof.TypeId })
    proof.StartDate = new Date(proof.StartDate)
    proof.EndDate = new Date(proof.EndDate)

    delete proof.ItemId
    delete proof.ReportId
    delete proof.StatusId
    delete proof.TypeId

    return this.repository.update(id, proof)
  }

}