import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from '../shared/modules/button/button.module';
import { OrdersItemsModule } from '../shared/modules/orders-items/orders-items.module';
import { FormInputComponent } from './components/form-input/form-input.component';
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
  declarations: [FormComponent, OrderFormPageComponent, FormInputComponent],
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
