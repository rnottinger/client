import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecureComponent } from './secure/secure.component';
import { PublicModule } from "./public/public.module";
import {AuthenticationModule} from "../../projects/authentication/src/lib/authentication.module";


export const AUTHENTICATION_CONFIG = {
  authEndpoint: "/users/authenticate",
  initialPage: "home"
};

@NgModule({
  declarations: [
    AppComponent,
    SecureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    AuthenticationModule.forRoot(AUTHENTICATION_CONFIG)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
