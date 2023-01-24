import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicComponent} from "./public.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PublicModule { }
