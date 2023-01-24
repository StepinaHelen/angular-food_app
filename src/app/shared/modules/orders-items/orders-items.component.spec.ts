import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { getByText } from '../../helpers/testing-helpers';
import { CartMock } from '../../testing-moks/testing-mocks';
import { OrdersItemsComponent } from './orders-items.component';

const mockCartService = {
  getCartData: () => of(CartMock),
};

describe('OrdersItemsComponent', () => {
  let component: OrdersItemsComponent;
  let fixture: ComponentFixture<OrdersItemsComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersItemsComponent],
      providers: [{ provide: CartService, useValue: mockCartService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersItemsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should render items passed to the component', () => {
    component.foodItems = CartMock.items;
    fixture.detectChanges();

    const title = getByText(fixture, 'p', 'Seafood pizza');
    const quantity = getByText(fixture, 'p', 'x1');
    const price = getByText(fixture, 'p', '90$');

    expect(title).toBeTruthy();
    expect(quantity).toBeTruthy();
    expect(price).toBeTruthy();
  });
});
