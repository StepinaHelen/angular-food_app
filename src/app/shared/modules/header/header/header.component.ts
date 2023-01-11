import { Component, OnInit } from '@angular/core';
import { map, Observable, reduce } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ThemeService } from 'src/app/service/theme.service';
import { LocalStorageKeys } from 'src/app/service/types';

@Component({
  selector: 'food-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartItemAmount$: Observable<number>;
  theme: string =
    this.localStorageService.getLocalStorageItem(LocalStorageKeys.theme) ||
    'default';

  constructor(
    private cartService: CartService,
    private themeService: ThemeService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.themeService.setTheme(this.theme);
    this.cartItemAmount$ = this.cartService
      .getCartData()
      .pipe(
        map((cart) =>
          cart.items.reduce((acc, item) => (acc += item.amount ?? 0), 0)
        )
      );
  }

  changeTheme(themeName: string) {
    this.theme = themeName;
    this.themeService.setTheme(themeName);
    this.localStorageService.setLocalstorageItem(
      LocalStorageKeys.theme,
      themeName
    );
  }
}
