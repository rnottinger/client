import { Injectable } from '@angular/core';

/**
 * This service is used to log messages to the console.
 *
 * We need to provide this service to Angular's dependency injection system.
 * I want it available everywhere in the application,
 *   so I'm going to provide it
 *     to the AppModule Injector.
 *       app.module.ts > providers: [LoggerService]
 * Now that I have provided the service to an Injector
 *   I'm ready to use it by injecting it into a component.
 *
 *   providedIn: 'root' will effectively behave
 *     the same as adding this service
 *       to the providers array in the AppModule
 *     however providing the service this way is tree shakeable
 *       which means that if this service
 *         is not used in the application
 *           it will not be included
 *             in the final bundle
 */
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

    /**
    * Log the current time with a simple message
    *   to the console
    * @param message
    */
    log(message: string) {
        const timeString: String = new Date().toLocaleTimeString();
        console.log(`[${timeString}] ${message}`);
    }


    /**
     * Log the current time with a simple message
     *   and also output a stack trace
     *     to the console
     * @param message
     */
    trace(message: string) {
        const timeString: String = new Date().toLocaleTimeString();
        console.trace(`[${timeString}] ${message}`);
    }

    error(message: string): void {
        const timeString: String = new Date().toLocaleTimeString();
        console.error(`ERROR: [${timeString}] ${message}`);
    }
}
