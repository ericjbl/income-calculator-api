import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async findGuideline(householdSize: string) {
    const response = this.httpService.get(`https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines/api/${new Date().getFullYear()}/us/${householdSize}`).pipe(map(response => response.data))
    return response;
  }
}
