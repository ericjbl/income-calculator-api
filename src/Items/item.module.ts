import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { ItemRoles } from '../ItemRoles/itemRoles.entity';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
  imports: [TypeOrmModule.forFeature([Item,ItemRoles])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
