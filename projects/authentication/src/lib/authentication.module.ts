import {CommonModule} from "@angular/common";
import { ModuleWithProviders, NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";


import { AuthenticationComponent } from './authentication.component';
import { RegisterComponent } from './components/public/register/register.component';
import { PublicComponent } from './components/public/public.component';
import { LoginComponent } from './components/public/login/login.component';
import { HomeComponent } from './components/public/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';

import {TokenInterceptor} from "./interceptors/token.interceptor";
import {ErrorInterceptor} from "./interceptors/error.interceptor";

import { LibraryConfig } from "./models/config";


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    LogoutComponent,
    PublicComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      HttpClientModule
  ],
  exports: [
    AuthenticationComponent,
    LogoutComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class AuthenticationModule {

  static forRoot(config: LibraryConfig): ModuleWithProviders<AuthenticationModule> {
    return {
      ngModule: AuthenticationModule,
      providers: [
          {
            provide: 'config',
            useValue: config
          }
      ]
    };
  }

}
