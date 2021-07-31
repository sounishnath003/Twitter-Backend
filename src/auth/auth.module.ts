import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PasswordRepository } from './password.repository';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([PasswordRepository])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
