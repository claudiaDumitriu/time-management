import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ErrorMessageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, this.usernameOrEmailValidator]],
      password: ['', [Validators.required]],
    });
  }

  usernameOrEmailValidator(control: AbstractControl) {
    const value = control.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_.-]{3,}$/;

    if (emailRegex.test(value) || usernameRegex.test(value)) {
      console.log(value);
      return null;
    }
    return { invalidUsernameOrEmail: true }; // Invalid
  }
  get isFormValid(): boolean {
    return this.loginForm.valid;
  }

  registerPage() {
    this.router.navigate(['/register']);
  }
  taskManagerPage() {
    this.router.navigate(['/task-manager']);
  }
}
