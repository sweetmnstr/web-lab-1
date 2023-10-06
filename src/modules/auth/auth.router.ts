import { Router } from 'express';
import { DTOBodyValidatorMiddleware } from '../shared/utils/dto-wrapper/dto-wrappers.middleware';
import { SaveEmailBodyInputDTO } from './dtos/input';
import { basicWrappeRouter } from '../shared/utils/base-router.wrapper';
import { AuthController } from './auth.controller';

const AuthRouter = Router();

AuthRouter.post(
  '/save-email',
  DTOBodyValidatorMiddleware(SaveEmailBodyInputDTO),
  basicWrappeRouter(AuthController.saveEmail),
);

export default AuthRouter;
