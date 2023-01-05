import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { OrdersItemsModule } from '../shared/modules/orders-items/orders-items.module';
import { OrderFormPageComponent } from './order-form-page.component';
import { ButtonModule } from '../shared/modules/button/button.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'order-form',
    title: 'Order Form',
    component: OrderFormPageComponent,
  },
];

@NgModule({
  declarations: [FormComponent, OrderFormPageComponent, OrderFormPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    OrdersItemsModule,
    ButtonModule,
  ],
  exports: [OrderFormPageComponent],
})
export class OrderFormPageModule {}
