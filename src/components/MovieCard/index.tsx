import { MovieCard, BackgroundImage, RatedNumber } from "./style";

import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import { useDispatch } from "react-redux";

import { addCartThunk } from "../../store/modules/cart/thunks";

interface MovieCardComponentProps {
  image: string;
  releaseDate: string;
  title: string;
  average: number;
  genre: Genres[];
  movieSelected: MovieProps;
}

interface Genres {
  id: number;
  name: string;
}

interface MovieProps {
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

export const MovieCardComponent = ({
  image,
  releaseDate,
  title,
  average,
  genre,
  movieSelected,
}: MovieCardComponentProps) => {
  const dispatch = useDispatch<any>();

  return (
    <>
      <MovieCard>
        <BackgroundImage image={image}>
          <AiFillHeart size={20} />
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
        <button onClick={() => dispatch(addCartThunk(movieSelected))}>
          Adicionar
        </button>
      </MovieCard>
    </>
  );
};
