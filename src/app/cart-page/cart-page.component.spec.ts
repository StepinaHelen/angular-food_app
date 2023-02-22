import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CartService } from '../service/cart.service';
import { CardsModule } from '../shared/modules/card/card.module';
import { CartMock } from '../shared/testing-moks/testing-mocks';
import { CartPageComponent } from './cart-page.component';

const mockCartService = {
  getCartData: () => of(CartMock),
};

describe('Cart Page Component', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardsModule],
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
    expect(totalElement?.textContent).toContain(`${CartMock.total}$`);
  });

  it('Should render cart items', () => {
    const price = element.querySelector('.card-content-price');
    expect(price?.textContent).toContain(`${CartMock.items[0].price}$`);
  });
});
