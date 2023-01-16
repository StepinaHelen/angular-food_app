import { TestBed } from '@angular/core/testing';
import { AngularFirestore, Query } from '@angular/fire/compat/firestore';
import { SpinnerService } from 'src/app/service/spinner.service';

import { FoodServiceService } from './food-service.service';

describe('FoodServiceService', () => {
  let service: FoodServiceService;
  let angularFirestoreSpy: jasmine.SpyObj<AngularFirestore>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AngularFirestore', ['collection']);
    TestBed.configureTestingModule({
      providers: [
        FoodServiceService,
        { provide: AngularFirestore, useValue: spy },
      ],
    });
    service = TestBed.inject(FoodServiceService);
    angularFirestoreSpy = TestBed.inject(
      AngularFirestore
    ) as jasmine.SpyObj<AngularFirestore>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
