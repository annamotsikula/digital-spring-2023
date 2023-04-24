import { Component, OnInit } from '@angular/core';
import { IStudent } from './student.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit{
  title = 'Angular Course';
 
  
 

  ngOnInit(): void {
    
  }


}
