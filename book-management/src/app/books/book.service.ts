import { Injectable } from '@angular/core';
import {Book} from "../models/book";
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(book: Book): Observable<Book>{

    // Throw error for testing the AddBookFailure effect
    // const err = new Error("Error while returning a book");
    // return throwError(() => err)

    // for triggering AddBookSuccess
    return of(book);
  }



}
