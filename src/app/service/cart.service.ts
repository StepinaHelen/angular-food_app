import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FoodWithAmountInterface } from '../shared/types/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private subject = new BehaviorSubject<FoodWithAmountInterface[]>([]);

  cartItems$: Observable<FoodWithAmountInterface[]> =
    this.subject.asObservable();

  addToCart(cartItem: FoodWithAmountInterface) {
    const cartItems = this.subject.getValue();

    const index = cartItems.findIndex(({ id }) => id === cartItem.id);

    if (index !== -1) {
      const newItems: FoodWithAmountInterface[] = cartItems.slice(0);

      newItems[index].amount += cartItem.amount;

      return this.subject.next(newItems);
    }

    return this.subject.next([...cartItems, cartItem]);
  }

  removeFromCart(itemId: string) {
    const cartItems = this.subject.getValue();
    const filtered = cartItems.filter((item) => item.id !== itemId);
    return this.subject.next(filtered);
  }

  getCartItems(): Observable<FoodWithAmountInterface[]> {
    return this.cartItems$;
  }
}
