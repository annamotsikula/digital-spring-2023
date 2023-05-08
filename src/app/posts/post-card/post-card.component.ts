import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../entity/post.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() postDetails: Post
  @Output() postId: EventEmitter<number> = new EventEmitter<number>()


  constructor() {
    this.postDetails = {
      id: 0,
      userId: 0,
      title: '',
      body: ''
    }
  }
  ngOnInit() {
  }
  sendPostToDelete(id: number) {
    this.postId.emit(id)
  }


}
