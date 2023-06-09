import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) {}
  hide = true;
  loginForm = this.fb.group({
    userName: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.maxLength(10), Validators.minLength(6)],
    ],
  });

  ngOnInit(): void {}

  handleFormSubmit() {
    this.loginForm.markAllAsTouched();
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm);
    this.router.navigate(["/dashboard"]);
  }
}
