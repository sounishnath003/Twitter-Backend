import { Injectable } from '@nestjs/common';
import { PasswordRepository } from './password.repository';

@Injectable()
export class AuthService {
  constructor(private passwordRepo: PasswordRepository) {}
}
