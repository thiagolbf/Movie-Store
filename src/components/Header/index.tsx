import { CartPage } from "../Cart";
import { FavPage } from "../Favorites";

import { Header, InputSearch, IconsContainer } from "./style";

import { AiFillHeart } from "react-icons/ai";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openCartSideBarThunk } from "../../store/modules/cartmodal/thunks";
import { openFavSideBarThunk } from "../../store/modules/favmodal/thunks";

interface StoreProps {
  cartsidebar: boolean;
  favsidebar: boolean;
}

export const HeaderComponent = () => {
  const dispatch = useDispatch<any>();

  const [favPage, setFavPage] = useState(false);
  const [cartPage, setCartPage] = useState(false);
  const cartSideBar = useSelector((store: StoreProps) => store.cartsidebar);
  const favSideBar = useSelector((store: StoreProps) => store.favsidebar);
  const valor = 0;

  return (
    <>
      <Header>
        <h3>LOGO</h3>

        <InputSearch>
          <input
            placeholder="Pesquisar"
            onChange={(e) => console.log(e.target.value)}
          />
          <AiOutlineSearch size={20} />
        </InputSearch>

        <IconsContainer>
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
          {valor >= 1 ? <div>{valor}</div> : <div>0</div>}
        </IconsContainer>
      </Header>
      {cartSideBar && !favSideBar ? <CartPage /> : null}
      {favSideBar ? <FavPage /> : null}
    </>
  );
};
