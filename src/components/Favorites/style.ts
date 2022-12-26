import styled from "styled-components";

export const FavPageBox = styled.div`
  height: 94vh; /* 100% Full-height */
  width: 280px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  /* z-index: 1;  */ /* Stay on top */
  top: 6vh; /* Stay at the top */
  right: 0;
  background-color: var(--white); /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  /* padding-top: 60px;  */
  /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  border-left: 1px solid var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FavHeader = styled.div`
  display: flex;
  text-transform: capitalize;
  font-family: var(--roboto);
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
  font-weight: 700;
  > p {
    margin-left: 10px;
  }

  > button {
    margin-right: 10px;
    background-color: transparent;
    border: 0px solid transparent;
    border-bottom: 0.5px solid blue;
    color: blue;
  }
`;

export const FavCartBox = styled.div`
  width: 100%;
  height: 85vh;
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
