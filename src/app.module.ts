import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HastagsController } from './hastags/hastags.controller';
import { PostsController } from './posts/posts.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    PostsController,
    HastagsController,
  ],
  providers: [AppService],
})
export class AppModule {}
