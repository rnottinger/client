import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AuthenticationGuard } from "../../../projects/authentication/src/lib/guards/authentication.guard";
import { RoleGuard } from "../../../projects/authentication/src/lib/guards/role.guard";
import { ROLE } from "../shared/role.enum";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
  {path: '', component: AdminDashboardComponent, canActivate: [AuthenticationGuard, RoleGuard], data: {expectedRole: ROLE.ADMIN}},
  {path: 'settings', component: AdminComponent, canActivate: [AuthenticationGuard, RoleGuard], data: {expectedRole: ROLE.ADMIN}},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AdminRoutingModule {
    static components = [
        AdminComponent,
        AdminDashboardComponent
    ];
}
