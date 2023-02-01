import {Inject, Injectable} from '@angular/core';
import {debug, RxJsLoggingLevel} from "./common/debug";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {LibraryConfig} from "./models/config";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "../../../../src/app/config.service";

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

  login(user: any): Observable<any> {
    const data = {
      username: user.email,
      password: user.password,
      grant_type: 'password',
      client_id: this.configService.config.client_id,
      client_secret: this.configService.config.client_secret,
      scope: '*'
    };

    const apiUrl = this.configService.config.apiUrl + this.authSettings.authEndpoint;
    return this.http.post<any>(apiUrl, data)
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
