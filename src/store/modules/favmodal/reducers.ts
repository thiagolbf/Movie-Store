import { FAV_SIDE_BAR } from "./actionTypes";

interface Action {
  type: string;
  payload: boolean;
}

export const favSideBarReducer = (state = false, action: Action) => {
  switch (action.type) {
    case FAV_SIDE_BAR:
      return action.payload;

    default:
      return state;
  }
};
