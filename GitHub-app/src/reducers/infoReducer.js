import { FETCH_INFO, FETCH_REPOS } from "../actions/types";

const initialState = {
  info: [],
  repos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_INFO:
      return {
        ...state,
        info: action.payload
      };
    case FETCH_REPOS:
      return {
        ...state,
        repos: action.payload
      };
    default:
      return state;
  }
}
