import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersItemsComponent } from './orders-items.component';

@NgModule({
  declarations: [OrdersItemsComponent],
  imports: [CommonModule],
  exports: [OrdersItemsComponent],
})
export class OrdersItemsModule {}
