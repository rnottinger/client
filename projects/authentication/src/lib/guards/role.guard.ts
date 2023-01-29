import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from "../authentication.service";


/**
 * This guard is used to check
 *   if the user
 *     has the required role
 *       to access the route
 */
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {

    // TODO: instead of just checking if the user is logged in, we also check if the user has the required role
    const token = this.authenticationService.getLoggedUser();

    // console.log(route.data);
    // const expectedRole = route.data["expectedRole"];
    //
    // if (currentUser.token === expectedRole) {
    //     return true;
    // }

    if (token) {
      return true;
    }

    // The user is not logged in so the secure route is not accessible
    this.router.navigate(['/home']);
    return false;
  }
  
}
