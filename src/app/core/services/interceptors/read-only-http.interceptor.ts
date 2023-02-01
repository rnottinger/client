import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {LoggerService} from "../logger.service";
import {SessionService} from "../session.service";

/**
 * This interceptor is used to prevent the user from making any changes to the data.
 * The app has a READ ONLY mode
 * Should disable input controls and buttons that allow the user to make changes to the data.
 * What if I miss one? I don't want a save request going out to the server.
 * Block PUT, POST, DELETE requests.
 * although there are some POSTs that are allowed, like login... so we need to allow those.
 * We can use the request.url to determine if the request is allowed.
 * some posts are ok, so we need to filter them.
 */
@Injectable()
export class ReadOnlyHttpInterceptor implements HttpInterceptor {

  constructor(
      private sessionService: SessionService,
      private logger: LoggerService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const readOnly = this.sessionService.isReadOnly();

    // if (!readOnly || okIfReadOnly(request)) {
    if (!readOnly || request.method === 'GET' || request.url.includes('login')) {
      return next.handle(request);
    } else {
        // this.logger.log('Read only mode - request blocked: ' + request.method + ' ' + request.url);
        // return new Observable<HttpEvent<unknown>>();

      const msg = `Error: cannot ${request.method} ${request.url} in read only mode`;
        this.logger.log(msg);

        return throwError(new Error(msg));
        // not calling next.handle(request) which will prevent the request from going out to the server.

    }
  }
}
