import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../service/cart.service';
import { FoodWithAmountInterface } from '../shared/types/types';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  constructor(private cartService: CartService) {}

  cartItems$: Observable<FoodWithAmountInterface[]>;

  ngOnInit(): void {
    this.cartItems$ = this.cartService.getCartItems();
  }
}
