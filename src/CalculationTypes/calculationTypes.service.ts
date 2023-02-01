import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CalculationType } from './calculationTypes.entity';
import { CreateCalculationType } from './create-calculationTypes.dto';

@Injectable()
export class CalculationTypeService {
  constructor(
    @InjectRepository(CalculationType) 
    private calculationTypeRepository: Repository<CalculationType>,
  ) {}

  getCalculationTypes(): Promise<CalculationType []> {
    return this.calculationTypeRepository.find()
  }

  addCalculationType(calculationType: CreateCalculationType): Promise<CalculationType> {
    return this.calculationTypeRepository.save(calculationType)
  }

}
