import { Module } from '@nestjs/common';
import { HastagsController } from './hastags.controller';

@Module({
  controllers: [HastagsController],
})
export class HastagsModule {}
