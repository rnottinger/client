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
 * This SharedModule is used
 *   to share
 *     components, directives, pipes, and other code
 *       that will be shared across multiple modules
 *         in the application
 *
 * We will have multiple feature modules
 *   both will need the spinner
 *
 * This module
 *   will be imported
 *     by our feature modules
 *       when we create them
 * We will only import the SharedModule
 *   into the feature modules
 *     that need them.
 *
 * Feature modules also need access to the CommonModule
 *   therefore we export it
 *     so the feature modules
 *       won't have to import it themselves
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
        AuthenticationModule,
        BusyComponent,
        CommonModule,

        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
    ]
})
export class SharedModule { }
