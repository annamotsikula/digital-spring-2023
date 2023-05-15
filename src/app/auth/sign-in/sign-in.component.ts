import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  authForm: FormGroup

  constructor(private _router: Router, private _apiService: AuthService) {
    this.authForm = new FormGroup({
      username: new FormControl('kminchelle', [Validators.required]),
      pwd: new FormControl('0lelplR', [Validators.required]),
      rememberMe: new FormControl(false)
    })

  }

  get form() {
    return this.authForm as FormGroup
  }
  get userNameField() {
    return this.authForm.get('username') as FormControl
  }
  submit() {
    console.log(this.authForm.value)
    if(this.authForm.valid) {
      // const authData = {
      //   username: this.authForm.value.username,
      //   password: this.authForm.value.pwd
      // }
      this._apiService.signIn(this.authForm.value).subscribe(data => {
        console.log(data);
        this._router.navigate(['/main'])
      })
    }

  }
}
