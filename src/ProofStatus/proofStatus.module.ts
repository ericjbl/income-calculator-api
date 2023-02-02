import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProofStatusController } from './proofStatus.controller';
import { ProofStatus } from './proofStatus.entity';
import { ProofStatusService } from './proofStatus.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProofStatus])],
  controllers: [ProofStatusController],
  providers: [ProofStatusService],
})
export class ProofStatusModule {}
