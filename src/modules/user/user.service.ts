import userRepository from '../db/repositories/user.repository';
import { SaveEmailBodyInputDTO } from './dtos/input';
import { SaveEmailOutputDTO } from './dtos/output';

class UserService {
  public async saveEmail(
    emailDto: SaveEmailBodyInputDTO,
  ): Promise<SaveEmailOutputDTO> {
    await userRepository.findByEmailAndThrow(emailDto.email);
    await userRepository.create(emailDto);

    const message = 'User successfully added!';

    return { message };
  }
}

export default new UserService();
