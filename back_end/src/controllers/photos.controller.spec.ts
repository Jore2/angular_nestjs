import { Test, TestingModule } from '@nestjs/testing';
import { PhotosController } from './photos.controller';
import { PhotosService } from '../services/photos.sevice';

describe('PostsController', () => {
  let postsController: PhotosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PhotosController],
      providers: [PhotosService],
    }).compile();

    postsController = app.get<PhotosController>(PhotosController);
  });

  describe('root', () => {
    it('should return "Hello Photos!"', () => {
      expect(postsController.getPhotos()).toBe('Hello Photos!');
    });
  });
});
