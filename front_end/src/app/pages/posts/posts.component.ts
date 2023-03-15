import { Component } from '@angular/core';

import * as _ from 'underscore';

import { Post, PostService } from 'src/app/modules/posts/services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsPageComponent {
  posts: Post[]
  limitPhotos: boolean

  constructor(
    private postService: PostService,
    private activatedroute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      this.limitPhotos = data.hasOwnProperty('postsPage') ? false : true;
      this.postService.getPosts().subscribe((resp) => {
        if(this.limitPhotos) {
          this.posts = _.sample(resp, 10);
        } else {
          this.posts = resp;
        }
      });
    })
  }
}
