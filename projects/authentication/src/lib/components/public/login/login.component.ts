import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../../../authentication.service";
import { Router} from "@angular/router";

import { Credentials } from "../../../models/credentials";
import { tap } from "rxjs/operators";
import { noop } from "rxjs";
import { LibraryConfig } from "../../../../../../../src/app/core/models/config";

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  error: string | null = null;

  constructor(
      private authService: AuthenticationService,
      private router: Router,
      @Inject('config') private config: LibraryConfig,
      // private store: Store<>
  ) {

    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  /**
   * Implement the login functionality
   * the goal is to use the AuthenticationService
   *   and perform a call to the login() method
   *     which makes the request to the backend
   */
  login(): void {
    // debugger
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    /**
     * validate the user email and password
     */
    const formValues: Credentials = this.loginForm.value;

    /**
     * initialPage is set in app.module.ts
     */
    this.authService.login(formValues)
      .pipe(
        // let's have a look at the user profile data that we got from the server
        // the tap() operator allows us to produce side effects in our rxjs stream
        //   as a side effect of this login stream that we have created
        //     - we want to store the profile in the store
        //     - and we also want to navigate to the home page of our application
        tap(user => {
          console.log(user);

          // Save the user profile inside the store
          // how can the login component interact with the store?
          //   just like any other Angular Service we are going to inject the store here in the constructor

          // at this point of a successful user login, we want to navigate the user to the home page
          this.router.navigate([this.config.initialPage]);// navigate by route
          // later on we are going to protect routes from unintended access by users that are not yet logged in
        })
      )
      .subscribe(
        noop, // no operation for the case of a successful login
        error => {
          // @todo: Add appropriate error handling in the case that user login has failed
          this.error = error;
          alert('Login Failed! ' + error);
        });
  }


  isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    if (control) {
      return control.touched && control.invalid;
    }
    return false;
  }
}
