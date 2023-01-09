import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { calculateTotal } from '../shared/cart.helpers';
import { FoodWithAmountInterface } from '../shared/types/types';
import { CartServiceInterface } from './types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private subject = new BehaviorSubject<CartServiceInterface>({
    items: [],
    total: 0,
  });

  cart$: Observable<CartServiceInterface> = this.subject.asObservable();

  addToCart(cartItem: FoodWithAmountInterface): void {
    const cart = this.subject.getValue();

    const index = cart.items.findIndex(({ id }) => id === cartItem.id);

    if (index !== -1) {
      const newItems: FoodWithAmountInterface[] = cart.items.slice(0);

      newItems[index].amount += cartItem.amount;

      const total = calculateTotal(newItems);

      return this.subject.next({ items: newItems, total });
    }

    const items = [...cart.items, cartItem];
    const total = calculateTotal(items);

    this.subject.next({ items, total });
  }

  removeFromCart(itemId: string): void {
    const cartItems = this.subject.getValue();
    const filtered = cartItems.items.filter((item) => item.id !== itemId);

    const total = calculateTotal(filtered);

    this.subject.next({ items: filtered, total });
  }

  clearCart(): void {
    this.subject.next({ items: [], total: 0 });
  }

  getCartData(): Observable<CartServiceInterface> {
    return this.cart$;
  }
}
