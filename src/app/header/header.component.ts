import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavMenu } from './nav.interface';
import { StorageService } from '../core/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends StorageService implements OnInit {
  
  mainLogo : string = "https://d1fdloi71mui9q.cloudfront.net/pUp0ks3yQ8Ow5OhyG8Zj_5R3P7cnL8k7oItiJ"
  
  navigationLinks: NavMenu[] = [
    {
      path: './',
      name: 'Main',
      children: [
        {
          path: 'resume-builder',
          name: 'Resume Builder'
        },
        {
          path: 'todo',
          name: 'Todo App'
        },
        {
          path: 'directives',
          name: 'Directives'
    
        },
        {
          path: 'pipes',
          name: 'Pipes'
        }

      ]
    },
    {
      path: 'student-profile',
      name: 'Student Profile'
    },
    {
      path: 'posts',
      name: 'News Feed'
    },
  ]

  constructor(private _router: Router) { super(); }

  ngOnInit(): void {}

  redirectToMain() {
    this._router.navigate(['/main'])
  }
  logOut() {
    this.clearStorage();
    this._router.navigate(['/'])

  }
}
