import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { firebaseConfig } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageModule } from './cart-page/cart-page.module';
import { MainPageModule } from './main-page/main-page.module';
import { OrderFormPageModule } from './order-form-page/order-form-page.module';
import { OrderHistoryPageModule } from './order-history-page/order-history-page.module';
import { CartService } from './service/cart.service';
import { FooterModule } from './shared/modules/footer/footer/footer.module';
import { HeaderModule } from './shared/modules/header/header/header.module';
import { SidenavModule } from './shared/modules/sidenav/sidenav.module';
import { SpinnerModule } from './shared/modules/spinner/spinner.module';

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
    SpinnerModule,
    SidenavModule,
  ],

  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
