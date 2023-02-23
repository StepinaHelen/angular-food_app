import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { SidenavService } from 'src/app/service/sidenav.service';
import { navLinks } from '../../constants';
import { AuthsService } from '../../../service/auth.service';
import { takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'food-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss', './link.styles.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  @Input()
  navLinks = navLinks;
  cartItemAmount$: Observable<number>;
  value: boolean = false;
  destroyed$: Subject<boolean> = new Subject();

  constructor(
    private cartService: CartService,
    public sidenavService: SidenavService,
    public authsService: AuthsService
  ) {}

  ngOnInit(): void {
    this.cartItemAmount$ = this.cartService.getCartItemAmount();
    this.sidenavService.sidenav$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        this.value = data;
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
