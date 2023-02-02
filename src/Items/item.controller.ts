import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateItem } from './dto/createItem.dto';
import { Item } from './item.entity';
import { ItemService } from './item.service';

@Controller('/items')
export class ItemController {
  constructor(private readonly service: ItemService) {}

  @Get()
  getAll(): Promise<Item[]> {
    return this.service.getAll();
  }

  @Post('/add')
  create(@Body() item: CreateItem): Promise<Item> {
    return this.service.add(item)
  }
}
