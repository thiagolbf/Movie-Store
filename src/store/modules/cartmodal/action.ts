import { CART_SIDE_BAR } from "./actionTypes";

export const openCartSideBar = (payload: boolean) => ({
  type: CART_SIDE_BAR,
  payload,
});
