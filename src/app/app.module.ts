import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SecureComponent } from './secure/secure.component';

import { NotFoundComponent } from './not-found/not-found.component';

import { SharedModule } from "./shared/shared.module";

import {ConfigService} from "./config.service";
import {LoggerService} from "./core/services/logger.service";
import {PlainLoggerService} from "./core/services/plain-logger.service";
import {DataService} from "./core/services/data.service";
import {dataServiceFactory} from "./core/services/data.service.factory";
import {CentralizedErrorHandlerService} from "./core/services/centralized-error-handler.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from "./core/services/interceptors";


export const configFactory = (configService: ConfigService) => {
    return () => configService.loadConfig();
}

@NgModule({
    declarations: [
        AppComponent,
        SecureComponent,
        AdminDashboardComponent,
        UserDashboardComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        SharedModule, // imports the modules that are shared across the entire application which avoids circular dependency issues
    ],
    providers: [
        httpInterceptorProviders,
        { // This is used to load the configuration before the application starts
            provide: APP_INITIALIZER,
            useFactory: configFactory,
            deps: [ConfigService],
            multi: true,
        },
        // {
            // when some code requests an error handler, I'll configure the module's injector to provide the CentralizedErrorHandlerService
            // provide: ErrorHandler, useClass: CentralizedErrorHandlerService
            // test this by adding a throw new Error('test'); in the constructor of the AppComponent
        // }



        // Option 1: provide the service using the shorthand syntax
        // LoggerService

        // Option 2: provide the service using the verbose syntax
        // { provide: LoggerService, useClass: LoggerService }, // a more verbose way of providing the service as above

        // Option 3: when the provider token LoggerService is injected into a component, then the PlainLoggerService will be injected
        // { provide: LoggerService, useClass: PlainLoggerService },
        /**
         * all of the components that are currently requesting the LoggerService
         *   will be injected with
         *     the PlainLoggerService instead
         * this will work because
         *   both classes implement
         *     the same interface
         */

        /**
         * useExisting recipe
         * now let's say that the PlainLoggerService was built as a replacement for the LoggerService
         * we provide the PlainLoggerService using the shorthand syntax
         * then use the useExisting property
         *   to tell Angular
         *    to use the PlainLoggerService
         *      instead of the LoggerService
         *        to make sure that the PlainLoggerService is also used
         *          anywhere that the LoggerService is requested
         */
        // PlainLoggerService,
        // { provide: LoggerService, useExisting: PlainLoggerService },



        // Option 4: use the useValue recipe
        /**
         * useValue recipe doesn't use the new keyword to create a new instance of a class
         * it uses whatever value I give it right here in the provider
         * the api for the LoggerService defines 2 methods
         *   so I'm going to assign an object literal to the useValue property
         *     that has the same 2 methods
         * This object literal will now be passed to all of the constructors requesting a LoggerService instance
         */
        // {
        //     provide: LoggerService,
        //     useValue: {
        //         log: () => console.log(`MESSAGE: ${message}`),
        //         trace: () => console.trace(`TRACE: ${message}`),
        //         error: () => console.error(`ERROR: ${message}`)
        //     }
        // },

        // Option 5: use the useFactory recipe
        /**
         * a service factory function is a function that returns an instance of a service
         *
         */
        // { provide: DataService, useFactory: dataServiceFactory, deps: [LoggerService]}

        /**
         * Any service provided inside any module
         *   that is not lazy loaded
         *     is added to the application's root injector
         *     and is available to all of the application's components
         *     which means that the service
         *       may be used anywhere
         *         in the application
         *
         */
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
