import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvironmentConfig } from './config/dotenv';

(async function () {
  const config = EnvironmentConfig.getInstance();
  const app = await NestFactory.create(AppModule);
  await app.listen(config.envVars.PORT);
})();
