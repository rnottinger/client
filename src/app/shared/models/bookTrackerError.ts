/**
 * This is a model class that represents an error that occurs in the application.
 *
 * I want to make sure
 *   an instance of this class
 *     gets returned to
 *       the calling component
 *         instead of the HttpErrorResponse object
 *
 * 1. Import the BookTrackerError class into the book.service.ts file
 * 2. Also import a couple of more things from RxJs that will help me
 *      process the error
 *        returned from the server
 *        - throwError function from rxjs
 *        - catchError operator from rxjs/operators
 * 3. Update the getAllBooks method
 *      to apply the catchError operator
 *        to the Observable returned from the HttpClient.get method
 *        - pipe the catchError operator to the Observable
 *            the operator will give me a place
 *              to handle any errors
 *                that get returned
 *                  from the server
 *            and send my new custom error type
 *              back to the calling component
 *
 */
export class BookTrackerError {
  errorNumber: number = 100;
  // a technical message about the error
  message: string = 'An error occurred retrieving data.';
  // a user-friendly message about the error that I can display to users
  friendlyMessage: string = 'An error occurred retrieving data.';
}

/**
 * Example of a custom error handler
 */

// this.dataService.getAllReaders()
//     .subscribe(
//         (data: Reader[] | BookTrackerError) => this.allReaders = <Reader[]>data,
//         (err: BookTrackerError) => this.loggerService.log(err.friendlyMessage),
//         () => this.loggerService.log('All done getting readers.')
//     );

// getAllReaders(): Observable<Reader[] | BookTrackerError> {
//     return this.http.get<Reader[]>('/api/errors/500')
//         .pipe(
//             catchError(this.handleError()
//         );
// }

// HttpErrorResponse class is included in HttpClientModule
// this handleError method returns an Observable of type BookTrackerError
// private handleError(error: HttpErrorResponse): Observable<BookTrackerError> {
//     const dataError = new BookTrackerError();
//     dataError.errorNumber = 100;
//     dataError.message = error.statusText;
//     dataError.friendlyMessage = 'An error occurred retrieving data.';

// to wrap this new BookTrackerError object inside of an Observable
//   that can be returned to the calling component
//     I return the result of calling the throwError function
//       and pass it the BookTrackerError instance
//     return throwError(dataError);
// }
