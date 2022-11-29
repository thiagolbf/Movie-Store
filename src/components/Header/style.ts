import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--lightGreen);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;

  font-family: var(--roboto);

  > h3 {
    margin-left: 30px;
  }
`;

export const InputSearch = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  width: 350px;
  border: 1px solid var(--lightGrey);
  background-color: var(--white);

  > input {
    width: 100%;
    outline-style: none;
    border-style: none;
    padding: 7px;
    border-radius: 5px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  margin-right: 10px;

  > button {
    background-color: transparent;
    border: none;

    margin: 0 10px;
  }

  > div {
    background-color: var(--lightYellow);
    position: relative;
    text-align: center;
    font-size: 10px;
    right: 15px;
    bottom: 8px;
    border: 1px solid transparent;
    border-radius: 100%;
    width: 15px;
    height: 15px;
  }
`;

export const Teste = styled.div`
  background-color: blue;

  height: 95vh;
`;
