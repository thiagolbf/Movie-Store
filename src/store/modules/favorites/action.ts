import { ADD_TO_FAV } from "./actionTypes";

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

export const addFav = (payload: Movie[]) => ({
  type: ADD_TO_FAV,
  payload,
});
