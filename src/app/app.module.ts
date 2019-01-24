import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallProfileModule } from './call-profile/call-profile.module';
import { CallsModule } from './calls/calls.module';
import { HeaderModule } from './header/header.module';
import { AuthInterceptor } from './http';
import { ResponseInterceptor } from './http/response.interceptor';
import { LoginModule } from './login/login.module';
import { NotificationModule } from './notification/notification.module';
import { AuthService } from './services/auth.service';
import { CallsService } from './services/calls.service';
import { metaReducers, reducers, STORE_EFFECTS } from './store';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    LoginModule,
    CallsModule,
    CallProfileModule,
    NotificationModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Store DevTools',
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(STORE_EFFECTS),
  ],
  providers: [
    AuthService,
    CallsService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
