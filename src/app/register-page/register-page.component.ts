import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, ErrorMessageComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required], [this.usernameIsUnique]],
      email: [
        '',
        [Validators.required, Validators.email],
        [this.emailIsUnique],
      ],
      passwords: this.fb.group(
        {
          password: [
            '',
            [
              Validators.required,
              Validators.minLength(8),
              this.passwordValidator,
            ],
          ],
          confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
        },
        { validators: this.equalValues }
      ),
    });
  }

  passwordValidator(control: AbstractControl) {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(control.value) ? null : { weakPassword: true };
  }

  usernameIsUnique(control: AbstractControl) {
    if (control.value !== 'claudia') {
      return of(null);
    }

    return of({ usernameNotUnique: true });
  }

  emailIsUnique(control: AbstractControl) {
    if (control.value !== 'test@example.com') {
      return of(null);
    }

    return of({ emailNotUnique: true });
  }

  equalValues(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      return null;
    }

    return { passwordsNotEqual: true };
  }
  getFieldValidation(field: string): boolean {
    const control = this.registerForm.get(field);
    return control?.touched && control?.dirty && control?.invalid
      ? true
      : false;
  }
  get isFormValid(): boolean {
    return this.registerForm.valid;
  }
  loginPage() {
    this.router.navigate(['/login']);
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      console.log('INVALID FORM');
      console.log(this.registerForm);
      return;
    }
    console.log('Valid');
    console.log(this.registerForm);
  }
}
