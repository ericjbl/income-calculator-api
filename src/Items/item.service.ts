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

  getByReportID(reportId: number): Promise<Item []> {
    return this.repository.find({
        where: {
            Report: { id: reportId }
        }
    })
  }

  async add(item: CreateItem): Promise<Item> {
    const itemToBeSaved = new Item()

    itemToBeSaved.Role = await this.itemRolesrepository.findOneBy({ id: item.roleId })
    itemToBeSaved.Report = await this.reportRepository.findOneBy({ id: item.ReportId })
    itemToBeSaved.Item = item.Item
    itemToBeSaved.ProofId = parseInt(item.ProofId)

    return this.repository.save(itemToBeSaved)
  }

}
