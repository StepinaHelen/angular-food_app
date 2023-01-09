import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../shared/modules/card/card.module';
import { ButtonModule } from '../shared/modules/button/button.module';

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
    CardModule,
    ButtonModule,
  ],
})
export class CartPageModule {}
