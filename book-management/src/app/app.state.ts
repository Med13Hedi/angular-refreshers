import {Book} from "./models/book";

export interface AppState {
  readonly book: Book[]; // by convention in NgRx it is not in plural form
}
