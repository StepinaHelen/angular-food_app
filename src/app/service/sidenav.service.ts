import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  public sidenav$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  toggle() {
    const value = this.sidenav$.getValue();
    this.sidenav$.next(!value);
  }
}
