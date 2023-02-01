import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { AuthenticationModule } from "../../../projects/authentication/src/lib/authentication.module";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BusyComponent } from './busy/busy.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";

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
  declarations: [
    BusyComponent
  ],
  imports: [

      CommonModule,
      AuthenticationModule.forRoot(AUTHENTICATION_CONFIG),
      AppRoutingModule,
      BrowserAnimationsModule,
      MatSliderModule,
      MatSnackBarModule,
      MatToolbarModule,
      MatProgressSpinnerModule,
      MatButtonModule

  ],
    exports: [
        CommonModule,
        AuthenticationModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        BusyComponent
    ]
})
export class SharedModule { }
