import { Injectable, inject } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { APIService } from 'src/app/core/api.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpresolverResolver implements Resolve<boolean> {

//   constructor(private _apiService: APIService) {}
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
//     const postId = Number(route.paramMap.get('id'))
//     return this._apiService.getSinglePost(postId)
//   }
// }


export const postDetailResolver = (route: ActivatedRouteSnapshot) => {
  const apiService = inject(APIService)
  const postId = Number(route.paramMap.get('id'))
  return apiService.getSinglePost(postId)

}
