import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsModule } from '../shared/modules/button/button.module';
import { CardsModule } from '../shared/modules/card/card.module';
import { CartPageComponent } from './cart-page.component';

const routes: Routes = [
  {
    path: 'cart',
    title: 'Cart',
    component: CartPageComponent,
  },
];

@NgModule({
  declarations: [CartPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardsModule,
    ButtonsModule,
  ],
})
export class CartPageModule {}
