import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SpinnerService } from './spinner.service';

import { OrderHistoryService } from './order-history-service.service';

describe('OrderHistoryService', () => {
  let service: OrderHistoryService;
  let angularFirestoreSpy: jasmine.SpyObj<AngularFirestore>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AngularFirestore', ['collection']);

    TestBed.configureTestingModule({
      providers: [
        OrderHistoryService,
        { provide: AngularFirestore, useValue: spy },
      ],
    });
    service = TestBed.inject(OrderHistoryService);
    angularFirestoreSpy = TestBed.inject(
      AngularFirestore
    ) as jasmine.SpyObj<AngularFirestore>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
