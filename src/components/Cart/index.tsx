import { CartPageBox, HeaderCart, MoviesCartBox, EndCart } from "./style";

import { MovieInCartComponent } from "../MovieInCart";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { removeAllCartThunk } from "../../store/modules/cart/thunks";

interface StoreProps {
  moviescart: Cart[];
}

interface Cart {
  movie: Movie;
  qty: number;
  price: number;
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

export const CartPage = () => {
  const dispatch = useDispatch<any>();
  const moviesCart = useSelector((store: StoreProps) => store.moviescart);
  let cartValue = 0;
  return (
    <>
      <CartPageBox>
        <HeaderCart>
          <p>meu carrinho</p>
          <button onClick={() => dispatch(removeAllCartThunk())}>
            <p>Esvaziar</p>
          </button>
        </HeaderCart>
        <MoviesCartBox>
          {moviesCart?.map((element) => {
            cartValue = cartValue + element.price;
            return (
              <MovieInCartComponent
                title={element.movie.title}
                image={element.movie.poster_path}
                key={element.movie.id}
                quantity={element.qty}
                price={element.price}
                movieSelected={element.movie}
              />
            );
          })}
        </MoviesCartBox>
        <EndCart>
          <p>Total: </p>
          <span>{cartValue.toFixed(2)}</span>
          <button>finalizar compra</button>
        </EndCart>
      </CartPageBox>
    </>
  );
};
