import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProofStatus } from './dto/createProofStatus.dto';
import { ProofStatus } from './proofStatus.entity';

@Injectable()
export class ProofStatusService {
  constructor(
    @InjectRepository(ProofStatus) 
    private repository: Repository<ProofStatus>,
  ) {}

  getAll(): Promise<ProofStatus []> {
    return this.repository.find()
  }

  add(status: CreateProofStatus): Promise<ProofStatus> {
    return this.repository.save(status)
  }

}
