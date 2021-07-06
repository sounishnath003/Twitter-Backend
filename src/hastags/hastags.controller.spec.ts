import { Test, TestingModule } from '@nestjs/testing';
import { HastagsController } from './hastags.controller';

describe('HastagsController', () => {
  let controller: HastagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HastagsController],
    }).compile();

    controller = module.get<HastagsController>(HastagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
