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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerModule } from './shared/modules/spinner/spinner.module';
import { LogInPageModule } from './log-in-page/log-in-page.module';
import { RegisterPageModule } from './register-page/register-page.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FooterModule,
    HeaderModule,
    OrderFormPageModule,
    MainPageModule,
    OrderHistoryPageModule,
    CartPageModule,
    SpinnerModule,
    LogInPageModule,
    RegisterPageModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
