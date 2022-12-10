import { CartPage } from "../Cart";

import { Header, InputSearch, IconsContainer } from "./style";

import { AiFillHeart } from "react-icons/ai";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openCartSideBarThunk } from "../../store/modules/cartmodal/thunks";

interface StoreProps {
  cartsidebar: boolean;
}

export const HeaderComponent = () => {
  const dispatch = useDispatch<any>();

  const [cartPage, setCartPage] = useState(false);
  const cartSideBar = useSelector((store: StoreProps) => store.cartsidebar);
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
          <button>
            <AiFillHeart size={20} />
          </button>

          <button
            onClick={() => {
              dispatch(openCartSideBarThunk(!cartPage, setCartPage));
            }}
          >
            <AiOutlineShoppingCart size={20} />
          </button>
          {valor >= 1 ? <div>{valor}</div> : <div>0</div>}
        </IconsContainer>
      </Header>
      {cartSideBar ? <CartPage /> : null}
    </>
  );
};
