import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { popularMoviesReducer } from "./modules/popularmovies/reducers";
import { genresReducer } from "./modules/genres/reducers";
import { cartSideBarReducer } from "./modules/cartmodal/reducers";
import { favSideBarReducer } from "./modules/favmodal/reducers";
import { addToCartReducer } from "./modules/cart/reducers";
import { addToFavReducer } from "./modules/favorites/reducers";

const reducers = combineReducers({
  popularmovies: popularMoviesReducer,
  genres: genresReducer,
  cartsidebar: cartSideBarReducer,
  favsidebar: favSideBarReducer,
  moviescart: addToCartReducer,
  moviesfav: addToFavReducer,
});

export const store = legacy_createStore(reducers, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
