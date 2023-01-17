import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ThemeService } from 'src/app/service/theme.service';
import { LocalStorageKeys } from 'src/app/service/types';
import { ITHEMES } from 'src/app/shared/types/types';

export interface AnimateThemeChangeElements {
  previousElement: HTMLSpanElement;
  currentElement: HTMLSpanElement;
  animationLayer: HTMLDivElement;
}

@Component({
  selector: 'food-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('animationLayer') animationLayer: ElementRef<HTMLDivElement>;
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

  setThemeWithAnimation(
    elements: AnimateThemeChangeElements,
    themeName: keyof ITHEMES
  ) {
    const { previousElement, currentElement, animationLayer } = elements;

    animationLayer.classList.add('animate-bg');
    previousElement.classList.remove('fade-in');
    previousElement.classList.add('fade-out');

    setTimeout(() => {
      animationLayer.classList.remove('animate-bg');
      previousElement.classList.add('display-none');
      currentElement.classList.add('fade-in');
      currentElement.classList.remove('display-none', 'fade-out');

      this.themeService.setTheme(themeName);
      this.localStorageService.setLocalstorageItem(
        LocalStorageKeys.theme,
        themeName
      );
    }, 700);
  }

  changeTheme(themeName: keyof ITHEMES) {
    this.theme = themeName;

    const elements: AnimateThemeChangeElements = {
      previousElement:
        this.theme === 'default'
          ? this.dark.nativeElement
          : this.default.nativeElement,
      currentElement:
        this.theme === 'dark'
          ? this.dark.nativeElement
          : this.default.nativeElement,
      animationLayer: this.animationLayer.nativeElement,
    };

    this.setThemeWithAnimation(elements, this.theme);
  }
}
