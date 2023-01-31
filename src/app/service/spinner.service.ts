import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
