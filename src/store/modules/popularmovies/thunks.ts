import { getPopularMovies } from "./actions";
import { Dispatch } from "redux";

import { moviesApi } from "../../../services";

interface State {
  popularmovies: PopularMovieProps;
}

interface PopularMovieProps {
  page: number;
  total_pages: number;
  results: Movie[];
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

export const searchPopularMoviesThunk =
  (letter: string, page: number) =>
  (dispatch: Dispatch, getstate: () => State) => {
    const teste = getstate();

    if (letter === "") {
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
    } else {
      moviesApi
        .get(
          `movie/popular?api_key=41c0ef2437f7b84f0296214347b788c7&language=pt-BR&page=${page}`
        )
        .then((res) => {
          const filter = res.data.results.filter((element: Movie) => {
            return element.title.toLowerCase().includes(letter.toLowerCase());
          });
          const novo = {
            page: teste.popularmovies.page,
            total_pages: teste.popularmovies.total_pages,
            results: filter,
          };
          dispatch(getPopularMovies(novo));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
