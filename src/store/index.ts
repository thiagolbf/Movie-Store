import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { popularMoviesReducer } from "./modules/popularmovies/reducers";
import { genresReducer } from "./modules/genres/reducers";

const reducers = combineReducers({
  popularmovies: popularMoviesReducer,
  genres: genresReducer,
});

export const store = legacy_createStore(reducers, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
