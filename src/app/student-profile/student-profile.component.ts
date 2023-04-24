import { Component } from '@angular/core';
import { IStudent } from '../main/student.interface';
import { StorageService } from '../core/storage.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent extends StorageService{
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
  constructor() {
    super();
  

  }
  
  getMessageFromChild(ev: string) {
    console.log(`This message came from child component:: ${ev}`)
    this.set('msg', ev)
  }
}
