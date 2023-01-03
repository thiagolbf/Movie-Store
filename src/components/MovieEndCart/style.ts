import styled from "styled-components";

export const CartMovieInsideBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5px;
  font-family: var(--roboto);
  font-size: 12px;
  font-weight: 700;
  margin: 2px 0;

  > img {
    width: 80px;
    height: 70px;
  }

  > div {
    display: flex;
    width: 100%;

    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    > p {
      max-width: 15ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    > p.movieTitle {
      text-align: left;
      margin-left: 5px;
    }

    > button {
      background-color: transparent;
      border: none;
    }
  }
`;
