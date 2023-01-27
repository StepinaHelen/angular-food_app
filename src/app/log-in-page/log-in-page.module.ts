import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFormModule } from '../shared/modules/input-form/input-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { LogInPageComponent } from './log-in-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from '../shared/modules/button/button.module';

const routes: Routes = [
  {
    path: 'login',
    title: 'Login Form',
    component: LogInPageComponent,
  },
];

@NgModule({
  declarations: [LogInPageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputFormModule,
    RouterModule.forChild(routes),
    ButtonModule,
  ],
})
export class LogInPageModule {}
