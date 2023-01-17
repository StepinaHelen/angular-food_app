import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { OrdersHistoryDataComponent } from './orders-history-data.component';
import { OrderHistoryService } from 'src/app/service/order-history-service.service';

describe('OrdersHistoryDataComponent', () => {
  let component: OrdersHistoryDataComponent;
  let fixture: ComponentFixture<OrdersHistoryDataComponent>;
  let orderHistoryServiceSpy: jasmine.SpyObj<OrderHistoryService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('OrderHistoryService', [
      'getHistoryOrderItem',
    ]);

    await TestBed.configureTestingModule({
      declarations: [OrdersHistoryDataComponent],
      providers: [{ provide: OrderHistoryService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersHistoryDataComponent);
    component = fixture.componentInstance;

    orderHistoryServiceSpy = TestBed.inject(
      OrderHistoryService
    ) as jasmine.SpyObj<OrderHistoryService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
