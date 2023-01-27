import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CartPageComponent } from 'src/app/cart-page/cart-page.component';
import { OrderHistoryPageComponent } from 'src/app/order-history-page/order-history-page.component';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'cart', component: CartPageComponent },
          { path: 'order-history', component: OrderHistoryPageComponent },
        ]),
        RouterModule.forRoot([]),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title Page', () => {
    const h2 = element.querySelector('h2');
    expect(h2?.textContent).toContain('Simple food');
  });

  it('should route to the cart Page', async () => {
    await fixture.debugElement
      .query(By.css('.cart-link'))
      .nativeElement.click();
    expect(location.pathname).toEqual('/cart');
  });

  it('should route to the Order History Page', async () => {
    await fixture.debugElement
      .query(By.css('.order-history-link'))
      .nativeElement.click();
    expect(location.pathname).toEqual('/order-history');
  });

  it('should change the theme', async () => {
    component.changeTheme('default');
    expect(component.theme).toEqual('default');
  });

  it('should change the theme for Dark', async () => {
    component.changeTheme('dark');
    expect(component.theme).toEqual('dark');
  });
});
