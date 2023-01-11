import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';

import { firebaseConfig } from 'src/environments/environment';

import { FooterModule } from './shared/modules/footer/footer/footer.module';
import { OrderFormPageModule } from './order-form-page/order-form-page.module';
import { MainPageModule } from './main-page/main-page.module';
import { HeaderModule } from './shared/modules/header/header/header.module';
import { OrderHistoryPageModule } from './order-history-page/order-history-page.module';
import { CartPageModule } from './cart-page/cart-page.module';
import { CartService } from './service/cart.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerService } from './shared/modules/spinner/spinner.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FooterModule,
    HeaderModule,
    OrderFormPageModule,
    MainPageModule,
    OrderHistoryPageModule,
    CartPageModule,
  ],

  providers: [CartService, SpinnerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
