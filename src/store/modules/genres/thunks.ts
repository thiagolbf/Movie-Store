import { getGenres } from "./action";

import { Dispatch } from "redux";

import { moviesApi } from "../../../services";

export const getGenresThunk = () => (dispatch: Dispatch) => {
  moviesApi
    .get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=41c0ef2437f7b84f0296214347b788c7&language=pt-BR"
    )
    .then((res) => {
      dispatch(getGenres(res.data.genres));
    })
    .catch((err) => {
      console.log(err);
    });
};
