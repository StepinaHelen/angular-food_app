import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { SidenavService } from 'src/app/service/sidenav.service';
import { navLinks } from '../../constants';
import { UserRole } from '../../types/types';

@Component({
  selector: 'food-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss', './link.styles.scss'],
})
export class SidenavComponent implements OnInit {
  @Input()
  userRole$: Observable<UserRole | null>;
  navLinks = navLinks;
  cartItemAmount$: Observable<number>;

  constructor(
    private cartService: CartService,
    public sidenavService: SidenavService
  ) {}

  ngOnInit(): void {
    this.cartItemAmount$ = this.cartService.getCartItemAmount();
  }
}
