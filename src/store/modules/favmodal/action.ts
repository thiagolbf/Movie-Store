import { FAV_SIDE_BAR } from "./actionTypes";

export const openFavSideBar = (payload: boolean) => ({
  type: FAV_SIDE_BAR,
  payload,
});
