import { Component, OnInit } from '@angular/core';
import { APIService } from '../core/api.service';
import { Post } from './entity/post.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = []
  newPostForm: FormGroup;
  showForm: boolean
  constructor(private _postService: APIService, private _formBuilder: FormBuilder) {
    this.showForm = false
    this.newPostForm = this._formBuilder.group({
      title: this._formBuilder.control('', [Validators.required]) ,
      content: this._formBuilder.control('', [Validators.required])
    })
  
  }

  ngOnInit(): void {
    this._postService.getPosts().subscribe(data => {
      this.posts = data
    })
  }

  addNewPost(newPost: Post) {
    this._postService.addPost(newPost).subscribe(result=> {
      this.posts.unshift(result)
    })
  }

  deletePostById(id: number | undefined) {
    if(id !== undefined) {
      this._postService.deletePost(id).subscribe(_ => {
        const postIndex = this.posts.findIndex(singlePost => singlePost.id === id);
        if(postIndex > -1) {
          this.posts.splice(postIndex, 1)
          alert('Post number' + id + ' has been successfully deleted.');
        }
      })
    }
  }
  submitAddNewPost() {
    if(this.newPostForm.valid) {
      const data = {
        title: this.newPostForm.value.title,
        body: this.newPostForm.value.content,
        userId: 1
      }
      this.addNewPost(data);
      this.newPostForm.reset();
      this.showForm = false
    } else {
      alert('Please fill all the gaps')
    }
  }
  get title() {
    return this.newPostForm.get('title') as FormControl
  }
  get content() {
    return this.newPostForm.get('content') as FormControl
  }
}
