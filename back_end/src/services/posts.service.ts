import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { Post } from 'src/dto/post.dto';

@Injectable()
export class PostsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  public getPosts(): Promise<AxiosResponse<Post[]>> {
    const url = `${this.config.get('BASE_PATH')}/posts`;
    return firstValueFrom(this.httpService.get(url));
  }
}
