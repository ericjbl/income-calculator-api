import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemRolesController } from './itemRoles.controller';
import { ItemRoles } from './itemRoles.entity';
import { ItemRolesService } from './itemRoles.service';

@Module({
  imports: [TypeOrmModule.forFeature([ItemRoles])],
  controllers: [ItemRolesController],
  providers: [ItemRolesService],
})
export class ItemRolesModule {}
