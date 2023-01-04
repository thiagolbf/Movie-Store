import { addCart } from "./action";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

interface State {
  moviescart: Cart[];
  popularmovies: AllData;
  genres: Genre[];
  cartsidebar: boolean;
}

interface Cart {
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
interface AllData {
  page: number;
  total_pages: number;
  results: Movie[];
}

interface Genre {
  id: number;
  name: string;
}

export const addCartThunk =
  (movieSelect: Movie) => (dispatch: Dispatch, getstate: () => State) => {
    const { moviescart } = getstate();

    const initialPrice: number = 9.99;
    const intialQuantity = 1;

    const checando = moviescart.some((element) => {
      return element.movie === movieSelect;
    });

    if (moviescart.length < 0) {
      const actualMovie = {
        price: initialPrice,
        qty: intialQuantity,
        movie: movieSelect,
      };
      toast.success("Adicionado ao carrinho");
      dispatch(addCart([actualMovie]));
    } else if (moviescart.length > 0 && checando) {
      const check = moviescart.map((element) => {
        if (element.qty >= 9 && movieSelect === element.movie) {
          toast.info("Limite máximo deste filme no carrinho");
          dispatch(addCart(check));
        } else if (element.movie.id === movieSelect.id) {
          return {
            price: parseFloat((element.price + 9.99).toFixed(2)),
            qty: element.qty + 1,
            movie: element.movie,
          };
        }
        return {
          price: element.price,
          qty: element.qty,
          movie: element.movie,
        };
      });
      toast.success("Adicionado ao carrinho");
      dispatch(addCart(check));
    } else {
      const actualMovie = {
        price: initialPrice,
        qty: intialQuantity,
        movie: movieSelect,
      };
      toast.success("Adicionado ao carrinho");
      dispatch(addCart([...moviescart, actualMovie]));
    }
  };

export const removeCartThunk =
  (movieSelect: Movie) => (dispatch: Dispatch, getstate: () => State) => {
    const { moviescart } = getstate();

    const filtered = moviescart.filter((element) => {
      return element.movie.id !== movieSelect.id;
    });

    dispatch(addCart(filtered));
  };

export const removeAllCartThunk = () => (dispatch: Dispatch) => {
  dispatch(addCart([]));
};
