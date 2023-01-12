import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { FoodWithAmountInterface } from '../shared/types/types';
import { OrderByDirection, startAfter } from 'firebase/firestore';
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
    sortField: OrderByDirection,
    item?: FoodWithAmountInterface | null
  ): Observable<FoodWithAmountInterface[]> {
    console.log(item);
    this.spinnerService.loadingOn();
    const listCollection = this.afs.collection<FoodWithAmountInterface>(
      'foods',
      fieldCategory !== 'all'
        ? (ref) =>
            ref
              .orderBy('title', sortField)
              .startAfter(item?.title ?? null)
              .where('category', '==', fieldCategory)
              .limit(2)
        : (ref) =>
            ref

              .orderBy('title', sortField)
              .startAfter(item?.title ?? null)
              .limit(2)
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
