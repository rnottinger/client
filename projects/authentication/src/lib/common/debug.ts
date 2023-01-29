/**
 * High Order function - a function that returns a function
 *   takes as its input an observable and returns back another observable
 * @param level
 * @param message
 */
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

/**
 * each call to the debug() operator needs to specify
 *      what is the logging level of the message
 *          first import RxJsLoggingLevel object in your component code
 *          then import the debug() operator
 * example:
 *   replace -> .pipe(tap(course => console.log(course)),
 *   with -> .pipe(debug( RxJsLoggingLevel.INFO, "course "),
 *
 * add extra logging statements after other operators
 *   to pass their output observable to the debug() operator
 *   switchMap(search => this.loadLessons(search)),
 *   debug( RxJsLoggingLevel.INFO, "lessons value ")
 */
export enum RxJsLoggingLevel {
    TRACE,  // define the most detailed logging level first
    DEBUG,  // the logging level used most often
    INFO,   // is for informational messages only
    ERROR,  // is for error messages only
}

/**
 * set to the default global application logging level to INFO
 *
 * in the implementation of our debug operator
 *   we compare the application logging level
 *     with the logging level of the message
 *   We output the logging message to the console
 *     only if the logging level of the message
 *       is greater than or equal to
 *         the application logging level
 */
let rxjsLoggingLevel = RxJsLoggingLevel.INFO;

/**
 * Notice that because this variable
 *   is private to this file
 *     we also need to give to the rest of the application
 *       a way of modifying this
 *         in order to decrease or increase
 *           the logging level
 */
export function setRxJsLoggingLevel(level: RxJsLoggingLevel) {
    rxjsLoggingLevel = level;
}

/**
 * Logging Logic:
 *   the logging message will always be printed out as the observable gets executed
 *   we want to conditionally output this message
 *   depending on the logging level of the message
 *   and the logging level of the application
 *   we need to define the multiple logging levels
 * @param level
 * @param message
 */
export const debug = (level: number, message: string) =>
    (source: Observable<any>) => source
        .pipe(
            tap(val => {
                // compare the logging level of the message to the application logging level
                if (level >= rxjsLoggingLevel) {
                    // console.log(message + ': ' + val);
                    // instead of concatenating the message with the value as a string
                    //   lets log the value to the console directly
                    //   this way our message will read better
                    console.log(message, val);                  // output as object in console (to expand/collapse values)
                    console.log(message, JSON.stringify(val));  // output as string in the console (view entire string)
                }
            })
        );
