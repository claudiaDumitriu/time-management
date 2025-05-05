import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ErrorMessageComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      usernameOrEmail: [
        '',
        [Validators.required, this.usernameOrEmailValidator],
      ],
      password: ['', [Validators.required, this.passwordValidator]],
    });
  }

  get isFormValid(): boolean {
    return this.loginForm.valid;
  }

  usernameOrEmailValidator(control: AbstractControl) {
    const value = control.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const usernameRegex = /^[a-zA-Z0-9_.-]{3,}$/;

    if (emailRegex.test(value) || usernameRegex.test(value)) {
      return null;
    }
    return { invalidUsernameOrEmail: true };
  }

  passwordValidator(control: AbstractControl) {
    const value = control.value;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&/#^()_+\-=])[A-Za-z\d@$!%*?&/#^()_+\-=]{8,}$/;
    if (passwordRegex.test(value)) {
      return null;
    }
    return { invalidPassword: true };
  }

  onSubmit() {
    if (!this.isFormValid) return;

    const { usernameOrEmail, password } = this.loginForm.value;

    this.authService.login(usernameOrEmail, password).subscribe((user) => {
      console.log(user);
      if (user) {
        this.loginError = '';
        this.router.navigate(['/app/task-manager']);
      } else {
        this.loginError = 'Invalid username or password.';
      }
    });
  }

  registerPage() {
    this.router.navigate(['/register']);
  }
  forgotPasswordPage() {
    this.router.navigate(['/forgot-password']);
  }
}
