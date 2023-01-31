import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page.component';
import { ButtonModule } from '../shared/modules/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFormModule } from '../shared/modules/input-form/input-form.module';
import { RouterModule, Routes } from '@angular/router';
import { SocialLinksModule } from '../shared/social-links/social-links.module';

const routes: Routes = [
  {
    path: 'sign-up',
    title: 'Sign-up Page',
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
    SocialLinksModule,
  ],
})
export class RegisterPageModule {}
