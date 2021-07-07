import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async findByUsername(username: string): Promise<UserEntity> {
    return await this.findOne({ where: { username } });
  }

  async findUserByUserId(userId: string) {
    return await this.findOne({ where: { id: userId } });
  }
}
