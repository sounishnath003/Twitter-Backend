import { Injectable } from '@nestjs/common';
import { PostEntity } from './entity/post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postRepo: PostRepository) {}

  async createPost(
    postPayload: Partial<PostEntity>,
  ): Promise<Partial<PostEntity> & PostEntity> {
    return await this.postRepo.save(postPayload);
  }
}
