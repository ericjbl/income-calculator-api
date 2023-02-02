import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProofType } from './dto/createProofType.dto';
import { ProofTypes } from './proofTypes.entity';
import { ProofTypeService } from './proofTypes.service';

@Controller('/proofTypes')
export class ProofTypeController {
  constructor(private readonly proofTypeService: ProofTypeService) {}

  @Get()
  getAll(): Promise<ProofTypes[]> {
    return this.proofTypeService.getAll();
  }

  @Post('/add')
  create(@Body() CreateProofType: CreateProofType): Promise<ProofTypes> {
    return this.proofTypeService.add(CreateProofType)
  }
}
