import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CalculationType } from './calculationTypes.entity';
import { CalculationTypeService } from './calculationTypes.service';
import { CreateCalculationType } from './create-calculationTypes.dto';

@Controller('/calculationTypes')
@UseGuards(AuthGuard)
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
