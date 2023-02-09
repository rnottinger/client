import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { BusyService } from "../services/busy.service";

@Injectable()
export class BusyHttpInterceptor implements HttpInterceptor {

  constructor(
      private busyService: BusyService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const msg = request.method === 'GET' ? 'Loading...' : 'Saving...';

    // We need to show the spinner when the request starts
    this.busyService.show(msg);

    // we manipulate the response within the pipe() operator
    return next.handle(request).pipe(

        // We need to hide the spinner when the request is complete
        /**
         * the reason we want finalize() instead of finally() is that finalize() is called after the request is complete,
         * we want to shut down the spinner if anything terminates the response stream.
         *   that could be the response is complete
         *   or there was an error
         *   or somebody unsubscribed from the response stream
         *   ..and in all of those cases we want to shut down the spinner.
         */
        finalize(() => {
          this.busyService.hide();
        })
    );
  }
}
