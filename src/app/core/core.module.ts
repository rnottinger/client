import { NgModule, Optional, SkipSelf } from '@angular/core';
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
import { EnsureModuleLoadedOnceGuard } from "../ensure-module-loaded-once.guard";
import { HomeComponent } from "./home/home.component";


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
    LayoutComponent,
    HomeComponent
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
export class CoreModule extends EnsureModuleLoadedOnceGuard {

  /**
   * Ensure CoreModule is only loaded into AppModule
   * @Optional() means that the parameter is optional
   * @SkipSelf() means that we should look for the parent module in the module hierarchy.
   *             At runtime, Angular will start at the module that imports CoreModule,
   *               and there should be no parent module at this point.
   *             If there is a parent module, then we throw an error.
   * This is how we detect that CoreModule is imported in the AppModule only.
   * @param parentModule
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}
