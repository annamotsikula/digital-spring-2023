import { Component, OnInit } from '@angular/core';
import { IStudent } from './student.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit{
  title = 'Angular Course';
 
  cardValidNum : number = 4

  student : IStudent = {
    name: "Lela",
    personalNumber: "2222-222",
    age: 35,
    photourl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5t_yqt9QITy99LnBY7rPVKO7csWuT7cPBQ&usqp=CAU",
    gender: "",
    isStudent: false,
    cardIssueDate: new Date("July 28, 2008"),
    valid: true,
    fav_courses: {
      maths: true,
      biology: false,
      physics: true,
      geography: true
    }
  }

 

  ngOnInit(): void {
    
  }


  getMessageFromChild(ev: string) {
    console.log(`This message came from child component:: ${ev}`)
  }
}
