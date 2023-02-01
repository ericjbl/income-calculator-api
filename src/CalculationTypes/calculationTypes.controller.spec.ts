import { Test, TestingModule } from '@nestjs/testing';
import { CalculationTypeController } from './calculationTypes.controller';
import { CalculationTypeService } from './calculationTypes.service';

describe('CalculationTypeController', () => {
  let calculationTypeController: CalculationTypeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CalculationTypeController],
      providers: [CalculationTypeService],
    }).compile();

    calculationTypeController = app.get<CalculationTypeController>(CalculationTypeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(calculationTypeController.getAll()).toBe('Hello World!');
    });
  });
});
