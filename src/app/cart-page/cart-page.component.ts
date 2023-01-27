import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../service/cart.service';
import { CartServiceInterface } from '../service/types';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  constructor(private cartService: CartService) {}

  cart$: Observable<CartServiceInterface>;

  ngOnInit(): void {
    this.cart$ = this.cartService.getCartData();
  }
}
