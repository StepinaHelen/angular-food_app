import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersHistoryDataComponent } from './orders-history-data.component';

describe('OrdersHistoryDataComponent', () => {
  let component: OrdersHistoryDataComponent;
  let fixture: ComponentFixture<OrdersHistoryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersHistoryDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersHistoryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
