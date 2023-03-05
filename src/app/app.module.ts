import { APP_INITIALIZER, NgModule, isDevMode } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

import { httpInterceptorProviders } from "./core/interceptors";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";

import { AppRoutingModule } from "./app-routing.module";

import { AuthenticationModule } from "../../projects/authentication/src/lib/authentication.module";
import { ConfigService } from "./core/services/config.service";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/**
 * Configure
 *   - the login api endpoint
 *   - and the first page the user is taken to after they login
 *       which is the user route
 */
export const AUTHENTICATION_CONFIG = {
  authEndpoint: '/oauth/token',
  initialPage: "user" // by route
};

export const configFactory = (configService: ConfigService) => {
    return () => configService.loadConfig();
}

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AuthenticationModule.forRoot(AUTHENTICATION_CONFIG),
        AppRoutingModule,
        HttpClientModule,
        CoreModule,
        SharedModule,

        StoreModule.forRoot(
          reducers,
          {
            metaReducers
          }
        ),
        StoreDevtoolsModule.instrument(
          {
            maxAge: 25,
            logOnly: !isDevMode()
          }
        ),
      // eventually we will import this in feature modules instead of here
    ],
    exports: [
        AppRoutingModule,
        AuthenticationModule,
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
