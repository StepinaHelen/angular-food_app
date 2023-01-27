import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { OrdersItemsModule } from '../shared/modules/orders-items/orders-items.module';
import { OrderFormPageComponent } from './order-form-page.component';
import { ButtonModule } from '../shared/modules/button/button.module';
import { RouterModule, Routes } from '@angular/router';
import { InputFormModule } from '../shared/modules/input-form/input-form.module';

const routes: Routes = [
  {
    path: 'order-form',
    title: 'Order Form',
    component: OrderFormPageComponent,
  },
];

@NgModule({
  declarations: [FormComponent, OrderFormPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    OrdersItemsModule,
    ButtonModule,
    InputFormModule,
  ],
  exports: [OrderFormPageComponent],
})
export class OrderFormPageModule {}
