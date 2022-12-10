import { CART_SIDE_BAR } from "./actionTypes";

interface Action {
  type: string;
  payload: boolean;
}

export const cartSideBarReducer = (state = false, action: Action) => {
  switch (action.type) {
    case CART_SIDE_BAR:
      return action.payload;

    default:
      return state;
  }
};
