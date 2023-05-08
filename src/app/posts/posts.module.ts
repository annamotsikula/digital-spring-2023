import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { TruncateStringPipe } from '../helpers/pipes/truncate.pipe';
import { PostCardComponent } from './post-card/post-card.component';
import { PostsComponent } from './posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent,
    PostCardComponent,
    TruncateStringPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
