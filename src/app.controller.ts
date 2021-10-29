import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

import { HealthCheck } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAppVersion(): HealthCheck {
    return this.appService.getAppVersion();
  }
}
