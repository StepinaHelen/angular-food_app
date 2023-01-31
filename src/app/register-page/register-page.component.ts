import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IFormGoupRegister } from '../shared/types/types';
import { Subscription } from 'rxjs';
import { CustomValidators } from '../shared/validators/custom-validators';
import { AuthsService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit, OnDestroy {
  registerForm: FormGroup<IFormGoupRegister>;
  passwordSubscription: Subscription;
  isVisiblePassword: boolean = false;
  isVisibleConfirmedPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authsService: AuthsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
      confirmPassword: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          CustomValidators.compareWith('password'),
        ],
      }),
    });

    this.passwordSubscription =
      this.registerForm.controls.password.valueChanges.subscribe(() => {
        this.registerForm.controls.confirmPassword.updateValueAndValidity();
      });
  }

  register() {
    const { email, password } = this.registerForm.value;
    if (email && password) {
      this.authsService.signUp(email, password);
    }
  }

  showPassword() {
    this.isVisiblePassword = !this.isVisiblePassword;
  }

  showConfirnedPassword() {
    this.isVisibleConfirmedPassword = !this.isVisibleConfirmedPassword;
  }

  ngOnDestroy() {
    this.passwordSubscription.unsubscribe();
  }
}
