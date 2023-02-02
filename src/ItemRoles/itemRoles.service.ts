import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemRole } from './dto/createItemRole.dto';
import { ItemRoles } from './itemRoles.entity';

@Injectable()
export class ItemRolesService {
  constructor(
    @InjectRepository(ItemRoles) 
    private repository: Repository<ItemRoles>,
  ) {}

  getAll(): Promise<ItemRoles []> {
    return this.repository.find()
  }

  add(itemRole: CreateItemRole): Promise<ItemRoles> {
    return this.repository.save(itemRole)
  }

}
