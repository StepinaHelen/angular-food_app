import { Injectable } from '@angular/core';
import { AngularFirestore, Query } from '@angular/fire/compat/firestore';
import { OrderByDirection } from 'firebase/firestore';
import { Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpinnerService } from 'src/app/service/spinner.service';
import { DEFAULT_FETCH_LIMIT } from '../shared/constants';
import { FoodWithAmountInterface } from '../shared/types/types';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  constructor(
    private afs: AngularFirestore,
    private spinnerService: SpinnerService
  ) {}

  private orderBy(order: OrderByDirection, ref: Query) {
    return ref.orderBy('title', order);
  }

  private categorize(category: string, ref: Query) {
    if (category === 'all') {
      return ref;
    }
    return ref.where('category', '==', category);
  }

  private paginate(
    limit: number,
    item: FoodWithAmountInterface | null,
    ref: Query
  ) {
    if (item) {
      return ref.startAfter(item.title).limit(limit);
    }
    return ref.limit(limit);
  }

  getFoodsList(
    fieldCategory: string,
    order: OrderByDirection,
    item: FoodWithAmountInterface | null
  ): Observable<FoodWithAmountInterface[]> {
    this.spinnerService.loadingOn();
    const listCollection = this.afs.collection<FoodWithAmountInterface>(
      'foods',
      (ref) => {
        const categorizedRef = this.categorize(fieldCategory, ref);
        const orderedRef = this.orderBy(order, categorizedRef);
        const paginatedRef = this.paginate(
          DEFAULT_FETCH_LIMIT,
          item,
          orderedRef
        );

        return paginatedRef;
      }
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
