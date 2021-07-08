import {
  Body,
  Controller,
  Delete,
  Get,
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
import { PostEntity } from './entity/post.entity';
import { PostsService } from './posts.service';

export class PostCreateRequestBody {
  @ApiProperty() text: string;
  @ApiProperty() images?: string[];
  @ApiPropertyOptional() authorId: string;
  @ApiPropertyOptional() hashtags?: string[];
  @ApiPropertyOptional() mentions?: { name: string; id: string }[];
  @ApiPropertyOptional() originalPost?: PostEntity;
}

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('/')
  getAllPosts(): string {
    // TODO
    return 'get all posts';
  }

  @Get('/:postid')
  getPostDetails(@Param('postid') postid: string): string {
    // TODO
    return `details of postid = ${postid}`;
  }

  @ApiBody({ type: PostCreateRequestBody })
  @Post('/create')
  async createNewPost(
    @Body() postPayload: PostCreateRequestBody,
  ): Promise<Partial<PostEntity> & PostEntity> {
    // TODO
    return await this.postService.createPost(postPayload);
  }

  @Delete('/:postid')
  deletePost(@Param('postid') postid: string): string {
    // TODO
    return `delete postid = ${postid}`;
  }

  @Put('/:postid/like')
  likePost(@Param('postid') postid: string): string {
    return `liked post ${postid}`;
  }

  @Delete('/:postid/like')
  unlikePost(@Param('postid') postid: string): string {
    return `unliked post ${postid}`;
  }
}
