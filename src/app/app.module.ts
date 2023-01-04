import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';

import { firebaseConfig } from 'src/environments/environment';
import { HeroComponent } from './main-page/components/hero/hero.component';
import { CategoriesComponent } from './main-page/components/categories/categories.component';
import { FooterModule } from './shared/modules/footer/footer/footer.module';
import { OrderFormPageModule } from './order-form-page/order-form-page.module';
import { MainPageModule } from './main-page/main-page.module';

@NgModule({
  declarations: [AppComponent, HeroComponent, CategoriesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FooterModule,
    OrderFormPageModule,
    MainPageModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
