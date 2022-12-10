import { openCartSideBar } from "./action";
import { Dispatch } from "redux";

export const openCartSideBarThunk =
  (
    page: boolean,
    setPageState: React.Dispatch<React.SetStateAction<boolean>>
  ) =>
  (dispatch: Dispatch) => {
    dispatch(openCartSideBar(page));
    setPageState(page);
  };
