import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { paramBodyQueryEnum } from './param-body-query.enum';

export function basicWrapperMiddleware(
  dto: ClassConstructor<any>,
  param: paramBodyQueryEnum,
) {
  return async function validateMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    if (!req[param]) {
      return res.status(400).json({ message: `${param} is required` });
    }

    const reqDto = plainToClass(dto, req[param]);
    const errors = await validate(reqDto);

    if (errors.length) {
      return res.status(400).json(errors);
    }
    next();
  };
}
