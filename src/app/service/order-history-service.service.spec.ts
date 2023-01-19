import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SpinnerService } from './spinner.service';
import { of } from 'rxjs';

import { OrderHistoryService } from './order-history-service.service';
import {
  ItemForHistoryOrderMock,
  ItemHistoryDataMock,
} from '../shared/testing-moks/testing-mocks';

const collectionStub = {
  add: jasmine
    .createSpy('add')
    .and.returnValue([...ItemHistoryDataMock, ItemForHistoryOrderMock]),
  valueChanges: jasmine
    .createSpy('valueChanges')
    .and.returnValue(of(ItemHistoryDataMock)),
  pipe: jasmine.createSpy('pipe').and.returnValue(ItemHistoryDataMock),
};

const angularFiresotreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub),
};

describe('OrderHistoryService', () => {
  let service: OrderHistoryService;
  let angularFirestore: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrderHistoryService,
        { provide: AngularFirestore, useValue: angularFiresotreStub },
      ],
    });
    service = TestBed.inject(OrderHistoryService);
    angularFirestore = TestBed.get(AngularFirestore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call function', () => {
    service.addOrderItemToHistory(ItemForHistoryOrderMock);
    expect(angularFiresotreStub.collection).toHaveBeenCalledWith(
      'ordersHistory'
    );
  });

  it('should call function2', () => {
    service.getHistoryOrderItem();
    expect(angularFiresotreStub.collection).toHaveBeenCalledWith(
      'ordersHistory'
    );
  });
});
