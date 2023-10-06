import * as winston from 'winston';
import { LoggerOptions } from 'winston';

export const winstonLoggerOptions: LoggerOptions = {
  transports: [new winston.transports.Console()],
};
