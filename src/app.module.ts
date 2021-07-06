import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HastagsController } from './hastags/hastags.controller';
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
      entities: [UserEntity],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
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
