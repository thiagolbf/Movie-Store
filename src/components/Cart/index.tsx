import { CartPageBox, EndCart } from "./style";

import { MovieInCartComponent } from "../MovieInCart";

import { useSelector } from "react-redux";

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
  const moviesCart = useSelector((store: StoreProps) => store.moviescart);

  return (
    <>
      <CartPageBox>
        MEU CARRINHO
        <p>filme 1</p>
        <p>filme 2</p>
        {moviesCart?.map((element) => {
          // let qty = 0;
          // for (let i = 0; i < moviesCart.length; i++) {
          //   if (moviesCart[i].id === element.id) {
          //     qty += 1;
          //   }
          // }

          return (
            <MovieInCartComponent
              title={element.movie.title}
              image={element.movie.poster_path}
              key={element.movie.id}
              quantity={element.qty}
              price={element.price}
            />
          );
        })}
        <EndCart>
          <p>Finalizar compra</p>
          <button>finalizar compra</button>
        </EndCart>
      </CartPageBox>
    </>
  );
};
