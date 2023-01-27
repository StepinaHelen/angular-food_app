import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from './social-links.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SocialLinksComponent],
  imports: [CommonModule, MatIconModule],
  exports: [SocialLinksComponent],
})
export class SocialLinksModule {}
