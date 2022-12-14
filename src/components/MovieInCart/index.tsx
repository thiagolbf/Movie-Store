import { CartMovieInsideBox } from "./style";

import { BiTrash } from "react-icons/bi";

interface MovieInCartComponentProps {
  title: string;
  image: string;
  quantity: number;
  price: number;
}

export const MovieInCartComponent = ({
  title,
  image,
  quantity,
  price,
}: MovieInCartComponentProps) => {
  return (
    <>
      <CartMovieInsideBox>
        <img src={`https://image.tmdb.org/t/p/w200//${image}`} alt="poster" />
        <div>
          <p>{title}</p>
          <p>{quantity}</p>
          <p>{price}</p>

          <button>
            <abbr title="Remover carrinho">
              <BiTrash size={20} />
            </abbr>
          </button>
        </div>
      </CartMovieInsideBox>
    </>
  );
};
