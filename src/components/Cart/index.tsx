import { CartPageBox, HeaderCart, MoviesCartBox, EndCart } from "./style";

import { MovieInCartComponent } from "../MovieInCart";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { removeAllCartThunk } from "../../store/modules/cart/thunks";
import { openCartSideBarThunk } from "../../store/modules/cartmodal/thunks";
import { openFavSideBarThunk } from "../../store/modules/favmodal/thunks";

interface CartPageProps {
  setCartPage: React.Dispatch<React.SetStateAction<boolean>>;
  setFavPage: React.Dispatch<React.SetStateAction<boolean>>;
}

interface StoreProps {
  moviescart: Cart[];
  cartsidebar: boolean;
  favsidebar: boolean;
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

export const CartPage = ({ setFavPage, setCartPage }: CartPageProps) => {
  const navigate = useNavigate();
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
          <button
            onClick={() => {
              dispatch(openCartSideBarThunk(false, setCartPage));
              dispatch(openFavSideBarThunk(false, setFavPage));
              navigate("/resumecart");
            }}
          >
            finalizar compra
          </button>
        </EndCart>
      </CartPageBox>
    </>
  );
};
