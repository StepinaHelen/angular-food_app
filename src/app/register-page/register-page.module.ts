import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page.component';
import { ButtonModule } from '../shared/modules/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFormModule } from '../shared/modules/input-form/input-form.module';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: 'register',
    title: 'Registeration Page',
    component: RegisterPageComponent,
  },
];

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputFormModule,
    RouterModule.forChild(routes),
    ButtonModule,
    MatIconModule,
  ],
})
export class RegisterPageModule {}
