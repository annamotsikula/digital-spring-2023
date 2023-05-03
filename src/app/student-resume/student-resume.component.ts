import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { countries } from './entity/country-list';
import { ageValidator } from './validators/age-validator';

@Component({
  selector: 'app-student-resume',
  templateUrl: './student-resume.component.html',
  styleUrls: ['./student-resume.component.scss']
})
export class StudentResumeComponent implements OnInit {
  resumeForm: FormGroup
  countryList: string[]
  constructor() {
    this.resumeForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      age: new FormControl('', [Validators.required, ageValidator]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormGroup({
        city: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        street: new FormControl(''),
        additionalInfo: new FormGroup({
          street1: new FormControl(''),
          street2: new FormControl('')
        })
      }),
      skills: new FormArray([])
    })
    this.countryList = countries
  }

  ngOnInit(): void {
    console.log(this.resumeForm)
    console.log(this.skillsArray)
  }
  submit() {
    console.log(this.resumeForm)
  }
  addSkills() {
    const newSkill = new FormGroup({
      lang: new FormControl(''),
      level: new FormControl('')
    });
    // const f_arr = this.resumeForm.controls['skills'] as FormArray
    // f_arr.push(newSkill)
    this.skillsArray.push(newSkill)
  }

  get skillsArray() {
    // return (<FormArray>this.resumeForm.controls['skills'])
    return this.resumeForm.controls['skills'] as FormArray
  }

  get ageControl() {
    return this.resumeForm.controls['age'] as FormControl
  }
  deleteSkill(index: number) {
    this.skillsArray.removeAt(index)
  }

  changeField() {
    this.resumeForm.controls['address'].setValue({
        city: '',
        country: 'Georgia',
        street: 'Chavchavadze Ave',
        additionalInfo:{
          street1: 'sample 1',
          street2: 'sample 2'
        }
    })
    this.resumeForm.controls['lastName'].patchValue('Doe')
    console.log(this.resumeForm)

  }

}
