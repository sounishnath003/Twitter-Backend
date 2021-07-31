import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PasswordEntity } from './auth/entity/password.entity';
import { TwBaseEntity } from './commons/base.entity';
import { HastagsModule } from './hastags/hastags.module';
import { PostEntity } from './posts/entity/post.entity';
import { PostsModule } from './posts/posts.module';
import { UserEntity } from './users/entity/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'twiDB',
      password: 'twiDB@123',
      database: 'twitterDB',
      synchronize: true,
      logger: 'advanced-console',
      logging: 'all',
      entities: [TwBaseEntity, UserEntity, PostEntity, PasswordEntity],
    }),
    UsersModule,
    PostsModule,
    HastagsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
