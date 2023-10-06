import { StatusCodes } from 'http-status-codes';
import { IControllerResponse } from '../types';
import { T } from '../types/t.type';

export class GenerateResponse {
  public static ok(data: object): IControllerResponse<T> {
    return {
      data,
      status: StatusCodes.OK,
    };
  }

  public static created(data: object): IControllerResponse<T> {
    return {
      data,
      status: StatusCodes.CREATED,
    };
  }
}
