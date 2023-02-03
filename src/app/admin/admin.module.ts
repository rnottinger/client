import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";

import { AdminComponent } from "./admin.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminRoutingModule } from "./admin-routing.module";



@NgModule({
  declarations: [
      AdminComponent,
      AdminDashboardComponent
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
