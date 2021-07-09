import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PasswordEntity } from 'src/auth/entity/password.entity';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepo: UserRepository,
    @InjectRepository(PasswordEntity)
    private readonly passwordRepo: Repository<PasswordEntity>,
  ) {}

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
  public async createUser(
    user: Partial<UserEntity>,
    passwd: string,
  ): Promise<Partial<UserEntity> & UserEntity> {
    const newUser = await this.userRepo.save(user);

    const password = new PasswordEntity();
    password.user = newUser;
    password.password = passwd;
    await this.passwordRepo.save(password);

    return newUser;
  }

  async updateUser(userid: string, updateUserRequest: Partial<UserEntity>) {
    let existingUser = await this.getUserByUserId(userid);
    if (!existingUser) {
      return null;
    }

    existingUser = { ...existingUser, ...updateUserRequest };

    return await this.userRepo.save(existingUser);
  }
}
