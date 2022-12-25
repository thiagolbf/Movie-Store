import { useDispatch } from "react-redux";
import { addCartThunk } from "../../store/modules/cart/thunks";
import { addFavThunk } from "../../store/modules/favorites/thunks";

import { FavMovieInsideBox } from "./style";

import { BiTrash } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface MovieInFavComponentProps {
  title: string;
  image: string;
  movieSelected: MovieProps;
}

interface MovieProps {
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

export const MovieInFavComponent = ({
  image,
  title,
  movieSelected,
}: MovieInFavComponentProps) => {
  const dispatch = useDispatch<any>();

  return (
    <>
      <FavMovieInsideBox>
        <img src={`https://image.tmdb.org/t/p/w200//${image}`} alt="poster" />
        <div>
          <p>{title}</p>

          <p>R$9,99</p>
          <button onClick={() => dispatch(addCartThunk(movieSelected))}>
            <abbr title="Adicionar ao carrinho">
              <AiOutlineShoppingCart size={20} color={"#1CBAA4"} />
            </abbr>
          </button>
          <button onClick={() => dispatch(addFavThunk(movieSelected))}>
            <abbr title="Remover favoritos">
              <BiTrash size={20} />
            </abbr>
          </button>
        </div>
      </FavMovieInsideBox>
    </>
  );
};
