import { Component, OnInit } from '@angular/core';
import { IPerson } from '../app.interface';
import { IStudent } from './student.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
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

  studentList: IStudent[] = [
    {
      name: "Harry",
      personalNumber: "9876-6543",
      age: 23,
      photourl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5t_yqt9QITy99LnBY7rPVKO7csWuT7cPBQ&usqp=CAU",
      gender: "",
      isStudent: true,
      cardIssueDate: new Date("July 28, 2017"),
      valid: true,
      fav_courses: {
        maths: true,
        biology: false,
        physics: true,
        geography: true
      }
    },
    {
      name: "Hermione",
      personalNumber: "2345-34567",
      photourl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5t_yqt9QITy99LnBY7rPVKO7csWuT7cPBQ&usqp=CAU",
      gender: "",
      isStudent: true,
      cardIssueDate: new Date("July 28, 1960"),
      valid: true,
      fav_courses: {
        maths: true,
        biology: false,
        physics: true,
        geography: true
      }
    },
    {
      name: "Ron",
      personalNumber: "XXX-X-X",
      age: 23,
      photourl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5t_yqt9QITy99LnBY7rPVKO7csWuT7cPBQ&usqp=CAU",
      gender: "",
      isStudent: true,
      cardIssueDate: new Date("July 28, 2022"),
      fav_courses: {
        maths: true,
        biology: false,
        physics: true,
        geography: true
      }
    },
    {
      name: "Luna",
      personalNumber: "ZZZ-Z-Z-Z",
      age: 23,
      photourl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5t_yqt9QITy99LnBY7rPVKO7csWuT7cPBQ&usqp=CAU",
      gender: "",
      isStudent: true,
      cardIssueDate: new Date("July 28, 2001"),
      valid: true,
      fav_courses: {
        maths: true,
        biology: false,
        physics: true,
        geography: true
      }
    },
    {
      name: "Draco",
      personalNumber: "1234-567-8",
      photourl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5t_yqt9QITy99LnBY7rPVKO7csWuT7cPBQ&usqp=CAU",
      gender: "",
      isStudent: true,
      cardIssueDate: new Date("July 28, 1999"),
      fav_courses: {
        maths: true,
        biology: false,
        physics: true,
        geography: true
      }
    }
  ]

  
  dateToString: string = ""
  studentName!: string
  studentId!: number

  ngOnInit(): void {
    console.log('Main Component Initialized')
    this.student.valid = this.isValid()
    console.log(this.student.valid);
    this.dateToString = this.student.cardIssueDate.toDateString();
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
      return year <= this.cardValidNum
    } 
    return false
  }

  displayStudentInfo() {
    console.log(this.student)
  }

  getStudentById(num: number) {
    if(num <= this.studentList.length) {
      console.log('Here is student: ', this.studentList[num])
    } else {
      alert('Wrong Number')
    }
  }

  getStudent() {
    const foundStudent = this.studentList.find(i=> i.name === this.studentName);
    if(foundStudent) {
      this.student = foundStudent
      console.log(`Student was found with personal number ${foundStudent.personalNumber}`)
    }



  }

  getMessageFromChild(ev: string) {
    console.log(`This message came from child component:: ${ev}`)
  }
}
