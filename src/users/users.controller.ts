import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiProperty,
  ApiPropertyOptional,
  ApiTags,
} from '@nestjs/swagger';
import { UserEntity } from './entity/user.entity';
import { UsersService } from './users.service';

export class UserCreateRequestBody {
  @ApiProperty() username: string;
  @ApiProperty() password: string;
  @ApiPropertyOptional() name?: string;
  @ApiPropertyOptional() avatar?: string;
  @ApiPropertyOptional() bio?: string;
}

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/@:username')
  async getUserByUsername(@Param('username') username: string) {
    const user = await this.userService.getUserByUsername(username);
    if (!user)
      return new NotFoundException(`User not found with username ${username}!`);
    return user;
  }

  @Get('/:userId')
  async getUserByUserId(
    @Param('userId') userId: string,
  ): Promise<NotFoundException | UserEntity> {
    const user = await this.userService.getUserByUserId(userId);
    if (!user) {
      return new NotFoundException(`User not found with id ${userId}`);
    }
    return user;
  }

  @ApiBody({ type: UserCreateRequestBody })
  @Post('/create')
  async createNewUser(
    @Body() createUserRequest: UserCreateRequestBody,
  ): Promise<ConflictException | (Partial<UserEntity> & UserEntity)> {
    const isUserExists = await this.userService.getUserByUsername(
      createUserRequest.username,
    );
    if (isUserExists)
      return new ConflictException(
        `username ${createUserRequest.username} has been already registered!!`,
      );
    return await this.userService.createUser(createUserRequest);
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
