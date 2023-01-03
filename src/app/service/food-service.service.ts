import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  constructor(private afs: AngularFirestore) {}

  getFoodsList(): Observable<any> {
    const listCollection = this.afs.collection('foods');
    return listCollection.stateChanges().pipe(
      map((dataRes) => {
        return dataRes.map((list: any) => ({
          ...list.payload.doc.data(),
          id: list.payload.doc.id,
          type: list.type,
        }));
      })
    );
  }
}
