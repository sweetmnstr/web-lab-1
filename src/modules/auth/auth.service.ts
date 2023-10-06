import userRepository from '../db/repositories/user.repository';
import { SaveEmailOutputDTO } from './dtos/output';

class AuthService {
  public async saveEmail(email): Promise<SaveEmailOutputDTO> {
    await userRepository.create(email);

    const message = 'User successfully added!';

    return { message };
  }
}

export default new AuthService();
