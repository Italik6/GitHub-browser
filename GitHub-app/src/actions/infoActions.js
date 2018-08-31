import { FETCH_INFO, FETCH_REPOS } from "./types";
import axios from "axios";

export const fetchInfo = userInput => dispatch => {
  let url = `https://api.github.com/users/${userInput}`;
  fetch(url)
    .then(res => res.json())
    .then(info =>
      dispatch({
        type: FETCH_INFO,
        payload: info
      })
    );
};

export const fetchRepos = userInput => dispatch => {
  // const url = api.baseUrl + self.state.userInput;
  let url = `https://api.github.com/users/${userInput}/repos`;
  fetch(url)
    .then(res => res.json())
    .then(repos =>
      dispatch({
        type: FETCH_REPOS,
        payload: repos
      })
    )
    .catch(function(error) {
      // handle error
      alert(error);
    });
};
