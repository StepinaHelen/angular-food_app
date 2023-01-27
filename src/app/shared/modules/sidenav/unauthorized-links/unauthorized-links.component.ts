import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { navLinks } from 'src/app/shared/constants';

@Component({
  selector: 'food-unauthorized-links',
  templateUrl: './unauthorized-links.component.html',
  styleUrls: ['./unauthorized-links.component.scss', '../link.styles.scss'],
})
export class UnauthorizedLinksComponent {
  @Input()
  cartItemAmount$: Observable<number>;
  navLinks = navLinks;
}
