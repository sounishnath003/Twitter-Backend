import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export class UserCreateRequestBody {
  username: string;
  password: string;
  name?: string;
  avatar?: string;
  bio?: string;
}

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param('username') username: string): string {
    return `details of username = @${username}`;
  }

  @Get('/:userId')
  getUserByUserId(@Param('userId') userId: string): string {
    return `details of user id = ${userId}`;
  }

  @Post('/')
  createNewUser(
    @Body() createUserRequest: UserCreateRequestBody,
  ): UserCreateRequestBody {
    return createUserRequest;
  }

  @Put('/:userid/follow')
  followUser(@Param('userid') userid: string): string {
    return `you followed user = ${userid}`;
  }

  @Delete('/:userid/follow')
  unfollowUser(): string {
    return 'you unfollowed user';
  }

  @Get('/:userid/followers')
  getFollowersOfUser(): string {
    return 'get followers of user';
  }

  @Put('/:userid/followees')
  getFolloweesOfUser(): string {
    return `get followees of given user`;
  }
}
