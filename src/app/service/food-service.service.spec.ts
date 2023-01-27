import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FoodItemsWithAmountMock } from '../shared/testing-moks/testing-mocks';
import { FoodServiceService } from './food-service.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

const collectionStub = {
  valueChanges: jasmine
    .createSpy('valueChanges')
    .and.returnValue(of([FoodItemsWithAmountMock])),
  stateChanges: jasmine
    .createSpy('stateChanges')
    .and.returnValue(of(FoodItemsWithAmountMock)),
};

const angularFiresotreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub),
};

describe('OrderHistoryService', () => {
  let service: FoodServiceService;
  let angularFirestore: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FoodServiceService,
        { provide: AngularFirestore, useValue: angularFiresotreStub },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(FoodServiceService);
    angularFirestore = TestBed.get(AngularFirestore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call function getFoodsList', () => {
    service.getFoodsList('pizza', 'desc', null);
    expect(angularFiresotreStub.collection).toHaveBeenCalled();
  });
});
