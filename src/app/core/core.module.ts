import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {AuthenticationModule} from "../../../projects/authentication/src/lib/authentication.module";


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
    AccountMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationModule,
    MatToolbarModule,
    MatButtonModule
  ],
  /**
   * since these components
   *   are going to be used
   *     outside the CoreModule,
   *       we need to export them
   */
  exports: [
    NavBarComponent,
    AccountMenuComponent],
  providers: []
})
export class CoreModule { }
