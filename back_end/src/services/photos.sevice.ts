import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { Photo } from 'src/dto/photo.dto';

@Injectable()
export class PhotosService {
  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  public getPhotos(): Promise<AxiosResponse<Photo[]>> {
    const url = `${this.config.get('BASE_PATH')}/photos`;

    return firstValueFrom(this.httpService.get(url));
  }
}
