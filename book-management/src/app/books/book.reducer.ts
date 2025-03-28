import {createReducer, on} from "@ngrx/store";
import {AddBook, RemoveBook} from "./book.actions";
import {Book} from "../models/book";
import {state} from "@angular/animations";

export const initialState: ReadonlyArray<Book> = [];

export const BookReducer = createReducer(
  initialState,
  on(AddBook, // Action
    (state, {id, title, author}) => [...state, {id, title, author}]
  ),
  on(RemoveBook, // Action
    (state, {bookId}) => state.filter(book => book.id !== bookId)
  )
);
