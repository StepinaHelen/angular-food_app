import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, BrowserAnimationsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
