import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from '../shared/modules/button/button.module';
import { CardModule } from '../shared/modules/card/card.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { HeroComponent } from './components/hero/hero.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: MainPageComponent,
  },
];

@NgModule({
  declarations: [
    MainPageComponent,
    HeroComponent,
    CategoriesComponent,
    InfiniteScrollComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), CardModule],
  exports: [ButtonModule, InfiniteScrollComponent],
})
export class MainPageModule {}
