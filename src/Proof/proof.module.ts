import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemProof } from 'src/ItemProof/ItemProof.entity';
import { ProofStatus } from 'src/ProofStatus/proofStatus.entity';
import { ProofTypes } from 'src/ProofTypes/proofTypes.entity';
import { Report } from 'src/Report/report.entity';
import { ProofController } from './proof.controller';
import { Proof } from './proof.entity';
import { ProofService } from './proof.service';

@Module({
  imports: [TypeOrmModule.forFeature([Proof,ProofTypes,ProofStatus,ItemProof,Report])],
  controllers: [ProofController],
  providers: [ProofService],
})
export class ProofModule {}
