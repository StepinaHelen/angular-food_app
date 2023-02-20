import { Injectable } from '@angular/core';
import { AngularFirestore, Query } from '@angular/fire/compat/firestore';
import { OrderByDirection } from 'firebase/firestore';
import { Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpinnerService } from 'src/app/service/spinner.service';
import { DEFAULT_FETCH_LIMIT } from '../shared/constants';
import {
  FoodWithAmountInterface,
  FoodInterfaceInput,
} from '../shared/types/types';

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
        const paginatedRef = this.paginate(25, item, orderedRef);

        return paginatedRef;
      }
    );

    return listCollection.snapshotChanges().pipe(
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

  addFood(food: FoodInterfaceInput): void {
    this.afs.collection('foods').add(food);
  }

  deleteFoodItem(id: string) {
    this.afs.doc('foods/' + id).delete();
  }

  updateFoodItem(id: string, data: FoodInterfaceInput) {
    this.afs.doc('foods/' + id).update(data);
  }

  getFoodItemById(id: string) {
    return this.afs
      .collection('foods')
      .doc(id)
      .snapshotChanges()
      .pipe(
        map((item) => {
          return {
            ...(item.payload.data() as FoodInterfaceInput),
            id: item.payload.id,
            amount: 1,
          };
        })
      );
  }
}
