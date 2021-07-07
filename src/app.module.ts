import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwBaseEntity } from './commons/base.entity';
import { HastagsController } from './hastags/hastags.controller';
import { PostEntity } from './posts/entity/post.entity';
import { PostsController } from './posts/posts.controller';
import { UserEntity } from './users/entity/user.entity';
import { UsersModule } from './users/users.module';

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
    UsersModule,
  ],
  controllers: [AppController, PostsController, HastagsController],
  providers: [AppService],
})
export class AppModule {}
