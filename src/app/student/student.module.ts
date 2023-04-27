import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentConfigComponent } from './student-config/student-config.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentProfileComponent,
    StudentConfigComponent,
    StudentCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
