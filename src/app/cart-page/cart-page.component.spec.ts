import { CartPageComponent } from './cart-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from '../service/cart.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { CartItems } from '../shared/testing-moks/testing-mocks';
import { CardModule } from '../shared/modules/card/card.module';

const totalCartAmount = 10;

const mockCartService = {
  getCartData: () => of({ items: CartItems, total: totalCartAmount }),
};

describe('Cart Page Component', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardModule],
      declarations: [CartPageComponent],
      providers: [{ provide: CartService, useValue: mockCartService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should display total amount', () => {
    const totalElement = element.querySelector('.total');
    expect(totalElement?.textContent).toContain(`${totalCartAmount}$`);
  });

  it('Should render cart items', () => {
    const price = element.querySelector('.card-content-price');
    expect(price?.textContent).toContain(`${CartItems[0].price}$`);
  });
});
