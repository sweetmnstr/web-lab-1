import { Router } from 'express';
import { DTOBodyValidatorMiddleware } from '../shared/utils/dto-wrapper/dto-wrappers.middleware';
import { SaveEmailBodyInputDTO } from './dtos/input';
import { basicWrappeRouter } from '../shared/utils/base-router.wrapper';
import { UserController } from './user.controller';

const UserRouter = Router();

UserRouter.post(
  '/save-email',
  DTOBodyValidatorMiddleware(SaveEmailBodyInputDTO),
  basicWrappeRouter(UserController.saveEmail),
);

export default UserRouter;
