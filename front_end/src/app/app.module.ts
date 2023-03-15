import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsModule } from './modules/posts/posts.module';
import { PhotosModule } from './modules/photos/photos.module';
import { PostsPageComponent } from './pages/posts/posts.component';
import { PhotosPageComponent } from './pages/photos/photos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ENVIRONMENT } from './services/environment.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideNavComponent,
    HomeComponent,
    PostsPageComponent,
    PhotosPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    PostsModule,
    PhotosModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [{provide: ENVIRONMENT, useValue: environment}],
  bootstrap: [AppComponent]
})
export class AppModule { }
