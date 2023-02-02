import { Injectable } from '@angular/core';
import {OrderModule} from "./order.module";

@Injectable({
  providedIn: OrderModule // enables tree shaking of the service if nothing injects it
})
export class OrderService {

  constructor() { }
}
