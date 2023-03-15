import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostComponent
  ],
  providers: [
    PostService
  ]
})
export class PostsModule { }
