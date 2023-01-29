import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthenticationModule } from "../../projects/authentication/src/lib/authentication.module";

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SecureComponent } from './secure/secure.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const AUTHENTICATION_CONFIG = {
  // authEndpoint: "/users/authenticate",
  // initialPage: "home"
  // authEndpoint: 'http://localhost:8000/oauth/token', // local
  authEndpoint: 'http://localhost:8088/oauth/token', // docker
  initialPage: "user"
};

@NgModule({
  declarations: [
    AppComponent,
    SecureComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule.forRoot(AUTHENTICATION_CONFIG),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
