import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  mainLogo : string = "https://d1fdloi71mui9q.cloudfront.net/pUp0ks3yQ8Ow5OhyG8Zj_5R3P7cnL8k7oItiJ"

  constructor(private _router: Router) {}

  ngOnInit(): void {
  }

  redirectToMain() {
    this._router.navigate(['/'])
  }
}
