import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonSpinnerComponent } from './button-spinner/button-spinner.component';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [SpinnerComponent, ButtonSpinnerComponent],
  imports: [CommonModule],
  exports: [SpinnerComponent, ButtonSpinnerComponent],
})
export class SpinnerModule {}
