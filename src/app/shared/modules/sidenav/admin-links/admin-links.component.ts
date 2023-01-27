import { Component } from '@angular/core';
import { navLinks } from 'src/app/shared/constants';

@Component({
  selector: 'food-admin-links',
  templateUrl: './admin-links.component.html',
  styleUrls: ['./admin-links.component.scss', '../link.styles.scss'],
})
export class AdminLinksComponent {
  navLinks = navLinks;
}
