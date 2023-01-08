import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IOrderItemsHistory } from '../shared/types/types';

@Injectable({
  providedIn: 'root',
})
export class OrderHistoryService {
  constructor(private afs: AngularFirestore) {}

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
