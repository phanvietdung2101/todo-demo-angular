import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control('',[Validators.required, Validators.email]),
      password: this.fb.control('',[Validators.required, Validators.minLength(6)])
    })
  }
  
  onSubmit(){
    console.log(this.loginForm)
  }

}
