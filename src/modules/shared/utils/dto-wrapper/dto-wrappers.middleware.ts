import { ClassConstructor } from 'class-transformer';
import { basicWrapperMiddleware } from './basic.wrapper';
import { paramBodyQueryEnum } from './param-body-query.enum';

export function DTOBodyValidatorMiddleware(dto: ClassConstructor<any>) {
  return basicWrapperMiddleware(dto, paramBodyQueryEnum.body);
}

export function DTOParamValidatorMiddleware(dto: ClassConstructor<any>) {
  return basicWrapperMiddleware(dto, paramBodyQueryEnum.params);
}

export function DTOQueryValidatorMiddleware(dto: ClassConstructor<any>) {
  return basicWrapperMiddleware(dto, paramBodyQueryEnum.query);
}
