import { FavPageBox, FavHeader, FavCartBox } from "./style";

import { MovieInFavComponent } from "../MovieInFav";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeAllFavThunk } from "../../store/modules/favorites/thunks";

interface StoreProps {
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

export const FavPage = () => {
  const dispatch = useDispatch<any>();
  const moviesfav = useSelector((store: StoreProps) => store.moviesfav);

  return (
    <>
      <FavPageBox>
        <FavHeader>
          <p>meus favoritos</p>
          <button onClick={() => dispatch(removeAllFavThunk())}>
            <p>Esvaziar</p>
          </button>
        </FavHeader>
        <FavCartBox>
          {moviesfav?.map((element) => {
            return (
              <MovieInFavComponent
                title={element.title}
                image={element.poster_path}
                key={element.id}
                movieSelected={element}
              />
            );
          })}
        </FavCartBox>
      </FavPageBox>
    </>
  );
};
