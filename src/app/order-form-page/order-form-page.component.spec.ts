import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderHistoryService } from 'src/app/service/order-history-service.service';
import { CartService } from 'src/app/service/cart.service';
import { OrderFormPageComponent } from './order-form-page.component';
import { Router } from '@angular/router';

describe('OrderFormPageComponent', () => {
  let component: OrderFormPageComponent;
  let fixture: ComponentFixture<OrderFormPageComponent>;
  let orderHistoryServiceSpy: jasmine.SpyObj<OrderHistoryService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('OrderHistoryService', [
      'addOrderItemToHistory',
    ]);

    await TestBed.configureTestingModule({
      declarations: [OrderFormPageComponent],
      providers: [{ provide: OrderHistoryService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderFormPageComponent);
    component = fixture.componentInstance;
    orderHistoryServiceSpy = TestBed.inject(
      OrderHistoryService
    ) as jasmine.SpyObj<OrderHistoryService>;
    fixture.detectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
