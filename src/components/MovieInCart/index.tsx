import { CartMovieInsideBox } from "./style";

import { BiTrash } from "react-icons/bi";

export const MovieInCartComponent = () => {
  return (
    <>
      <CartMovieInsideBox>
        <img
          src="https://image.tmdb.org/t/p/w200//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
          alt="poster"
        />
        <div>
          <p>Nome do Filmedddd</p>
          <p>10</p>
          <p>R$9,99</p>

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
