import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IIcons } from './shared/types/types';

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
  icons: IIcons[] = [
    { name: 'facebook', src: '../assets/icons/icon-facebook.svg' },
    { name: 'github', src: '../assets/icons/icon-github.svg' },
    { name: 'google', src: '../assets/icons/icon-google.svg' },
  ];

  ngOnInit() {
    this.registerIcons(this.icons);
  }

  registerIcons(icons: any[]) {
    icons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.src)
      );
    });
  }
}
