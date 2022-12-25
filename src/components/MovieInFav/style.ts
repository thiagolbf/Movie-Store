import styled from "styled-components";

export const FavMovieInsideBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5px;
  font-family: var(--roboto);
  font-size: 12px;
  font-weight: 700;

  > img {
    width: 40px;
    height: 35px;
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

    > button {
      background-color: transparent;
      border: none;
      margin: 0 5px;
    }
  }
`;
