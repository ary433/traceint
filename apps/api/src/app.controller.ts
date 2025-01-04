// This is the main controller for the API
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service'

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
