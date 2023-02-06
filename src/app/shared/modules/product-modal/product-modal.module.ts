import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModalComponent } from './product-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFormModule } from '../input-form/input-form.module';
import { SelectFormModule } from '../select-form/select-form.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [ProductModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputFormModule,
    SelectFormModule,
    ButtonModule
  ],
})
export class ProductModalModule {}
