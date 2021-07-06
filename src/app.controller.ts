import { Controller, Get, Ip } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Ip() ip) {
    return {
      ip,
      statusCode: 200,
      status: 'OK',
      message: `You are in twitter-backend api`,

      timestamp: new Date(),
    };
  }
}
