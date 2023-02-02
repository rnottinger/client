import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { UserComponent } from "./user.component";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";



@NgModule({
  declarations: [
      UserComponent,
      UserDashboardComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class UserModule { }
