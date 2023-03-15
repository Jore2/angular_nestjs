import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';

import { Photo, PhotoService } from 'src/app/modules/photos/services/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosPageComponent {
  photos: Photo[]
  limitPhotos: boolean

  constructor(
    private photoService: PhotoService, 
    private activatedroute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      this.limitPhotos = data.hasOwnProperty('photosPage') ? false : true;
      this.photoService.getPhotos().subscribe((photos) => {
        if(this.limitPhotos) {
          this.photos = _.sample(photos, 10);
        } else {
          this.photos = photos;
        }
      });
    })
  }
}
