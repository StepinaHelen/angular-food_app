import { Component } from '@angular/core';
import { navLinks } from 'src/app/shared/constants';

@Component({
  selector: 'food-user-links',
  templateUrl: './user-links.component.html',
  styleUrls: ['./user-links.component.scss', '../link.styles.scss'],
})
export class UserLinksComponent {
  navLinks = navLinks;
}
