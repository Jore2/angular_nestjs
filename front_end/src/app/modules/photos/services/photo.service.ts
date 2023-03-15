import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from 'src/app/services/environment.service';

export interface Photo {
  id: number,
  albumId: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  configUrl = '';

  constructor(private http: HttpClient, private envService: EnvironmentService) {
    this.configUrl = this.envService.getValue('apiUrl');
   }

  getPhotos() {
    return this.http.get<Photo[]>(`${this.configUrl}/photos`);
  }
}
