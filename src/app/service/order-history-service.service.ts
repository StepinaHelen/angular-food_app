import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IOrderItemsHistory } from '../shared/types/types';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root',
})
export class OrderHistoryService {
  constructor(
    private afs: AngularFirestore,
    private spinnerService: SpinnerService
  ) {}

  addOrderItemToHistory(orders: IOrderItemsHistory, userId: string | null) {
    let userRef = null;

    if (userId) {
      userRef = this.afs.collection('users').doc(userId).ref;
    }

    return this.afs
      .collection('ordersHistory')
      .add(userRef ? { ...orders, clientId: userRef } : orders);
  }

  getHistoryOrderItem(userId: string): Observable<IOrderItemsHistory[]> {
    this.spinnerService.loadingOn();

    const userRef = this.afs.collection('users').doc(userId).ref;
    const listCollection = this.afs.collection<IOrderItemsHistory>(
      'ordersHistory',
      (ref) => {
        return ref.where('clientId', '==', userRef);
      }
    );

    return listCollection.valueChanges().pipe(
      map((data) => {
        return data;
      }),
      tap(() => {
        this.spinnerService.loadingOff();
      })
    );
  }
}
