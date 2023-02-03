import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { AuthenticationGuard } from "../../../projects/authentication/src/lib/guards/authentication.guard";
import { RoleGuard } from "../../../projects/authentication/src/lib/guards/role.guard";
import { ROLE } from "../shared/role.enum";

const routes: Routes = [
  {path: '', component: UserDashboardComponent, canActivate: [AuthenticationGuard, RoleGuard], data: {expectedRole: ROLE.USER}},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class UserRoutingModule { }
