import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from "rxjs/operators";

/**
 * This interceptor is used to log all HTTP requests and responses.
 * An interceptor is a class that implements the HttpInterceptor interface.
 * The interface only has one method, intercept, which takes an HttpRequest and returns an Observable of HttpEvents.
 *
 * Interceptors are injected services that can modify outgoing requests and incoming responses.
 *   which means you need to add the interceptor to the providers array of the @NgModule that declares the intercepting service.
 *   you have to provide it at the same injector level where you import HttpClientModule.
 */
@Injectable()
export class LoggingHttpInterceptor implements HttpInterceptor {

  constructor() {}

  /**
   * Returns an Observable of HTTP response
   * the next.handle() method returns an Observable of HttpEvents.
   * we can pipe the result of next.handle() to add additional logic.
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.logRequest(request);
    return next.handle(request).pipe(
        tap(
            response => this.logResponse(response),
            error => this.logError(error)
        )
    );
  }

  logRequest(request: HttpRequest<unknown>) {
    console.log('Request: ' + JSON.stringify(request.url));
  }

  logResponse(response: HttpEvent<unknown>) {
    console.log('Response: ' + JSON.stringify(response));
  }

  logError(error: HttpEvent<unknown>) {
    console.log('Error: ' + error);
  }
}
