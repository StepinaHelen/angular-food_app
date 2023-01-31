import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { firebaseConfig } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageModule } from './cart-page/cart-page.module';
import { LogInPageModule } from './log-in-page/log-in-page.module';
import { MainPageModule } from './main-page/main-page.module';
import { OrderFormPageModule } from './order-form-page/order-form-page.module';
import { OrderHistoryPageModule } from './order-history-page/order-history-page.module';
import { RegisterPageModule } from './register-page/register-page.module';
import { AuthsService } from './service/auth.service';
import { SpinnerService } from './service/spinner.service';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
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
    SidenavModule,
  ],
  providers: [
    AuthsService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor,
    },
    SpinnerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
