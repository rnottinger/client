import { Provider } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoggingHttpInterceptor } from "./logging-http.interceptor";
import { ReadOnlyHttpInterceptor } from "./read-only-http.interceptor";
import { BusyHttpInterceptor } from "./busy-http.interceptor";

/**
 * HTTP_INTERCEPTORS is an Injector Symbol/Token
 * multi: true means that you will have more than one interceptor
 * the order in which you provide...matters
 * The BusyHttpInterceptor will always be the last interceptor to run
 *   because there is no reason to show a spinner
 *     if the request is actually going to be sent to the server
 */
export const httpInterceptorProviders: Provider[] = [
    { provide: HTTP_INTERCEPTORS, useClass: LoggingHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ReadOnlyHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BusyHttpInterceptor, multi: true },
];
