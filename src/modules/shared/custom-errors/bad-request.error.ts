import { BasicError } from './basic.error';
import { StatusCodes } from 'http-status-codes';

export class BadRequestError extends BasicError {
  constructor(
    message,
    statusCode = StatusCodes.BAD_REQUEST,
    name = 'BadRequestError',
  ) {
    super({ message, statusCode, name });
  }
}
