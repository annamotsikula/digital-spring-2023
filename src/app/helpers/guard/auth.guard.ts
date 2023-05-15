import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private _auth: AuthService) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       console.log(route)
//     return this._auth.isAuthorized();
//   }
  
// }


export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log(authService.isAuthorized())
  if(authService.isAuthorized()) {
    return true
  }
  return router.parseUrl('/')
}

export const isAuthorized = () => {

  const authService = inject(AuthService);
  const router = inject(Router);
  if(authService.userSaved()) {
    console.log(authService.userSaved())
    return router.parseUrl('main')
  }
    return true
  

}