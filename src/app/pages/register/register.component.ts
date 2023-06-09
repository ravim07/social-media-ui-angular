import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { confirmedValidator } from '../../helper/password-matching';
import { passwordRegex } from '../../constants/regex';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  hide: boolean = true;
  confirmPassHide: boolean = true;
  registerForm = this.fb.group(
    {
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(6),
        ],
      ],
    },
    {
      validators: confirmedValidator('password', 'confirmPassword'),
    }
  );

  ngOnInit(): void {}

  handleFormSubmit() {
    this.registerForm.markAllAsTouched();
    if (!this.registerForm.valid) {
      return;
    }
    
    console.log(this.registerForm);
  }
}
