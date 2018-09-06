import {
  FETCH_INFO,
  FETCH_REPOS,
  FETCH_INFO_REQUEST,
  FETCH_REPO_REQUEST
} from "../actions/types";

const initialState = {
  info: [],
  repos: [],
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_INFO_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_INFO:
      return {
        ...state,
        isFetching: false,
        info: action.payload
      };
    case FETCH_REPO_REQUEST:
      return {
        ...state,
        isFetching: true
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
