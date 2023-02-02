import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProofStatus } from './dto/createProofStatus.dto';
import { ProofStatus } from './proofStatus.entity';
import { ProofStatusService } from './proofStatus.service';

@Controller('/proofStatus')
export class ProofStatusController {
  constructor(private readonly service: ProofStatusService) {}

  @Get()
  getAll(): Promise<ProofStatus[]> {
    return this.service.getAll();
  }

  @Post('/add')
  create(@Body() status: CreateProofStatus): Promise<ProofStatus> {
    return this.service.add(status)
  }
}
