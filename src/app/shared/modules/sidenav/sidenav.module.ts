import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav.component';
import { UnauthorizedLinksComponent } from './unauthorized-links/unauthorized-links.component';
import { UserLinksComponent } from './user-links/user-links.component';
import { AdminLinksComponent } from './admin-links/admin-links.component';
import { OutsideClickDirective } from '../../directives/click-outside';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [
    SidenavComponent,
    UnauthorizedLinksComponent,
    UserLinksComponent,
    AdminLinksComponent,
    OutsideClickDirective,
  ],
  imports: [CommonModule, RouterModule, SidebarModule],
  exports: [SidenavComponent],
})
export class SidenavModule {}
