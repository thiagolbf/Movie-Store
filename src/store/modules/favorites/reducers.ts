import { ADD_TO_FAV } from "./actionTypes";

interface Action {
  type: string;
  payload: Movie;
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

export const addToFavReducer = (state = [], action: Action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return action.payload;

    default:
      return state;
  }
};
