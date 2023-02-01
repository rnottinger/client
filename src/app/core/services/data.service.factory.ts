import { LoggerService } from "./logger.service";
import { DataService} from "./data.service";

/**
 * The factory function is just a function that will be executed
 *   to create a new DataService instance
 * By writing a custom function, rather than just letting Angular use the new keyword
 *   to instantiate an instance, I have more control over how it gets created
 */

export function dataServiceFactory(logger: LoggerService): DataService {
    let dataService: DataService = new DataService(logger);

    // do more stuff to configure the service if necessary
    //   maybe by setting some properties on the service
    logger.log('Creating a new data service with a factory function');

    return dataService;
  // return new DataService(loggerService);
}
