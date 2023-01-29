import {Inject, Injectable} from '@angular/core';
import {debug, RxJsLoggingLevel} from "./common/debug";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {LibraryConfig} from "./models/config";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
      private http: HttpClient,
      private router: Router,
      // Inject the configuration which is set in app.module.ts
      @Inject('config') private config: LibraryConfig
  ) {}

  login(user: any): Observable<any> {
    // console.log('Login: ' + user.email + ' ' + user.password);
    // console.log(this.config);


    const data = {
      // username: formData.email,
      // password: formData.password,
      username: user.email,
      password: user.password,
      grant_type: 'password',
      client_id: 2,

      // hardcoding for now..this value will eventually come from an environment file
      // see Laravel --> .env --> CLIENT_2
      // or .env_example on how to generate this value
      // client_secret: '<client_secret_2>',


      scope: '*'
    };

    // console.log('Data: ' + JSON.stringify(data));

    return this.http.post<any>(this.config.authEndpoint, data)
        .pipe(
            // debug( RxJsLoggingLevel.INFO, "user-begin: "),
            tap((result) => {
              // console.log('User stored: ' + JSON.stringify(user));
              localStorage.setItem("token", JSON.stringify(result.access_token));
              // return user;
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

    const t1 = localStorage.getItem("token");
    if (t1) {
      const test: any = JSON.parse(t1);
      // console.log('Token: ' + JSON.stringify(test));
      return test;
    }
    return null;


    // console.log(JSON.parse("loggedInUser"));
  }

  isUserAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }
}
