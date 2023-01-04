import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { OrdersItemsModule } from '../shared/modules/orders-items/orders-items.module';
import { OrderFormPageComponent } from './order-form-page.component';

@NgModule({
  declarations: [FormComponent, OrderFormPageComponent, OrderFormPageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrdersItemsModule],
  exports: [OrderFormPageComponent],
})
export class OrderFormPageModule {}
