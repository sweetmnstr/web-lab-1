import { NotFoundError } from '../../shared/custom-errors';
import User, { IUser } from '../models/user.model';
import { BaseRepository } from './base.repository';

class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(User);
  }

  public async findByIdOrThrow(id: string): Promise<IUser> {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    return user;
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    return this.findOne({ email });
  }

  public async findByEmailOrThrow(email: string): Promise<IUser | null> {
    const user = await this.findByEmail(email);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    return user;
  }
}

export default new UserRepository();
