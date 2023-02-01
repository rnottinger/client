import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {catchError, EMPTY, Observable, throwError} from 'rxjs';
import { AuthenticationService } from "../authentication.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
        .pipe(
            catchError((err: HttpErrorResponse) => {
              if (err.status === 401) {
                this.handle401(err);
              }

              const error = err.error.message || err.statusText;
              return throwError(error);
            })
        );
  }

  /** 401 Unauthorized */
  private handle401(err: HttpErrorResponse) {
    const authResHeader = err.headers.get('WWW-Authenticate');
    if (!!authResHeader && /is expired/.test(authResHeader)) {
      console.log('Session expired');
      this.authenticationService.signIn(); // Token expired, sign in again
    } else {
      console.log('Unauthorized');// Unauthorized, sign out
      this.authenticationService.logout();
    }
    return EMPTY;
  }
}
