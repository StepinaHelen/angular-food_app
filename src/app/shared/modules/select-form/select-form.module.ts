import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFormComponent } from './select-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [SelectFormComponent],
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule, FormsModule],
  exports: [SelectFormComponent],
})
export class SelectFormModule {}
