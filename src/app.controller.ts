import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Query } from '@nestjs/graphql';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/guideline/:householdSize') 
  async getGuideline(@Param('householdSize') householdSize: string) {
    return await this.appService.findGuideline(householdSize);
  }

  @Get()
  @UseGuards(AuthGuard)
  getHello(): string {
    return this.appService.getHello();
  }


}
