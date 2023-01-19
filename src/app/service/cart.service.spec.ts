import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import {
  CartMock,
  FoodItemWithAmountMock,
} from '../shared/testing-moks/testing-mocks';
import { BehaviorSubject, of } from 'rxjs';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
    service.subject = new BehaviorSubject(CartMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created add items to the Cart', () => {
    service.addToCart(FoodItemWithAmountMock);
    expect(service.subject.value.items.length).toEqual(2);
  });

  it('should count the price', () => {
    service.addToCart(FoodItemWithAmountMock);
    expect(service.subject.value.total).toEqual(180);
  });

  it('should delete the item from the cart and recount the price', () => {
    service.removeFromCart('12');
    expect(service.subject.value.items.length).toEqual(0);
    expect(service.subject.value.total).toEqual(0);
  });

  it('should clear cart', () => {
    service.clearCart();
    expect(service.subject.value.items.length).toEqual(0);
    expect(service.subject.value.total).toEqual(0);
  });
});
