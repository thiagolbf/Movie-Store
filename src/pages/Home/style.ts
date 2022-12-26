import styled from "styled-components";

interface MoviesCardProps {
  cartPageOn: boolean;
  favPageOn: boolean;
}

export const MoviesCard = styled.div<MoviesCardProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 50px;

  > div {
    margin: 20px 40px;
  }
  @media (min-width: 675px) {
    margin-right: ${(props) =>
      props.cartPageOn || props.favPageOn ? "280px" : "none"};
  }
  transition: margin-right 0.5s;
`;

interface PageBoxProps {
  cartPageOn: boolean;
  favPageOn: boolean;
}

export const PageBox = styled.div<PageBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-family: var(--roboto);
  > button {
    margin: 0 10px;
    padding: 5px;
  }
  @media (min-width: 675px) {
    margin-right: ${(props) =>
      props.cartPageOn || props.favPageOn ? "280px" : "none"};
  }
  transition: margin-right 0.5s;
`;
