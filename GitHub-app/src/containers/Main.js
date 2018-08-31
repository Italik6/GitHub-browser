import React, { Component } from "react";
import axios from "axios";
import { Loader } from "../components/Loader";
import { SearchInput } from "../components/SearchInput";
import { UserInfo } from "../components/UserInfo";
import { Repos } from "../components/Repos";

const api = {
  baseUrl: "https://api.github.com/users/"
};

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      user: {},
      loader: false,
      repos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.fetchUserInfo = this.fetchUserInfo.bind(this);
  }

  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };

  handleSearch = () => {
    this.fetchUserInfo();
  };

  handleClick = () => {
    this.fetchRepos();
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleSearch();
    }
  };
// get requests
  fetchRepos = () => {
    let self = this;
    self.setState({ loader: true });
    const url = api.baseUrl + self.state.userInput + "/repos";

    axios
      .get(url)
      .then(function(response) {
        // handle success
        self.setState({ repos: response.data, loader: false });
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  fetchUserInfo = () => {
    let self = this;
    self.setState({ loader: true });
    const url = api.baseUrl + self.state.userInput;

    axios
      .get(url)
      .then(function(response) {
        // handle success
        self.setState({ user: response.data, loader: false });
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>GitHub App</h1>
        <SearchInput
          onChange={this.handleChange}
          onClick={this.handleSearch}
          onKeyPress={this.handleKeyPress}
        />
        {this.state.loader ? <Loader /> : null}
        <UserInfo onClick={this.handleClick} user={this.state.user} />
        <Repos repos={this.state.repos} />
      </div>
    );
  }
}
