import { Component } from '@angular/core';
import { IPerson } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tutor';
  number: number = 15
  
  mySister: IPerson = {
    fistName: 'Kate',
    lastName: 'Smith'
  }  

  increment() {
    console.log('You have clicked on this button')
    this.number = this.number + 10
  }
  
  
}


