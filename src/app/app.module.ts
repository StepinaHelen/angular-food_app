import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';

import { firebaseConfig } from 'src/environments/environment';
// import { HeroComponent } from './main-page/components/hero/hero.component';

import { FooterModule } from './shared/modules/footer/footer/footer.module';
import { OrderFormPageModule } from './order-form-page/order-form-page.module';
import { MainPageModule } from './main-page/main-page.module';
import { HeaderModule } from './shared/modules/header/header/header.module';
import { CartPageModule } from './cart-page/cart-page.module';
import { CartService } from './service/cart.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FooterModule,
    HeaderModule,
    OrderFormPageModule,
    MainPageModule,
    CartPageModule,
  ],

  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
