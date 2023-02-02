import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculationTypeModule } from './CalculationTypes/calculationTypes.module';
import { CalculationType } from './CalculationTypes/calculationTypes.entity';
import { ConfigModule } from '@nestjs/config';
import { ProofTypeModule } from './ProofTypes/proofTypes.module';
import { ProofTypes } from './ProofTypes/proofTypes.entity';
import { ItemRolesModule } from './ItemRoles/itemRoles.module';
import { ItemRoles } from './ItemRoles/itemRoles.entity';
import { Item } from './Items/item.entity';
import { ItemModule } from './Items/item.module';
import { ProofStatusModule } from './ProofStatus/proofStatus.module';
import { ProofStatus } from './ProofStatus/proofStatus.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
      entities: [
        CalculationType,
        ProofTypes,
        ItemRoles,
        Item,
        ProofStatus
      ],
      synchronize: false,
      ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
    }),
    CalculationTypeModule,
    ProofTypeModule,
    ItemRolesModule,
    ItemModule,
    ProofStatusModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
