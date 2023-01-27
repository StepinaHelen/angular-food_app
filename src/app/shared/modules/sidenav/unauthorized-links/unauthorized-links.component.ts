import { Component } from '@angular/core';
import { navLinks } from 'src/app/shared/constants';

@Component({
  selector: 'food-unauthorized-links',
  templateUrl: './unauthorized-links.component.html',
  styleUrls: ['./unauthorized-links.component.scss', '../link.styles.scss'],
})
export class UnauthorizedLinksComponent {
  navLinks = navLinks;
}
