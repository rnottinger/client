import {Reader} from "./shared/models/reader";
import {Book} from "./shared/models/book";

/**
 * This file contains some hard-coded data for the app
 *   that we can use
 *     until we get the app
 *       wired up to the api.
 */
export const allReaders: Reader[] = [
    { readerID: 1, name: 'Marie', weeklyReadingGoal: 400, totalMinutesRead: 5600 },
    { readerID: 2, name: 'Daniel', weeklyReadingGoal: 210, totalMinutesRead: 3000 },
    { readerID: 3, name: 'Lanier', weeklyReadingGoal: 140, totalMinutesRead: 600 },
    { readerID: 4, name: 'Tessa', weeklyReadingGoal: 140, totalMinutesRead: 600 },
];

export const allBooks: Book[] = [
    { bookID: 1, title: 'Goodnight Moon', author: 'Margaret Wise Brown', publicationYear: 1953 },
    { bookID: 2, title: 'Winnie-the-Pooh', author: 'A. A. Milne', publicationYear: 1926 },
    { bookID: 3, title: 'Where the Wild Things Are', author: 'Maurice Sendak', publicationYear: 1963 },
    { bookID: 4, title: 'The Hobbit', author: 'J. R. R. Tolkien', publicationYear: 1937 },
    { bookID: 5, title: 'Curious George', author: 'H. A. Rey', publicationYear: 1941 },
    { bookID: 6, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', publicationYear: 1865 },
    { bookID: 7, title: 'The Cat in the Hat', author: 'Dr. Seuss', publicationYear: 1957 }
];
