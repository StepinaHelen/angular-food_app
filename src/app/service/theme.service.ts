import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { THEMES } from '../shared/config/theme.config';
import { ITHEMES, ITheme } from '../shared/types/types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  setTheme(name: keyof ITHEMES = 'default') {
    const theme: ITheme = THEMES[name];
    (Object.keys(theme) as Array<keyof ITheme>).forEach((key) => {
      this.document.documentElement.style.setProperty(`--${key}`, theme[key]);
    });
  }
}
