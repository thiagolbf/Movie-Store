import styled from "styled-components";

export const MovieCard = styled.div`
  width: 200px;
  height: max-content;
  border: 3px solid var(--lightGrey);
  text-align: center;
  font-family: var(--roboto);

  > h4 {
    text-align: center;
    margin: 5px 0;
  }

  > p {
    margin: 5px 0;
    font-size: 12px;
  }

  button {
    width: 100%;

    background-color: var(--lightBlue);
    color: var(--white);
    border-radius: 2px;
    border: 3px solid transparent;
    outline: none;
    padding: 7px;
  }
`;

interface BackgroundImageProps {
  image: string;
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  height: 200px;

  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/w200${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;

  > svg {
    align-self: flex-end;
    color: var(--white);
  }

  > p {
    color: var(--white);
    text-align: center;
    position: relative;
    top: 150px;
  }
`;

export const RatedNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    font-size: 15px;
    margin: 0 5px;
  }
  > div {
    font-size: 12px;
    margin: 0 5px;

    span {
      margin: 2px;
      display: inline-block;
    }
  }
`;
