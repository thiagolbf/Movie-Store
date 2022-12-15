import { FavMovieInsideBox } from "./style";

import { BiTrash } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface MovieInFavComponentProps {
  title: string;
  image: string;
}

export const MovieInFavComponent = ({
  image,
  title,
}: MovieInFavComponentProps) => {
  return (
    <>
      <FavMovieInsideBox>
        <img src={`https://image.tmdb.org/t/p/w200//${image}`} alt="poster" />
        <div>
          <p>{title}</p>

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
