import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthsService } from './service/auth.service';
import { icons } from './shared/constants';
import { IIcons } from './shared/types/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public authsService: AuthsService
  ) {}
  title = 'angular-food_app';
  iconsSvg: IIcons[] = icons;

  ngOnInit() {
    this.registerIcons(this.iconsSvg);
    this.authsService.getCurrentUser(this.authsService.token);
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
