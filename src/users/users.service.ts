import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepository) {}

  public async getUserByUsername(username: string): Promise<UserEntity> {
    return await this.userRepo.findByUsername(username);
  }

  /**
   * getUserByUserId
   */
  public async getUserByUserId(userId: string): Promise<UserEntity> {
    return await this.userRepo.findUserByUserId(userId);
  }

  /**
   * createUser
   */
  public async createUser(user: Partial<UserEntity>) {
    return this.userRepo.save(user);
  }
}