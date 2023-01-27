import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IIcons } from './shared/types/types';
import { icons } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
  title = 'angular-food_app';
  iconsSvg: IIcons[] = icons;

  ngOnInit() {
    this.registerIcons(this.iconsSvg);
  }

  registerIcons(icons: IIcons[]) {
    icons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.src)
      );
    });
  }
}
