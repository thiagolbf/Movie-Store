import styled from "styled-components";

export const CartPageBox = styled.div`
  height: 94vh; /* 100% Full-height */
  width: 250px; /* 0 width - change this with JavaScript */
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

  > div {
    position: fixed;
    bottom: 0;
    margin-bottom: 50px;
  }
`;
