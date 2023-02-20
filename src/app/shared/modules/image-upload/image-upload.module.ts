import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ImageUploadComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ImageUploadComponent],
})
export class ImageUploadModule {}
