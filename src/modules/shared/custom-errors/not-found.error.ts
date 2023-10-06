import { BasicError } from './basic.error';
import { StatusCodes } from 'http-status-codes';

export class NotFoundError extends BasicError {
  constructor(
    message,
    statusCode = StatusCodes.NOT_FOUND,
    name = 'NotFoundError',
  ) {
    super({ message, statusCode, name });
  }
}
