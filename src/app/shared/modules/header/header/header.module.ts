import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, BrowserAnimationsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
