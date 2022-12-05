import { GET_GENRES } from "./actionTypes";

interface Action {
  type: string;
  payload: Genre[];
}

interface Genre {
  id: number;
  name: string;
}

export const genresReducer = (state = [], action: Action) => {
  switch (action.type) {
    case GET_GENRES:
      return action.payload;

    default:
      return state;
  }
};
