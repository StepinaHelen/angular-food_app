import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHistoryPageComponent } from './order-history-page.component';
import { RouterModule, Routes } from '@angular/router';
import { OrdersHistoryDataComponent } from './components/orders-history-data/orders-history-data.component';
import { OrdersItemsModule } from '../shared/modules/orders-items/orders-items.module';

const routes: Routes = [
  {
    path: 'order-history',
    title: 'History of orders',
    component: OrderHistoryPageComponent,
  },
];

@NgModule({
  declarations: [OrderHistoryPageComponent, OrdersHistoryDataComponent],
  imports: [CommonModule, RouterModule.forChild(routes), OrdersItemsModule],
})
export class OrderHistoryPageModule {}
