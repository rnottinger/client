import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

/**
 * With this, we have simple notifications
 *   for the user
 *     when errors occur.
 *
 * We can handle server-side and client-side errors differently.
 *   Instead of notifications,
 *     we could show an error page.
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(public snackBar: MatSnackBar) { }

  showSuccess(message: string, action: string): void {
    this.snackBar.open(message, action, {panelClass: ['success']});
  }

  /**
   * Show an error message to the user.
   *
   * An error message should tell the user
   *   what the problem is/what went wrong
   *   & how to resolve it
   * @param message
   */
  showError(message: string): void {
    // The second parameter is the text in the button.
    // In the third, we send in the css class for the snack bar.
    this.snackBar.open(message, 'X', {panelClass: ['error']});
  }
}
