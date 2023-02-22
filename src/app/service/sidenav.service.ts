import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  public sidenav$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  toggle() {
    this.sidenav$.next(true);
  }
}
