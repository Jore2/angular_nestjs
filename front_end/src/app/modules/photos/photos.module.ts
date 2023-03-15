import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoService } from './services/photo.service';


@NgModule({
  declarations: [
    PhotoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhotoComponent
  ],
  providers: [
    PhotoService
  ]
})
export class PhotosModule { }
