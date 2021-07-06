import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwBaseEntity } from './hastags/commons/base.entity';
import { HastagsController } from './hastags/hastags.controller';
import { PostEntity } from './posts/entity/post.entity';
import { PostsController } from './posts/posts.controller';
import { UserEntity } from './users/entity/user.entity';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      password: '',
      database: 'twitterDB',
      synchronize: true,
      logger: 'advanced-console',
      logging: 'all',
      entities: [TwBaseEntity, UserEntity, PostEntity],
    }),
  ],
  controllers: [
    AppController,
    UsersController,
    PostsController,
    HastagsController,
  ],
  providers: [AppService],
})
export class AppModule {}
