export type HealthCheck = {
  appVersion: string;
  appName: string;
  status: boolean;
  environment: string;
  buildVersion: number;
};
