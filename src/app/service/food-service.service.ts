import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FoodInterface } from './types';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  constructor(private afs: AngularFirestore) {}

  getFoodsList(): Observable<FoodInterface[]> {
    const listCollection = this.afs.collection<FoodInterface>('foods');
    return listCollection.stateChanges().pipe(
      map((dataRes) => {
        return dataRes.map((list) => ({
          ...list.payload.doc.data(),
          id: list.payload.doc.id,
          type: list.type,
        }));
      })
    );
  }
}
