import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { CreateItem } from './dto/createItem.dto';
import { ItemRoles } from 'src/ItemRoles/itemRoles.entity';
import { Report } from 'src/Report/report.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) 
    private repository: Repository<Item>,
    @InjectRepository(ItemRoles) 
    private itemRolesrepository: Repository<ItemRoles>,
    @InjectRepository(Report) 
    private reportRepository: Repository<Report>,
  ) {}

  getAll(): Promise<Item []> {
    return this.repository.find()
  }

  async add(item: CreateItem): Promise<Item> {
    const itemToBeSaved = new Item()

    itemToBeSaved.Role = await this.itemRolesrepository.findOneBy({ id: item.roleId })
    itemToBeSaved.Report = await this.reportRepository.findOneBy({ id: item.ReportId })
    itemToBeSaved.Item = item.Item

    return this.repository.save(itemToBeSaved)
  }

}
