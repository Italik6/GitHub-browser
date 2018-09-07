import {
  FETCH_INFO,
  FETCH_REPOS,
  FETCH_INFO_REQUEST,
  FETCH_REPO_REQUEST,
  FETCH_INFO_FAILED,
  FETCH_REPO_FAILED
} from "./types";

export const fetchInfo = userInput => dispatch => {
  let url = `https://api.github.com/users/${userInput}`;

  dispatch({ type: FETCH_INFO_REQUEST });

  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then(info => {
      dispatch({
        type: FETCH_INFO,
        payload: info
      });
    })
    .catch(error => {
      if (userInput === "") {
        alert("Enter a value to the input.");
      } else {
        alert(
          `There is no "${userInput}" user on GitHub. Try again with different value.`
        );
      }
      dispatch({
        type: FETCH_INFO_FAILED,
        payload: error
      });
    });
};

export const fetchRepos = userInput => dispatch => {
  let url = `https://api.github.com/users/${userInput}/repos`;

  dispatch({ type: FETCH_REPO_REQUEST });

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then(repos => {
      // sort array by date
      repos.sort((a, b) => {
        return a.updated_at > b.updated_at
          ? -1
          : a.updated_at < b.updated_at
            ? 1
            : 0;
      });
      dispatch({
        type: FETCH_REPOS,
        payload: repos
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: FETCH_REPO_FAILED,
        payload: error
      });
    });
};
