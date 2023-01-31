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

  addOrderItemToHistory(orders: IOrderItemsHistory) {
    return this.afs.collection('ordersHistory').add(orders);
  }

  getHistoryOrderItem(): Observable<IOrderItemsHistory[]> {
    this.spinnerService.loadingOn();
    const listCollection =
      this.afs.collection<IOrderItemsHistory>('ordersHistory');

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
