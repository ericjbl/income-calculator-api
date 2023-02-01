import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalculationType } from './calculationTypes.entity';
import { CalculationTypeService } from './calculationTypes.service';
import { CreateCalculationType } from './create-calculationTypes.dto';

@Controller('/calculationTypes')
export class CalculationTypeController {
  constructor(private readonly calculationTypeService: CalculationTypeService) {}

  @Get()
  getAll(): Promise<CalculationType[]> {
    return this.calculationTypeService.getCalculationTypes();
  }

  @Post('/add')
  create(@Body() CreateCalculationType: CreateCalculationType): Promise<CalculationType> {
    return this.calculationTypeService.addCalculationType(CreateCalculationType)
  }
}
