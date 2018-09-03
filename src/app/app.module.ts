import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleDetailComponent } from './components/article/article-detail/article-detail.component';
import { ArticleListComponent } from './components/article/article-list/article-list.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { CommentDetailComponent } from './components/comment/comment-detail/comment-detail.component';
import { CommentListComponent } from './components/comment/comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailComponent,
    ArticleListComponent,
    UserListComponent,
    UserDetailComponent,
    CommentDetailComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
