import { GET_GENRES } from "./actionTypes";

interface GenreProps {
  genres: Genre[];
}

interface Genre {
  id: number;
  name: string;
}

export const getGenres = (payload: GenreProps) => ({
  type: GET_GENRES,
  payload,
});
