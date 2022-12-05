import { getPopularMovies } from "./actions";
import { Dispatch } from "redux";

import { moviesApi } from "../../../services";

export const getPopularMoviesThunk = (page: number) => (dispatch: Dispatch) => {
  moviesApi
    .get(
      `movie/popular?api_key=41c0ef2437f7b84f0296214347b788c7&language=pt-BR&page=${page}`
    )
    .then((res) => {
      dispatch(getPopularMovies(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
