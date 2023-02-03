import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { AuthenticationModule } from "../../../projects/authentication/src/lib/authentication.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { LayoutComponent } from './layout/layout.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";


/**
 * Any directives such as the routerLink directive
 *   that are being used inside the CoreModule
 *     then module (RouterModule)
 *       that the directive is declared in
 *         must also be imported into the CoreModule
 */
@NgModule({
  declarations: [
    NavBarComponent,
    AccountMenuComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationModule,

    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  /**
   * since these components
   *   are going to be used
   *     outside the CoreModule,
   *       we need to export them
   */
  exports: [
    BrowserAnimationsModule,
    NavBarComponent,
    AccountMenuComponent,
    LayoutComponent
  ],
  providers: []
})
export class CoreModule { }
