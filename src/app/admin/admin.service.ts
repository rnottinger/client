import { Injectable } from '@angular/core';
import { AdminModule } from "./admin.module";

@Injectable({
  providedIn: AdminModule // enables tree shaking of the service if nothing injects it
})
export class AdminService {

  constructor() { }
}
