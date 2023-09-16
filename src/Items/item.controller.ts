import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateItem } from './dto/createItem.dto';
import { Item } from './item.entity';
import { ItemService } from './item.service';

@Controller('/items')
@UseGuards(AuthGuard)
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

  @Put('/update/:id')
  updateProof(@Param() id: number, @Body() item: CreateItem) {
      return this.service.update(item,id)
  }

  @Put('/delete/:id')
  deleteProof(@Param() id: number) {
      return this.service.delete(id)
  }
}
