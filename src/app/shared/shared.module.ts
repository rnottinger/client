import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { AuthenticationModule } from "../../../projects/authentication/src/lib/authentication.module";

export const AUTHENTICATION_CONFIG = {
    authEndpoint: '/oauth/token',
    initialPage: "user"
};

/**
 * This module is used
 *   to share
 *     components, directives, pipes, and other code
 */
@NgModule({
  declarations: [],
  imports: [

      CommonModule,
      AuthenticationModule.forRoot(AUTHENTICATION_CONFIG),
      AppRoutingModule,
      BrowserAnimationsModule,
      MatSliderModule
  ],
  exports: [
      CommonModule,
      AuthenticationModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatSliderModule,
  ]
})
export class SharedModule { }
