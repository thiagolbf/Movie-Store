import { useDispatch } from "react-redux";
import { removeCartThunk } from "../../store/modules/cart/thunks";

import { CartMovieInsideBox } from "./style";

import { BiTrash } from "react-icons/bi";

interface MovieInCartComponentProps {
  title: string;
  image: string;
  quantity: number;
  price: number;
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

export const MovieInEndCartComponent = ({
  title,
  image,
  quantity,
  price,
  movieSelected,
}: MovieInCartComponentProps) => {
  const dispatch = useDispatch<any>();

  return (
    <>
      <CartMovieInsideBox>
        <img src={`https://image.tmdb.org/t/p/w200//${image}`} alt="poster" />
        <div>
          <p className="movieTitle">{title}</p>
          <p>{quantity}</p>
          <p>R$ {price}</p>

          <button onClick={() => dispatch(removeCartThunk(movieSelected))}>
            <abbr title="Remover do carrinho">
              <BiTrash size={20} />
            </abbr>
          </button>
        </div>
      </CartMovieInsideBox>
    </>
  );
};
