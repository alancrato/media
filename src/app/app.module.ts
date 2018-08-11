import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { Http, HttpModule, XHRBackend } from "@angular/http";
import { JwtClientProvider } from "../providers/jwt-client";
import { IonicStorageModule, Storage } from "@ionic/storage";
import { AuthProvider } from "../providers/auth";
import { ENV } from "../models/env";
import { DefaultXHRBackend } from "../providers/defalt-xhr-backend";
import { Redirector } from "../providers/redirector";
import { Service } from "../providers/service";
import { UserResource } from "../providers/user.resource";
import { AuthConfig, AuthHttp, JwtHelper } from "angular2-jwt";

declare let ENV:ENV;

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      driverOrder: ['localstorage']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JwtHelper,
    JwtClientProvider,
    AuthProvider,
    Redirector,
    Service,
    UserResource,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: AuthHttp,
      deps: [Http, Storage],
      useFactory(http,storage){
        let authConfig = new AuthConfig({
          headerPrefix: 'Bearer',
          noJwtError: true,
          noClientCheck: true,
          tokenGetter: (() => storage.get(ENV.TOKEN_NAME))
        });
        return new AuthHttp(authConfig,http);
      }
    },
    {provide: XHRBackend, useClass: DefaultXHRBackend},
  ]
})
export class AppModule {}
