// 1st party imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Route Guards
import { AuthenticationGuard } from "../../projects/authentication/src/lib/guards/authentication.guard";
import { RoleGuard } from "../../projects/authentication/src/lib/guards/role.guard";

// If the user requests a route that is not found
import { NotFoundComponent } from "./shared/not-found/not-found.component";

// We are now using dynamic imports in routes for lazy loaded feature modules

import { ROLE } from './shared/role.enum';
import { HomeComponent } from "./core/home/home.component";

const routes: Routes = [

  {path: 'home', component: HomeComponent},

  // Lazy Load these secure routes else redirect to /login
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthenticationGuard, RoleGuard],
    data: {expectedRole: ROLE.ADMIN}
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [AuthenticationGuard, RoleGuard],
    data: {expectedRole: ROLE.USER}
  },
  {path: '',   redirectTo: 'home', pathMatch: 'full'}, // redirect to `first-component`

  // EXAMPLE: the editreader route takes a :id parameter so that the related component can load the correct reader
  // {path: 'editReader/:id', component: EditReaderComponent, canActivate: [AuthenticationGuard, RoleGuard], data: {expectedRole: ROLE.ADMIN}},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
