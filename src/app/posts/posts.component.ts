import { Component, OnDestroy, OnInit } from '@angular/core';
import { APIService } from '../core/api.service';
import { Post } from './entity/post.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit , OnDestroy {
  posts: Post[] = []
  newPostForm: FormGroup;
  showForm: boolean;
  searchKey: string = ''
  pagination: number[] = [];
  currentPage: number = 1
  itemsAmountPerPage: number
  constructor(public _postService: APIService, private _formBuilder: FormBuilder, private _router: Router) {
    this.itemsAmountPerPage = 10
    this.showForm = false
    this.newPostForm = this._formBuilder.group({
      title: this._formBuilder.control('', [Validators.required]) ,
      content: this._formBuilder.control('', [Validators.required])
    })

  }
ngOnDestroy(): void {
  console.log('Posts component has destroyed')
}
  ngOnInit(): void {
    this._postService.currentPage$.asObservable().pipe(
      filter(number => number !== 0)
    )
    .subscribe(d =>{ this.currentPage = d; this.getPosts()})

    this._postService.pagination$.asObservable().pipe(
      filter(data => data !== null),
      map(data => data as number) 
    )
    .subscribe(result =>{
      // 100 / 
      const pageAmount = Math.ceil(result / this.itemsAmountPerPage)
      this.pagination = this.createPaginationArray(pageAmount);
    })
  }

  getPosts() {
    this._postService.getPaginatedPosts(this.itemsAmountPerPage, this.currentPage).pipe()
    .subscribe(result => {
      this.posts = result;

    })
  }
  addNewPost(newPost: Post) {
    this._postService.addPost(newPost).subscribe(result=> {
      this.posts.unshift(result)
    })
  }

  deletePostById(id: any) {
    
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
  searchByKey() {
    console.log('Search Key :  ', this.searchKey)
    this.posts = this.posts.filter(item => item.title.includes(this.searchKey))
  }

  createPaginationArray = (length: number): number[] => Array.from({ length }, (_, i) => i + 1)

  updatePage(pageNumber: number) {
    console.log('Current Page is , ', pageNumber)
    this.currentPage = pageNumber;
    this._postService.currentPage$.next(pageNumber)

    this.getPosts()

  }
  changeAmountView(ev: number) {
    this.itemsAmountPerPage = ev
    this.getPosts()
  }

  goToDetails() {
    this._router.navigate([])
  }

  increment() {
    this._postService.increase()
  }
}
