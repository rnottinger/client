import { Injectable, ErrorHandler } from '@angular/core';
import { BookTrackerError} from "../../shared/models/bookTrackerError";

/**
 * In order to replace the existing error handling mechanism,
 *   I need to provide this new class
 *     whenever an instance of the built-in ErrorHandler class is requested
 *       which will be done in the AppModule
 *
 */
@Injectable()
export class CentralizedErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: Error): void {
    let customError: BookTrackerError = new BookTrackerError();
    customError.errorNumber = 200;
    // customError.message = (<Error>error).message;  // assert that error is of type Error
    customError.message = error.message;  // assert that error is of type Error
    customError.friendlyMessage = 'An error occurred. Please try again.';


    // alternative to console logging
    // - post the error to the server so it can be
    //     logged
    //     or stored in the database
    console.log(customError);

  }
}
