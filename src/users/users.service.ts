import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepository) {}

  public async getUserByUsername(username: string): Promise<UserEntity> {
    return await this.userRepo.findByUsername(username);
  }
}
