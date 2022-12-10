import { MoviesCard, PageBox } from "./style";

import { useSelector, useDispatch } from "react-redux";
import { store } from "../../store";
import { getPopularMoviesThunk } from "../../store/modules/popularmovies/thunks";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import { MovieCardComponent } from "../../components/MovieCard";

interface StoreProps {
  popularmovies: AllData;
  genres: Genre[];
  cartsidebar: boolean;
}

interface AllData {
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

interface Genre {
  id: number;
  name: string;
}

export const HomePage = () => {
  const dispatch = useDispatch<any>();

  const movies = useSelector((store: StoreProps) => store.popularmovies);
  const genres = useSelector((store: StoreProps) => store.genres);
  const cartSideBar = useSelector((store: StoreProps) => store.cartsidebar);

  console.log(cartSideBar);

  return (
    <>
      <MoviesCard cartPageOn={cartSideBar}>
        {movies.results?.map((element) => {
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
      <PageBox cartPageOn={cartSideBar}>
        <button
          onClick={() => {
            if (movies.page > 1) {
              dispatch(getPopularMoviesThunk(movies.page - 1));
            } else {
              alert("Essa é a primeira página");
            }
          }}
        >
          <FaAngleLeft />
        </button>
        <p>Página: {movies.page}</p>
        <button
          onClick={() => {
            if (movies.page < 500) {
              dispatch(getPopularMoviesThunk(movies.page + 1));
            } else {
              alert("Essa é a última página");
            }
          }}
        >
          <FaAngleRight />
        </button>
      </PageBox>
    </>
  );
};
