import styled from "styled-components";

interface MoviesCardProps {
  cartPageOn: boolean;
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
  @media (min-width: 600px) {
    margin-right: ${(props) => (props.cartPageOn ? "250px" : "none")};
  }
  transition: margin-right 0.5s;
`;

interface PageBoxProps {
  cartPageOn: boolean;
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
  @media (min-width: 600px) {
    margin-right: ${(props) => (props.cartPageOn ? "250px" : "none")};
  }
  transition: margin-right 0.5s;
`;
