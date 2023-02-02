import { Injectable } from '@angular/core';
import { allBooks, allReaders } from "../../shared/data";
import { IBook } from "../../shared/models/book";
import { IReader} from "../../shared/models/reader";
import { LoggerService } from "./logger.service";


/**
 * This service will be used
 *   to stub out the frontend UI
 *     with the hard-coded data
 *       from the data.ts file
 * Once the UI is working,
 *   we can build out the backend
 *     using the hard-coded data as a guide
 *   and then we can replace the hard-coded data
 *     with data from the backend
 *       and start making use of the ApiService
 *         instead of the DataService
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

    mostPopularBook: IBook = allBooks[0];

    constructor(
        private loggerService: LoggerService
    ) { }

    setMostPopularBook(popularBook: IBook): void {
      this.mostPopularBook = popularBook;
    }

    getAllReaders(): IReader[] {
      return allReaders;
    }

    // getReaderById(id: number): IReader {
    //
    //   return allReaders.find(
    //       (reader) => reader.readerID === id
    //   )
    //   // ) as IReader
    //
    // }

    getAllBooks(): IBook[] {
      return allBooks;
    }

    // getBookById(id: number): IBook {
    //   return allBooks.find(book => book.bookID === id);
    // }
}
