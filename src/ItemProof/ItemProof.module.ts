import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/Items/item.entity';
import { ItemProofController } from './itemProof.controller';
import { ItemProof } from './ItemProof.entity';
import { ItemProofService } from './itemProof.service';
import { Proof } from 'src/Proof/proof.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemProof,Item, Proof])],
  controllers: [ItemProofController],
  providers: [ItemProofService],
})
export class ItemProofModule {}
