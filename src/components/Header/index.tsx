import { Header, InputSearch, IconsContainer } from "./style";

import { AiFillHeart } from "react-icons/ai";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

export const HeaderComponent = () => {
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

          <button>
            <AiOutlineShoppingCart size={20} />
          </button>
          {valor >= 1 ? <div>{valor}</div> : <div>0</div>}
        </IconsContainer>
      </Header>
    </>
  );
};
