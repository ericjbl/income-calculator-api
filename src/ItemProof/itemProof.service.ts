import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/Items/item.entity';
import { Proof } from 'src/Proof/proof.entity';
import { Repository } from 'typeorm';
import { CreateItemProof } from './dto/createItemProof.dto';
import { ItemProof } from './ItemProof.entity';


@Injectable()
export class ItemProofService {
  constructor(
    @InjectRepository(ItemProof) 
    private repository: Repository<ItemProof>,
    @InjectRepository(Item) 
    private itemRepository: Repository<Item>,
    @InjectRepository(Proof) 
    private proofRepository: Repository<Proof>,
  ) {}

  getAllItemsByProof(proofId: number): Promise<ItemProof []> {
    return this.repository.find({
        where: {
            Proof: { id: proofId }
        }
    })
  }

  async add(proof: CreateItemProof): Promise<ItemProof> {
    proof.Item = await this.itemRepository.findOneBy({ id: proof.ItemId })
    proof.Proof = await this.proofRepository.findOneBy({ id: proof.proofId })
    proof.StartDate = new Date(proof.StartDate)
    proof.EndDate = new Date(proof.EndDate)

    return this.repository.save(proof)
  }

  async update(proof: CreateItemProof, id: number) {
    proof.Item = await this.itemRepository.findOneBy({ id: proof.ItemId })
    proof.Proof = await this.proofRepository.findOneBy({ id: proof.proofId })
    proof.StartDate = new Date(proof.StartDate)
    proof.EndDate = new Date(proof.EndDate)
    proof.StartDate = new Date(proof.StartDate)
    proof.EndDate = new Date(proof.EndDate)

    delete proof.ItemId
    delete proof.proofId

    return this.repository.update(id, proof)
  }

}