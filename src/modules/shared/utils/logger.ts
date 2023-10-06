import * as winston from 'winston';
import { winstonLoggerOptions } from '../configs/winston.config';

export const logger = winston.createLogger(winstonLoggerOptions);
