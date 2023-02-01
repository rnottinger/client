import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {BusyService} from "../../core/services/busy.service";

@Component({
  selector: 'app-busy',
  templateUrl: './busy.component.html',
  styleUrls: ['./busy.component.scss']
})
export class BusyComponent {

  /** Spinner in template watches this observable */
  // busyState$: Observable<{ isBusy: boolean, message: string }>;

  busyState$ = this.busyService.busyState$;


  constructor(
      // busyService: BusyService
    private busyService: BusyService
  ) {
    // this.busyState$ = busyService.busyState$;
  }
}
