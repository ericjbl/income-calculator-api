import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculationTypeModule } from './CalculationTypes/calculationTypes.module';
import { CalculationType } from './CalculationTypes/calculationTypes.entity';
import { ConfigModule } from '@nestjs/config';

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
      entities: [CalculationType],
      synchronize: false,
      ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
    }),
    CalculationTypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
