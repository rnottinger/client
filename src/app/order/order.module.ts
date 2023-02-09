import { NgModule } from '@angular/core';

import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { OrderRoutingModule } from "./order-routing.module";


/**
 *
 */
@NgModule({
    declarations: [
        OrderRoutingModule.components
    ],
    imports: [
        ReactiveFormsModule,
        SharedModule,
        OrderRoutingModule
    ],
    exports: [],
    providers: []
})
export class OrderModule { }
