import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthsService } from '../service/auth.service';
import { IFormGoupLogin } from '../shared/types/types';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss'],
})
export class LogInPageComponent implements OnInit {
  loginForm: FormGroup<IFormGoupLogin>;
  isVisiblePassword: boolean = false;

  constructor(private fb: FormBuilder, private authsService: AuthsService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
    });
  }

  login() {
    const { email, password } = this.loginForm.value;
    if (email && password) {
      this.authsService.signIn(email, password);
    }
  }

  showPassword() {
    this.isVisiblePassword = !this.isVisiblePassword;
  }
}
