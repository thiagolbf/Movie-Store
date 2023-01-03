import { CartPage } from "../Cart";
import { FavPage } from "../Favorites";

import { Header, InputSearch, IconsContainer } from "./style";

import { AiFillHeart } from "react-icons/ai";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { openCartSideBarThunk } from "../../store/modules/cartmodal/thunks";
import { openFavSideBarThunk } from "../../store/modules/favmodal/thunks";
import { searchPopularMoviesThunk } from "../../store/modules/popularmovies/thunks";

interface StoreProps {
  cartsidebar: boolean;
  favsidebar: boolean;
  popularmovies: AllData;
  moviescart: Movie[];
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

export const HeaderComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const [favPage, setFavPage] = useState(false);
  const [cartPage, setCartPage] = useState(false);
  const cartSideBar = useSelector((store: StoreProps) => store.cartsidebar);
  const favSideBar = useSelector((store: StoreProps) => store.favsidebar);
  const movies = useSelector((store: StoreProps) => store.popularmovies);
  const moviesCart = useSelector((store: StoreProps) => store.moviescart);
  const valor = moviesCart.length;

  return (
    <>
      <Header>
        <h3
          onClick={() => {
            dispatch(openCartSideBarThunk(false, setCartPage));
            dispatch(openFavSideBarThunk(false, setFavPage));
            navigate("/");
          }}
        >
          LOGO
        </h3>

        <InputSearch>
          <input
            placeholder="Pesquisar"
            onChange={(e) =>
              dispatch(searchPopularMoviesThunk(e.target.value, movies.page))
            }
          />
          <AiOutlineSearch size={20} />
        </InputSearch>

        <IconsContainer qtyCart={!!valor}>
          <button
            onClick={() => {
              dispatch(openCartSideBarThunk(false, setCartPage));
              dispatch(openFavSideBarThunk(!favPage, setFavPage));
            }}
          >
            <AiFillHeart size={20} />
          </button>

          <button
            onClick={() => {
              dispatch(openFavSideBarThunk(false, setFavPage));
              dispatch(openCartSideBarThunk(!cartPage, setCartPage));
            }}
          >
            <AiOutlineShoppingCart size={20} />
          </button>
          <div>{valor}</div>
        </IconsContainer>
      </Header>
      {cartSideBar && !favSideBar ? (
        <CartPage setCartPage={setCartPage} setFavPage={setFavPage} />
      ) : null}
      {favSideBar ? <FavPage /> : null}
    </>
  );
};
