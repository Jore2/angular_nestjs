import { Controller, Get } from '@nestjs/common';
import { PhotosService } from '../services/photos.sevice';

@Controller('api')
export class PhotosController {
  constructor(private readonly photoService: PhotosService) {}

  @Get('/photos')
  async getPhotos() {
    const result = await (await this.photoService.getPhotos()).data;
    return result;
  }
}
