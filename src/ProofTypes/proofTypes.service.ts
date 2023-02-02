import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProofTypes } from './proofTypes.entity';
import { CreateProofType } from './dto/createProofType.dto';

@Injectable()
export class ProofTypeService {
  constructor(
    @InjectRepository(ProofTypes) 
    private proofTypeRepository: Repository<ProofTypes>,
  ) {}

  getAll(): Promise<ProofTypes []> {
    return this.proofTypeRepository.find()
  }

  add(proofType: CreateProofType): Promise<ProofTypes> {
    return this.proofTypeRepository.save(proofType)
  }

}
