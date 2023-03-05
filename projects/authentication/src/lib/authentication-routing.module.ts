import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PublicComponent } from "./components/public/public.component";
import { LoginComponent } from "./components/public/login/login.component";
import { RegisterComponent } from "./components/public/register/register.component";


const routes: Routes = [
  {
    // Guest routes
    path: '',
    component: PublicComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationRoutingModule { }
