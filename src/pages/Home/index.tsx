import { MoviesCard } from "./style";

import { useSelector } from "react-redux";
import { store } from "../../store";

import { MovieCardComponent } from "../../components/MovieCard";
interface StoreProps {
  popularmovies: Movie[];
  genres: Genre[];
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

interface Genre {
  id: number;
  name: string;
}

export const HomePage = () => {
  const movies = useSelector((store: StoreProps) => store.popularmovies);
  const genres = useSelector((store: StoreProps) => store.genres);

  return (
    <>
      <MoviesCard>
        {movies.map((element) => {
          const arrGenres = [];
          for (let i = 0; i < element.genre_ids.length; i++) {
            for (let x = 0; x < genres.length; x++) {
              if (element.genre_ids[i] === genres[x].id) {
                arrGenres.push(genres[x]);
              }
            }
          }

          return (
            <MovieCardComponent
              image={element.poster_path}
              releaseDate={element.release_date}
              title={element.title}
              average={element.vote_average}
              genre={arrGenres}
              key={element.id}
            />
          );
        })}
      </MoviesCard>
    </>
  );
};
