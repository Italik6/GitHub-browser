import React, { Component } from "react";
import axios from "axios";
import { Loader } from "../components/Loader";
import { SearchInput } from "../components/SearchInput";
import { UserInfo } from "../components/UserInfo";
import { Repos } from "../components/Repos";
import { connect } from "react-redux";
import { fetchInfo, fetchRepos } from "../actions/infoActions";
import PropTypes from "prop-types";

const api = {
  baseUrl: "https://api.github.com/users/Italik6"
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      loader: false
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
    let userInput = this.state.userInput;
    this.props.fetchRepos(userInput);
  };

  fetchUserInfo = () => {
    let userInput = this.state.userInput;
    this.props.fetchInfo(userInput);
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
        {/* {this.state.loader ? <Loader /> : null} */}
        <UserInfo onClick={this.handleClick} user={this.props.info} />
        <Repos repos={this.props.repos} />
      </div>
    );
  }
}

Main.propTypes = {
  fetchInfo: PropTypes.func.isRequired,
  fetchRepos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  info: state.info.info,
  repos: state.repos.repos
});

export default connect(
  mapStateToProps,
  { fetchInfo, fetchRepos }
)(Main);
