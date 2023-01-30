import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../authentication.service";
import {Router} from "@angular/router";
import {LibraryConfig} from "../../../models/config";

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
      @Inject('config') private config: LibraryConfig
  ) {

    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const user = this.loginForm.value;
    this.authService.login(user)
        .subscribe(
            data => {
            this.router.navigate([this.config.initialPage]);
        },
        error => {
          this.error = error;
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
