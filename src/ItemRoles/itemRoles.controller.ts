import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateItemRole } from './dto/createItemRole.dto';
import { ItemRoles } from './itemRoles.entity';
import { ItemRolesService } from './itemRoles.service';

@Controller('/itemRoles')
@UseGuards(AuthGuard)
export class ItemRolesController {
  constructor(private readonly service: ItemRolesService) {}

  @Get()
  getAll(): Promise<ItemRoles[]> {
    return this.service.getAll();
  }

  @Post('/add')
  create(@Body() itemRole: CreateItemRole): Promise<ItemRoles> {
    return this.service.add(itemRole)
  }
}
