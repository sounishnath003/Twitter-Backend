import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

export class UserCreateRequestBody {
  username: string;
  password: string;
  name?: string;
  avatar?: string;
  bio?: string;
}

@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param() param): string {
    return `details of username = @${param.username}`;
  }

  @Get('/:userId')
  getUserByUserId(@Param() param): string {
    return `details of user id = ${param.userId}`;
  }

  @Post('/')
  createNewUser(
    @Body() createUserRequest: UserCreateRequestBody,
  ): UserCreateRequestBody {
    return createUserRequest;
  }

  @Put('/:userid/follow')
  followUser(): string {
    return 'you followed user';
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
