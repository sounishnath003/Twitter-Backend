import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

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
  constructor(private userService: UsersService) {}

  @Get('/@:username')
  async getUserByUsername(@Param('username') username: string) {
    const user = await this.userService.getUserByUsername(username);
    if (!user) return new NotFoundException('User not found!');
    return user;
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
