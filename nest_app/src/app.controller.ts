import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('submissions')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): string {
    return 'this is all the submissions';
  }
}
