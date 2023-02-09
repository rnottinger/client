import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { UserRoutingModule } from "./user-routing.module";
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [  // components, directives, and pipes that are used in our UserModule
    UserRoutingModule.components
  ],
  imports: [ // things used in our UserModule
      // modules typically need to import the CommonModule but since we are exporting CommonModule from the SharedModule we don't need to import it here
    ReactiveFormsModule,
    SharedModule, // loading spinner
    UserRoutingModule
  ]
})
export class UserModule { }
