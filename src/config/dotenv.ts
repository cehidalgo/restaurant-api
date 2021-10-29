import * as dotenv from 'dotenv';
import { NotLoadedEnvironmentVariableException } from 'src/exceptions';

import { EnvVars } from '../types';

export class EnvironmentConfig {
  protected static instance: EnvironmentConfig | null = null;
  public envVars: EnvVars;

  constructor() {
    dotenv.config();
    this.loadEnvVars();
  }

  public static getInstance(): EnvironmentConfig {
    if (!EnvironmentConfig.instance) {
      EnvironmentConfig.instance = new EnvironmentConfig();
    }

    return EnvironmentConfig.instance;
  }

  private loadEnvVars() {
    const ENV = this.compareVar(process.env.ENV),
      APP_VERSION = this.compareVar(process.env.APP_VERSION),
      APP_NAME = this.compareVar(process.env.APP_NAME),
      BUILD_VERSION = +this.compareVar(process.env.BUILD_VERSION),
      STATUS = this.compareVar(process.env.STATUS),
      PORT = this.compareVar(process.env.PORT);

    this.envVars = {
      ENV,
      APP_VERSION,
      APP_NAME,
      STATUS,
      BUILD_VERSION,
      PORT,
    };

    return this.envVars;
  }

  private compareVar(envVar: string): string {
    if (!envVar) {
      throw new NotLoadedEnvironmentVariableException();
    }

    return envVar;
  }
}
