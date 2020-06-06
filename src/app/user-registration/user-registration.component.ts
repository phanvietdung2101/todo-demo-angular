import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

function comparePassword(c: AbstractControl){
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: ['',[Validators.required, Validators.minLength(6)]],
        confirmPassword: ['',[Validators.required, Validators.minLength(6)]]
      }, {validators: comparePassword}),
      country: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]]
    })

    
    this.registerForm.patchValue({
      email: 'info@example.com',
    });
  }

  onSubmit() {
    console.log(this.registerForm);
  }
}
