import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { ItemRoles } from '../ItemRoles/itemRoles.entity';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { Report } from 'src/Report/report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item,ItemRoles,Report])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
