import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

import {AuthenticationService} from "../authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
      private router: Router,
      private authenticationService: AuthenticationService ) {
  }
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.authenticationService.getLoggedUser();

    if (token) {
      return true;
    }

    /**
     * If the user is not logged in
     *   then redirect to the /login page
     */
    this.router.navigate(['/login']); return false;
  }
  
}
