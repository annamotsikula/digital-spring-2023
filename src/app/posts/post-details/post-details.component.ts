import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/core/api.service';
import { Post } from '../entity/post.interface';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit{
  postId!: number
  postData!: Post
  
  postDetails$!: Observable<Post>


  constructor(private _route: ActivatedRoute, private _service: APIService) {
    // const currentRouteSnapshot = this._route.snapshot
    // this.postId = Number(currentRouteSnapshot.paramMap.get('id'));
    // console.log(this._route)
    this.postData = this._route.snapshot.data['postDetailData']
    


  }

  ngOnInit(): void {
    // this.postDetails$ = this.getPost().pipe(
    //   tap(item => console.log(item.body.at(2)))
    // )
  }

  getPost(): Observable<Post> {
    return this._service.getSinglePost(this.postId)
    // .subscribe(result => this.postData = result)

  }
  

}
