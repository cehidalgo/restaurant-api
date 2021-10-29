import { Injectable } from '@nestjs/common';
import { HealthCheck } from './types';
import { EnvironmentConfig } from './config/dotenv';

@Injectable()
export class AppService {
  getAppVersion(): HealthCheck {
    const env = EnvironmentConfig.getInstance();

    const appVersion = env.envVars.APP_VERSION,
      appName = env.envVars.APP_NAME,
      status = env.envVars.STATUS,
      buildVersion = env.envVars.BUILD_VERSION,
      environment = env.envVars.ENV;

    return {
      appName,
      appVersion,
      buildVersion,
      environment,
      status: Boolean(status),
    };
  }
}
