import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { calculateTotal } from '../shared/helpers/cart.helpers';
import { FoodWithAmountInterface } from '../shared/types/types';
import { LocalStorageService } from './local-storage.service';
import { CartServiceInterface, LocalStorageKeys } from './types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public subject = new BehaviorSubject<CartServiceInterface>(
    this.localStorageService.getLocalStorageItem(LocalStorageKeys.cart) ?? {
      items: [],
      total: 0,
    }
  );

  constructor(private localStorageService: LocalStorageService) {}

  cart$: Observable<CartServiceInterface> = this.subject.asObservable();

  addToCart(cartItem: FoodWithAmountInterface): void {
    const cart = this.subject.getValue();
    const index = cart.items.findIndex(({ id }) => id === cartItem.id);

    if (index !== -1) {
      const newItems: FoodWithAmountInterface[] = cart.items.slice(0);

      newItems[index].amount += cartItem.amount;

      const total = calculateTotal(newItems);
      const nextData = { items: newItems, total };

      this.localStorageService.setLocalstorageItem(
        LocalStorageKeys.cart,
        nextData
      );

      this.subject.next(nextData);

      return;
    }

    const items = [...cart.items, cartItem];
    const total = calculateTotal(items);
    const nextData = { items, total };

    this.localStorageService.setLocalstorageItem(
      LocalStorageKeys.cart,
      nextData
    );

    this.subject.next({ items, total });
  }

  removeFromCart(itemId: string): void {
    const cartItems = this.subject.getValue();
    const filtered = cartItems.items.filter((item) => item.id !== itemId);
    const total = calculateTotal(filtered);
    const nextData = { items: filtered, total };

    this.localStorageService.setLocalstorageItem(
      LocalStorageKeys.cart,
      nextData
    );

    this.subject.next(nextData);
  }

  clearCart(): void {
    const initalData = { items: [], total: 0 };

    this.localStorageService.setLocalstorageItem(
      LocalStorageKeys.cart,
      initalData
    );

    this.subject.next(initalData);
  }

  getCartData(): Observable<CartServiceInterface> {
    return this.cart$;
  }
}
