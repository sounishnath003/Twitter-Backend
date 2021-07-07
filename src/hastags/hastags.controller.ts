import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('hashtags')
@Controller('hastags')
export class HastagsController {
  @Get('/')
  getTopMostHastags(): string {
    return `Lists of all top most hastags`;
  }

  @Get('/:tag/posts')
  getPostForHashTags(@Param() param): string {
    return `Lists of posts with #${param.tag} associated!`;
  }
}
