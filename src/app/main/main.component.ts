import { Component } from '@angular/core';
import { IPerson } from '../app.interface';
import { IStudent } from './student.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title = 'Angular Course';
  number: number = 45
  
  mySister: IPerson = {
    fistName: 'Kate',
    lastName: 'Smith'
  }  
  inputValue: string = "Angular Lecture N3"
  name: string = ""
  gender: string = "female"
  isStudent: boolean = false
  imgSrc = "https://d1fdloi71mui9q.cloudfront.net/pUp0ks3yQ8Ow5OhyG8Zj_5R3P7cnL8k7oItiJ"

  cardValidNum : number = 4

  student : IStudent = {
    name: "",
    personalNumber: "",
    age: 23,
    photourl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5t_yqt9QITy99LnBY7rPVKO7csWuT7cPBQ&usqp=CAU",
    gender: "",
    isStudent: true,
    cardIssueDate: new Date("July 28, 2020"),
    valid: true
  }

  increment() {
    console.log('You have clicked on this button')
    this.number = this.number + 10
  }
  showInputValue(ev: Event) {
    const event = ev.target as HTMLInputElement
    this.inputValue = event.value
  }
  selectGender(ev: Event) {
    this.student.gender = (ev.target as HTMLSelectElement).value
  }

  isValid(): boolean {
    const today = new Date();
    if(this.student) {
      const year =  today.getFullYear() - this.student.cardIssueDate.getFullYear();
      console.log(year)
      return year === this.cardValidNum
    } 
    return false
  }

  displayStudentInfo() {
    console.log(this.student)
  }
}
