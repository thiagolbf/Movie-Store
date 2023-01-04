import styled from "styled-components";

interface CartResumeProps {
  cartPageOn: boolean;
  favPageOn: boolean;
}

export const CartResumeBox = styled.div<CartResumeProps>`
  padding: 30px;
  @media (min-width: 675px) {
    margin-right: ${(props) =>
      props.cartPageOn || props.favPageOn ? "280px" : "none"};
  }
  transition: margin-right 0.5s;
`;

export const FormBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 40px;

  form {
    width: 320px;
    > h2 {
      font-family: var(--roboto);
      text-transform: capitalize;
      color: var(--grey);
      font-weight: 700;
      padding: 5px;
    }
    > span {
      font-family: var(--roboto);
      width: 45%;
      display: block;
      color: var(--red);
      font-size: 0.6em;
      padding: 0 5px;
      margin: 1.5px 1px;
    }
  }
  > div {
    width: 320px;

    ul {
      display: flex;
      width: 100%;
      font-family: var(--roboto);
      font-size: 0.7em;
      font-weight: 700;
      text-transform: capitalize;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
      margin-bottom: 5px;

      li {
        max-width: 15ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        text-align: left;
      }
      li.movieTitle {
        margin-left: 20px;
        width: 85%;
      }
    }
  }
`;

export const MoviesCartBox = styled.div`
  width: 100%;
  height: 15vh;
  overflow-x: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
    background-color: var(--grey);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--black);
    border-radius: 50px;
  }
`;

export const EndCart = styled.div`
  display: flex;

  margin-bottom: 10px;
  font-family: var(--roboto);
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;

  > p {
    margin: 30px 0;
  }

  > span {
    margin: 30px 0;
  }

  > button {
    width: 100%;
    margin: auto;

    text-transform: capitalize;

    background-color: var(--lightBlue);
    color: var(--white);
    border-radius: 2px;
    border: 3px solid transparent;
    outline: none;
    padding: 7px;
  }
`;
