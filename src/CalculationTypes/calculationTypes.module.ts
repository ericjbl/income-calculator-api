import { Module } from '@nestjs/common';
import { CalculationTypeController } from './calculationTypes.controller';
import { CalculationTypeService } from './calculationTypes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculationType } from './calculationTypes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CalculationType])],
  controllers: [CalculationTypeController],
  providers: [CalculationTypeService],
})
export class CalculationTypeModule {}
