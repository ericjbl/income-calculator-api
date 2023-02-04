import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateItem } from './dto/createItem.dto';
import { Item } from './item.entity';
import { ItemService } from './item.service';

@Controller('/items')
export class ItemController {
  constructor(private readonly service: ItemService) {}

  @Get('/:reportId')
  getByReportID(@Param('reportId') reportId: number): Promise<Item[]> {
    return this.service.getByReportID(reportId);
  }

  @Post('/add')
  create(@Body() item: CreateItem): Promise<Item> {
    return this.service.add(item)
  }
}
