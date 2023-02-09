import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";

import { AdminRoutingModule } from "./admin-routing.module";



@NgModule({
  declarations: [
      AdminRoutingModule.components
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
