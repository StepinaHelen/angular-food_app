import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  FoodInterface,
  FoodWithAmountInterface,
  IOrderItemsHistory,
} from '../shared/types/types';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  constructor(private afs: AngularFirestore) {}

  getFoodsList(): Observable<FoodWithAmountInterface[]> {
    const listCollection =
      this.afs.collection<FoodWithAmountInterface>('foods');
    return listCollection.stateChanges().pipe(
      map((dataRes) => {
        return dataRes.map((list) => ({
          ...list.payload.doc.data(),
          id: list.payload.doc.id,
          type: list.type,
          amount: 1,
        }));
      })
    );
  }

  addOrderItemToHistory(orders: IOrderItemsHistory[]): void {
    this.afs.collection('ordersHistory').add(orders);
  }

  getHistoryOrderItem(): Observable<IOrderItemsHistory[]> {
    const listCollection =
      this.afs.collection<IOrderItemsHistory>('ordersHistory');
    return listCollection.stateChanges().pipe(
      map((dataRes) => {
        return dataRes.map((list) => ({
          ...list.payload.doc.data(),
        }));
      })
    );
  }
}
