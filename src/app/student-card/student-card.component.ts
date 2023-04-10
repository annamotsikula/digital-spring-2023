import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICourses, IStudent } from '../main/student.interface';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit, OnChanges {
  @Input() student : IStudent = {
    name: "Lucy",
    personalNumber: "1111111111-111",
    age: 45,
    photourl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5t_yqt9QITy99LnBY7rPVKO7csWuT7cPBQ&usqp=CAU",
    gender: "",
    isStudent: false,
    cardIssueDate: new Date("July 28, 1999"),
    valid: true,
    fav_courses: {
      maths: true,
      biology: false,
      physics: true,
      geography: true
    }
  }
  dateToString: string = ""
  messageToSend: string = ""
  @Output() emitMessage: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit() {
    // console.log('Student Card Initialized')
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes)

  }
  @Input() favCourses: ICourses = {
      maths: false,
      biology: false,
      physics: false,
      geography: false
  }
  

  sendMessage() {

    console.log('Sending Message to Parent Component')
    this.emitMessage.emit(this.messageToSend)

  }

}
