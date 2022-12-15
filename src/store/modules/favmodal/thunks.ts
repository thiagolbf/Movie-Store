import { openFavSideBar } from "./action";
import { Dispatch } from "redux";

export const openFavSideBarThunk =
  (page: boolean, setFavState: React.Dispatch<React.SetStateAction<boolean>>) =>
  (dispatch: Dispatch) => {
    dispatch(openFavSideBar(page));
    setFavState(page);
  };
