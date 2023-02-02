import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProofTypeController } from './proofTypes.controller';
import { ProofTypes } from './proofTypes.entity';
import { ProofTypeService } from './proofTypes.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProofTypes])],
  controllers: [ProofTypeController],
  providers: [ProofTypeService],
})
export class ProofTypeModule {}
