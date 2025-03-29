import {createReducer, on} from "@ngrx/store";
import {AddBook, AddBookFailure, AddBookSuccess, RemoveBook} from "./book.actions";
import {Book} from "../models/book";

export const initialState: Book[] = [];

export const BookReducer = createReducer(
  initialState,
  on(AddBook, // Action
    (state) => state
  ),
  on(AddBookSuccess, // Action
    (state, {id, title, author}) => [...state, {id, title, author}]
  ),
  on(AddBookFailure, // Action
    (state, {error}) => {
      console.error(error);
      return state;
    }
  ),


  on(RemoveBook, // Action
    (state, {bookId}) => state.filter(book => book.id !== bookId)
  )
);
