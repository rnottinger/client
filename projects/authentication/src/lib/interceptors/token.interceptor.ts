import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from "../authentication.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
      private authenticationService: AuthenticationService
  ) { }

  /**
   * Intercept each request
   *   and add the token
   *     of the authenticated user
   *       to the header
   *         so the backend api
   *           can validate each request
   *             and send the intended response
   *               which contains the result of the request
   *                 to the front end
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = this.authenticationService.getLoggedUser();

    if (token) {
      request = request.clone(
          {
            setHeaders:
                {
                  Authorization: `Bearer ${token}`
                }
          }
      );
    }

    // If the user is not logged in, then request token
    return next.handle(request);
  }
}
