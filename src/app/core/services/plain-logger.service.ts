import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

/**
 * Simple console.log messages with nothing fancy added to them
 */
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class PlainLoggerService implements LoggerService {


  constructor() { }

  /**
   * Log a simple message to the console
   * @param message
   */
  log(message: string): void {
    console.log(message);
  }

  /**
   * Log a simple message to the console
   *   and also output a stack trace
   * @param message
   */
  trace(message: string): void {
    console.trace(message);
  }

  /**
   * Log a simple error message to the console
   * @param message
   */
  error(message: string): void {
    console.error(message);
  }
}
