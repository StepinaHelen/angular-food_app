import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { CartServiceInterface } from 'src/app/service/types';
import { IOrdersHistoryItem } from '../../types/types';

@Component({
  selector: 'food-orders-items',
  templateUrl: './orders-items.component.html',
  styleUrls: ['./orders-items.component.scss'],
})
export class OrdersItemsComponent implements OnInit {
  @Input() foodItems: IOrdersHistoryItem[] = [];
  @Input() withShadow: boolean = false;

  constructor(private cartService: CartService) {}

  cart$: Observable<CartServiceInterface>;

  ngOnInit(): void {
    this.cart$ = this.cartService.getCartData();
  }
}
