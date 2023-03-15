import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from 'src/app/services/environment.service';

export interface Post {
  id: number,
  userId: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  configUrl = '';

  constructor(private http: HttpClient, private envService: EnvironmentService) { 
    this.configUrl = this.envService.getValue('apiUrl');
  }

  getPosts() {
    console.log(this.configUrl);
    return this.http.get<Post[]>(`${this.configUrl}/posts`);
  }
}
