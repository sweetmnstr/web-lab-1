import { logger } from '../logger';
import { IErrorResponse } from '../types';
import { NextFunction, Request, Response } from 'express';

export function exceptionFilter(
  err,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) {
  const { message, statusCode }: IErrorResponse = err;
  console.log({ message, statusCode });

  logger.error(message);
  res.status(statusCode || 500).json({ error: message });
}
