import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';

import { firebaseConfig } from 'src/environments/environment';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './main-page/components/hero/hero.component';
import { CategoriesComponent } from './main-page/components/categories/categories.component';


@NgModule({

  declarations: [AppComponent, HeaderComponent, HeroComponent, CategoriesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],

  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}