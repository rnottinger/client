import { Inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { User } from "./models/user.model";
import { Credentials } from "./models/credentials";
import { ConfigService } from "../../../../src/app/core/services/config.service";
import { LibraryConfig } from "../../../../src/app/core/models/config";
// import {debug, RxJsLoggingLevel} from "./common/debug";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(

      // Inject the configuration which is set in app.module.ts
      @Inject('config') private authSettings: LibraryConfig,
      private http: HttpClient,
      private router: Router,
      private configService: ConfigService
  ) {}

  signIn() {
    console.log('Sign in clicked');
    this.router.navigate(["/login"]);
  }

  /**
   * We are pass in the credentials that the user used on the login form
   *   and we are going to make a request to the backend
   *     and we will fetch the user profile
   *       from the backend
   * and we want to take this user profile state
   *   that we are getting back from the server
   *   and we want to save it in the store
   *     because our application might need the user profile later on
   *       in order to avoid having to fetch it again from the server
   *         each time that we need it
   * @param credentials
   */
  login(credentials: Credentials): Observable<User> {

    const data = {
      username: credentials.email,
      password: credentials.password,
      grant_type: 'password',
      client_id: this.configService.config.client_id,
      client_secret: this.configService.config.client_secret,
      scope: '*'
    };

    const apiUrl = this.configService.config.apiUrl + this.authSettings.authEndpoint;

    return this.http.post<User>(apiUrl, data)
        .pipe(
            // debug( RxJsLoggingLevel.INFO, "user-begin: "),
            tap((result) => {

              localStorage.setItem("token", JSON.stringify(result.access_token));

            }),
            // debug( RxJsLoggingLevel.INFO, "user-end: ")
        );
  }

  logout(): void {
    console.log('Logout clicked');
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  getLoggedUser(): any {

    const token = localStorage.getItem("token");
    if (token) {
      return JSON.parse(token);
      // const test: any = JSON.parse(t1);
      // // console.log('Token: ' + JSON.stringify(test));
      // return test;
    }
    return null;

  }

  isUserAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }

  register(user: any): Observable<any> {
    return this.http.post(this.configService.config.apiUrl + '/register', user);
  }
}
