import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrdersItemsComponent } from './orders-items.component';

@NgModule({
  declarations: [OrdersItemsComponent],
  imports: [CommonModule],
  exports: [OrdersItemsComponent],
})
export class OrdersItemsModule {}
