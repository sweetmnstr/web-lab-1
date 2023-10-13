import { Request } from 'express';
import { SaveEmailBodyInputDTO } from './dtos/input';
import UserService from './user.service';
import { IControllerResponse } from '../shared/utils/types';
import { GenerateResponse } from '../shared/utils/response-genetators';
import { SaveEmailOutputDTO } from './dtos/output';

export class UserController {
  public static async saveEmail(
    req: Request,
  ): Promise<IControllerResponse<SaveEmailOutputDTO>> {
    const { email } = req.body as SaveEmailBodyInputDTO;
    const data = await UserService.saveEmail({ email });
    return GenerateResponse.ok(data);
  }
}
