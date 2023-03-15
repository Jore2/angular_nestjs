import { Controller, Get } from '@nestjs/common';
import { PostsService } from '../services/posts.service';

@Controller('api')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/posts')
  async getPosts() {
    const result = await (await this.postsService.getPosts()).data;
    return result;
  }
}
