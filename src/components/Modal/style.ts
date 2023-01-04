import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 10;
  top: -0px;
  left: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(18, 18, 20, 0.5);

  font-family: var(--roboto);

  > div {
    width: 320px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    border: 2px solid var(--lightGrey);

    > h3 {
      margin: 20px 0;
    }
    > p {
      font-size: 0.8em;
      margin: 20px 0;
    }

    > button {
      width: 80%;
      margin: auto;

      text-transform: initial;

      background-color: var(--lightBlue);
      color: var(--white);
      border-radius: 2px;
      border: 3px solid transparent;
      outline: none;
      padding: 7px;
      margin: 20px 0;
    }
  }
`;
