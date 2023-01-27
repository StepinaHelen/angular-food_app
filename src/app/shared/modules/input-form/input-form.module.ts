import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormComponent } from './input-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputFormComponent],
})
export class InputFormModule {}
