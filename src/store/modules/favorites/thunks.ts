import { addFav } from "./action";
import { Dispatch } from "redux";
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
export const addFavThunk = (movieSelect: Movie) => (dispatch: Dispatch) => {
  dispatch(addFav(movieSelect));
};
