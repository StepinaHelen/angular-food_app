import { Component, OnInit } from '@angular/core';
import { map, Observable, reduce } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'food-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartItemAmount$: Observable<number>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItemAmount$ = this.cartService
      .getCartItems()
      .pipe(
        map((items) =>
          items.reduce((acc, item) => (acc += item.amount ?? 0), 0)
        )
      );
  }
}
