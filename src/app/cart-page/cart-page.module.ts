import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from '../shared/modules/button/button.module';
import { CardModule } from '../shared/modules/card/card.module';
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
    CardModule,
    ButtonModule,
  ],
})
export class CartPageModule {}
