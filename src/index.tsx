import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { getPopularMoviesThunk } from "./store/modules/popularmovies/thunks";
import { getGenresThunk } from "./store/modules/genres/thunks";

import { store } from "./store";

store.dispatch<any>(getGenresThunk());
store.dispatch<any>(getPopularMoviesThunk(1));
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
