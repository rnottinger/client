// 1st party imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Route Guards
import { AuthenticationGuard } from "../../projects/authentication/src/lib/guards/authentication.guard";
import { RoleGuard } from "../../projects/authentication/src/lib/guards/role.guard";

// If the user requests a route that is not found
import { NotFoundComponent } from "./not-found/not-found.component";

// Import the public components from the authentication library
import { PublicComponent } from "../../projects/authentication/src/lib/components/public/public.component";
import { HomeComponent } from "../../projects/authentication/src/lib/components/public/home/home.component";
import { LoginComponent } from "../../projects/authentication/src/lib/components/public/login/login.component";
import { RegisterComponent } from "../../projects/authentication/src/lib/components/public/register/register.component";

// Import the secure components
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";

import { ROLE } from './role.enum';

const routes: Routes = [
  {
    // Guest routes
    path: '',
    component: PublicComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '',   redirectTo: 'home', pathMatch: 'full'}, // redirect to `first-component`
    ]
  },
  // Secure routes else redirect to /login
  {path: 'admin', component: AdminDashboardComponent, canActivate: [AuthenticationGuard, RoleGuard], data: {expectedRole: ROLE.ADMIN}},
  {path: 'user', component: UserDashboardComponent, canActivate: [AuthenticationGuard, RoleGuard], data: {expectedRole: ROLE.USER}},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
