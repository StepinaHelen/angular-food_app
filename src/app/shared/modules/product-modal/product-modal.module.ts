import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModalComponent } from './product-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFormModule } from '../input-form/input-form.module';
import { SelectFormModule } from '../select-form/select-form.module';
import { ButtonsModule } from '../button/button.module';
import { ImageUploadModule } from '../image-upload/image-upload.module';
import { TabComponentModule } from '../tab-component/tab-component.module';

@NgModule({
  declarations: [ProductModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputFormModule,
    SelectFormModule,
    ButtonsModule,
    ImageUploadModule,
    TabComponentModule,
  ],
})
export class ProductModalModule {}
