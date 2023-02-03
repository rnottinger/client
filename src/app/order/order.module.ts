import { NgModule } from '@angular/core';

import { OrderComponent } from "./order.component";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { OrderRoutingModule } from "./order-routing.module";


/**
 *
 */
@NgModule({
  declarations: [
      OrderComponent
  ],
  imports: [
      ReactiveFormsModule,
      SharedModule,
      OrderRoutingModule
  ],
  exports: [],
  providers: []
})
export class OrderModule { }
