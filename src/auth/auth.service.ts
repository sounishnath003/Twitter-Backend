import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PasswordEntity } from './entity/password.entity';
import { PasswordRepository } from './password.repository';

@Injectable()
export class AuthService {
  constructor(private passwordRepo: PasswordRepository) {}

  async createPasswordForNewUser(password: string, userId: string) {
    const existing = await this.passwordRepo.findOne({ where: { userId } });

    if (existing) {
      return new UnauthorizedException(
        'User has already have a password. Cannot save a new password for the same',
      );
    }

    const newPassword = new PasswordEntity();
    newPassword.userId = userId;
    newPassword.password = password;
    return await this.passwordRepo.save(newPassword);
  }
}
