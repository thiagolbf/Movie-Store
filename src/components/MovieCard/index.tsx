import { MovieCard, BackgroundImage, RatedNumber } from "./style";

import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

interface MovieCardComponentProps {
  image: string;
  releaseDate: string;
  title: string;
  average: number;
  genre: Genres[];
}

interface Genres {
  id: number;
  name: string;
}

export const MovieCardComponent = ({
  image,
  releaseDate,
  title,
  average,
  genre,
}: MovieCardComponentProps) => {
  return (
    <>
      <MovieCard>
        <BackgroundImage image={image}>
          <AiFillHeart size={25} />
          <p>{releaseDate}</p>
        </BackgroundImage>
        <h4>{title}</h4>

        <RatedNumber>
          <AiFillStar size={30} />
          <p>{average}</p>
          <div>
            Gênero:
            {genre.map((element) => {
              return <span key={element.id}>{element.name}</span>;
            })}
          </div>
        </RatedNumber>
        <p>Valor R$9,99 </p>
        <button>Adicionar</button>
      </MovieCard>
    </>
  );
};
