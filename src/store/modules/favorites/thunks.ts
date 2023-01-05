import { addFav } from "./action";
import { Dispatch } from "redux";

interface State {
  moviesfav: Movie[];
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  populatiry: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export const addFavThunk =
  (movieSelect: Movie) => (dispatch: Dispatch, getstate: () => State) => {
    const { moviesfav } = getstate();

    const check = moviesfav.some((element) => {
      return element.id === movieSelect.id;
    });

    if (!check) {
      dispatch(addFav([...moviesfav, movieSelect]));
    } else {
      const filtered = moviesfav.filter((element) => {
        return element.id !== movieSelect.id;
      });
      dispatch(addFav(filtered));
    }
  };

export const removeAllFavThunk = () => (dispatch: Dispatch) => {
  dispatch(addFav([]));
};
