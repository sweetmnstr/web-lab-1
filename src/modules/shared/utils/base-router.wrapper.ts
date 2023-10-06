import { Request, Response, NextFunction } from 'express';
import { IControllerResponse } from './types';
import { T } from './types/t.type';

export function basicWrappeRouter(
  controller: (req: Request) => Promise<IControllerResponse<T>>,
) {
  return async function validateMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { data, status }: IControllerResponse<T> = await controller(req);
      res.status(status || 200).json(data);
    } catch (err) {
      next(err);
    }
  };
}
