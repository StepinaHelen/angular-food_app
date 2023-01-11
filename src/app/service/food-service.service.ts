import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { FoodWithAmountInterface } from '../shared/types/types';
import { OrderByDirection } from 'firebase/firestore';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  constructor(
    private afs: AngularFirestore,
    private spinnerService: SpinnerService
  ) {}

  getFoodsList(
    fieldCategory: string,
    sortField: OrderByDirection
  ): Observable<FoodWithAmountInterface[]> {
    this.spinnerService.loadingOn();
    const listCollection = this.afs.collection<FoodWithAmountInterface>(
      'foods',
      fieldCategory
        ? (ref) =>
            ref
              .orderBy('title', sortField)
              .where('category', '==', fieldCategory)
        : (ref) => ref.orderBy('title', sortField)
    );

    return listCollection.stateChanges().pipe(
      map((dataRes) => {
        return dataRes.map((list) => ({
          ...list.payload.doc.data(),
          id: list.payload.doc.id,
          type: list.type,
          amount: 1,
        }));
      }),
      tap(() => {
        this.spinnerService.loadingOff();
      })
    );
  }
}
