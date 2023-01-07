import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../shared/modules/card/card.module';

const routes: Routes = [
  {
    path: 'cart',
    title: 'Cart',
    component: CartPageComponent,
  },
];

@NgModule({
  declarations: [CartPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CardModule],
})
export class CartPageModule {}
