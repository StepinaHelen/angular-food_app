import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { concatMap, finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public spinner$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  loadingOn() {
    this.spinner$.next(true);
  }

  loadingOff() {
    this.spinner$.next(false);
  }
}
