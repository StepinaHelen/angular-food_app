import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerModule } from '../spinner/spinner.module';
import { ButtonComponent } from './button.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, SpinnerModule, ButtonModule],
  exports: [ButtonComponent],
})
export class ButtonsModule {}
