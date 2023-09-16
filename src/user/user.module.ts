import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from 'src/user-role/entities/user-role.entity';
import { User } from './entities/user.entity';
import { UserResolver } from './user.resolvers';
import { Report } from 'src/Report/report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,UserRole, Report])],
  controllers: [UserController],
  providers: [UserService, UserResolver],
  exports: [UserService] 
})
export class UserModule {}
