import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from '../services/posts.service';
import { PhotosService } from '../services/photos.sevice';

describe('PostsController', () => {
  let postsController: PostsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService, PhotosService],
    }).compile();

    postsController = app.get<PostsController>(PostsController);
  });

  describe('root', () => {
    it('should return "Hello Posts!"', () => {
      expect(postsController.getPosts()).toBe('Hello Posts!');
    });
  });
});
