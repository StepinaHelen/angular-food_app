import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerService } from 'src/app/service/spinner.service';
import { SpinnerModule } from '../spinner/spinner.module';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, SpinnerModule],
  exports: [ButtonComponent],
  providers: [SpinnerService],
})
export class ButtonModule {}
