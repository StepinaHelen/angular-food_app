import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { ButtonModule } from '../shared/modules/button/button.module';
import { CardModule } from '../shared/modules/card/card.module';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: MainPageComponent,
  },
];

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CardModule],
  exports: [ButtonModule],
})
export class MainPageModule {}
