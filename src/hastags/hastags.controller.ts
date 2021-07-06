import { Controller, Get, Param } from '@nestjs/common';

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
