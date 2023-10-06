import { Request } from 'express';
import { SaveEmailBodyInputDTO } from './dtos/input';
import AuthService from './auth.service';
import { IControllerResponse } from '../shared/utils/types';
import { GenerateResponse } from '../shared/utils/response-genetators';
import { SaveEmailOutputDTO } from './dtos/output';

export class AuthController {
  public static async saveEmail(
    req: Request,
  ): Promise<IControllerResponse<SaveEmailOutputDTO>> {
    const { email } = req.body as SaveEmailBodyInputDTO;
    const data = await AuthService.saveEmail(email);
    return GenerateResponse.ok(data);
  }
}
