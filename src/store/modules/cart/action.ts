import { ADD_TO_CART } from "./actionTypes";

interface PayloadProps {
  price: number;
  qty: number;
  movie: Movie;
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

export const addCart = (payload: PayloadProps[]) => ({
  type: ADD_TO_CART,
  payload,
});
