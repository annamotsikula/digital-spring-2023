import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IStudent } from '../../main/student.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-config',
  templateUrl: './student-config.component.html',
  styleUrls: ['./student-config.component.scss']
})
export class StudentConfigComponent implements OnInit, OnChanges {
  @Input() student!: IStudent
  @Input() validYears: number = 0

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

ngOnChanges(changes: SimpleChanges) {
  // console.log(changes)
}
  ngOnInit(): void {
    this.student.valid = this.isValid();
    this.dateToString = this.student.cardIssueDate.toDateString();
  }
  selectGender(ev: Event) {
    this.student.gender = (ev.target as HTMLSelectElement).value
  }

  isValid(): boolean {
    const today = new Date();
    if(this.student) {
      const year =  today.getFullYear() - this.student.cardIssueDate.getFullYear();
      return year <= this.validYears
    } 
    return false
  }

  displayStudentInfo() {
    console.log(this.student)
  }

  getStudentById(num: number) {
    if(num <= this.studentList.length) {
      const foundStudent = this.studentList[num]
      // this.student.name = foundStudent.name
      // this.student.personalNumber = foundStudent.personalNumber
      Object.assign(this.student, {
        ...foundStudent
      })
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

  onSubmit(form: NgForm) {
    console.log(form)
    if(form.valid) {
      const studentFormValue = form.value
      this.student.name = studentFormValue.name
      this.student.cardIssueDate = new Date(studentFormValue.cardDate)
      this.student.personalNumber = studentFormValue.personalNumber
      this.student.gender = studentFormValue.gender
      this.student.cardColor = studentFormValue.cardColor

    } else {
      console.log('This form is invalid')
    }


  }
}
