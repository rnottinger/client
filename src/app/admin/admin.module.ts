import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AdminComponent } from "./admin.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";



@NgModule({
  declarations: [
      AdminComponent,
      AdminDashboardComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
  ]
})
export class AdminModule { }
