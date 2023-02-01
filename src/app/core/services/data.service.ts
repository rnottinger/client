import { Injectable } from '@angular/core';
import { allBooks, allReaders } from "../../data";
import { Book } from "../../shared/models/book";
import { Reader } from "../../shared/models/reader";
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

    mostPopularBook: Book = allBooks[0];

    constructor(
        private loggerService: LoggerService
    ) { }

    setMostPopularBook(popularBook: Book): void {
      this.mostPopularBook = popularBook;
    }
    getAllReaders(): Reader[] {
      return allReaders;
    }

    getReaderById(id: number): Reader {

      return allReaders.find(
          (reader) => reader.readerID === id
      ) as Reader

    }

    getAllBooks(): Book[] {
      return allBooks;
    }

    getBookById(id: number): Book {
      return allBooks.find(book => book.bookID === id) as Book;
    }
}
