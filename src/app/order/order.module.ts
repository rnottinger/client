import { NgModule } from '@angular/core';

import { OrderComponent } from "./order.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";


/**
 *
 */
@NgModule({
  declarations: [
      OrderComponent
  ],
  imports: [
      RouterModule,
      SharedModule // since we are importing the SharedModule, we don't need to import CommonModule
  ],
  exports: [],
  providers: []
})
export class OrderModule { }
