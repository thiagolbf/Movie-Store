import { FavMovieInsideBox } from "./style";

import { BiTrash } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
export const MovieInFavComponent = () => {
  return (
    <>
      <FavMovieInsideBox>
        <img
          src="https://image.tmdb.org/t/p/w200//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
          alt="poster"
        />
        <div>
          <p>Nome do Filmedddd</p>

          <p>R$9,99</p>
          <button>
            <abbr title="Adicionar ao carrinho">
              <AiOutlineShoppingCart size={20} color={"#1CBAA4"} />
            </abbr>
          </button>
          <button>
            <abbr title="Remover favoritos">
              <BiTrash size={20} />
            </abbr>
          </button>
        </div>
      </FavMovieInsideBox>
    </>
  );
};
