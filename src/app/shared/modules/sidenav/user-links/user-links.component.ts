import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { navLinks } from 'src/app/shared/constants';

@Component({
  selector: 'food-user-links',
  templateUrl: './user-links.component.html',
  styleUrls: ['./user-links.component.scss', '../link.styles.scss'],
})
export class UserLinksComponent {
  @Input()
  cartItemAmount$: Observable<number>;
  navLinks = navLinks;
}
