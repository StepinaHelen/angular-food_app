import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { InputFormModule } from '../shared/modules/input-form/input-form.module';
import { ButtonsModule } from '../shared/modules/button/button.module';
import { OrdersItemsModule } from '../shared/modules/orders-items/orders-items.module';
import { FormComponent } from './components/form/form.component';
import { OrderFormPageComponent } from './order-form-page.component';

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
    ButtonsModule,
    InputFormModule,
  ],
  exports: [OrderFormPageComponent],
})
export class OrderFormPageModule {}
