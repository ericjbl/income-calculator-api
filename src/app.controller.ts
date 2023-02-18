import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/guideline/:householdSize') 
  async getGuideline(@Param('householdSize') householdSize: string) {
    return await this.appService.findGuideline(householdSize);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


}
