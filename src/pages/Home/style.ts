import styled from "styled-components";

export const MoviesCard = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-around;
  align-items: center;

  > div {
    margin: 20px 40px;
  }
`;

export const PageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-family: var(--roboto);
  > button {
    margin: 0 10px;
    padding: 5px;
  }
`;
