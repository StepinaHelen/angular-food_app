import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersHistoryDataComponent } from './orders-history-data.component';
import { OrderHistoryService } from 'src/app/service/order-history-service.service';
import { ItemHistoryDataMock } from '../../../shared/testing-moks/testing-mocks';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('OrdersHistoryDataComponent', () => {
  let component: OrdersHistoryDataComponent;
  let fixture: ComponentFixture<OrdersHistoryDataComponent>;
  let orderHistoryServiceSpy: jasmine.SpyObj<OrderHistoryService>;
  let historyElement: HTMLElement;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('OrderHistoryService', [
      'getHistoryOrderItem',
    ]);

    await TestBed.configureTestingModule({
      declarations: [OrdersHistoryDataComponent],
      providers: [{ provide: OrderHistoryService, useValue: spy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersHistoryDataComponent);
    component = fixture.componentInstance;

    orderHistoryServiceSpy = TestBed.inject(
      OrderHistoryService
    ) as jasmine.SpyObj<OrderHistoryService>;

    historyElement = fixture.nativeElement;
    component.ordersHistory$ = spy.getHistoryOrderItem.and.returnValue(
      of(ItemHistoryDataMock)
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[Order History Page]should display Phone number:', () => {
    const phone = historyElement.querySelectorAll('.phone')[0];
    expect(phone?.textContent).toContain(ItemHistoryDataMock[0].phone);
  });

  it('[Order History Page] should display First and last name', () => {
    const name = historyElement.querySelectorAll('.name')[0];
    expect(name?.textContent).toEqual(
      `${ItemHistoryDataMock[0].firstName}` +
        ' ' +
        `${ItemHistoryDataMock[0].lastName}`
    );
  });

  it('[Order History Page]should display Adress:', () => {
    const adress = historyElement.querySelectorAll('.adress')[0];
    expect(adress?.textContent).toContain(
      `${ItemHistoryDataMock[0].city}` +
        ', ' +
        `${ItemHistoryDataMock[0].street}`
    );
  });

  it('[Order History Page]should display Date', () => {
    const date = historyElement.querySelector('.date p');
    expect(date?.textContent).toContain(ItemHistoryDataMock[0].date);
  });
});
