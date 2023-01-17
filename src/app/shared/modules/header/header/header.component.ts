import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ThemeService } from 'src/app/service/theme.service';
import { LocalStorageKeys } from 'src/app/service/types';
import { ITHEMES } from 'src/app/shared/types/types';

@Component({
  selector: 'food-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('animation') child: ElementRef<HTMLDivElement>;
  @ViewChild('dark') dark: ElementRef<HTMLSpanElement>;
  @ViewChild('default') default: ElementRef<HTMLSpanElement>;

  cartItemAmount$: Observable<number>;
  theme: keyof ITHEMES =
    this.localStorageService.getLocalStorageItem(LocalStorageKeys.theme) ||
    'default';

  isDefault = this.theme === 'default';

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

  changeTheme(themeName: keyof ITHEMES) {
    this.theme = themeName;

    if (this.theme === 'default') {
      this.child.nativeElement.classList.add('animate-bg');
      this.dark.nativeElement.classList.remove('fade-in');
      this.dark.nativeElement.classList.add('fade-out');
    } else {
      this.child.nativeElement.classList.add('animate-bg');
      this.default.nativeElement.classList.remove('fade-in');
      this.default.nativeElement.classList.add('fade-out');
    }

    setTimeout(() => {
      this.child.nativeElement.classList.remove('animate-bg');

      if (this.theme === 'default') {
        this.dark.nativeElement.classList.add('display-none');
        this.default.nativeElement.classList.add('fade-in');
        this.default.nativeElement.classList.remove('display-none', 'fade-out');
      } else {
        this.default.nativeElement.classList.add('display-none');
        this.dark.nativeElement.classList.add('fade-in');
        this.dark.nativeElement.classList.remove('display-none', 'fade-out');
      }

      this.themeService.setTheme(themeName);
      this.localStorageService.setLocalstorageItem(
        LocalStorageKeys.theme,
        themeName
      );
    }, 700);
  }
}
