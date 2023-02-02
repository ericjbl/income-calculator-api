import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { CreateItem } from './dto/createItem.dto';
import { ItemRoles } from 'src/ItemRoles/itemRoles.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) 
    private repository: Repository<Item>,
    @InjectRepository(ItemRoles) 
    private itemRolesrepository: Repository<ItemRoles>,
  ) {}

  getAll(): Promise<Item []> {
    return this.repository.find()
  }

  async add(item: CreateItem): Promise<Item> {
    const itemToBeSaved = new Item()

    itemToBeSaved.Role = await this.itemRolesrepository.findOneBy({ id: item.roleId })
    itemToBeSaved.Item = item.Item

    return this.repository.save(itemToBeSaved)
  }

}
