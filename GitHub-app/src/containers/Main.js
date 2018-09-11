import React, { Component } from "react";
import { SearchInput } from "../components/SearchInput";
import { UserInfo } from "../components/UserInfo";
import { Loader } from "../components/Loader";
import { Repos } from "../components/Repos";
import { connect } from "react-redux";
import { fetchInfo, fetchRepos } from "../actions/infoActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { userInput: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFetchUserInfo = this.handleFetchUserInfo.bind(this);
  }

  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };
// "enter" click event on search button
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleFetchUserInfo();
    }
  };

  handleFetchUserInfo = () => {
    this.props.fetchRepos(this.state.userInput);
    this.props.fetchInfo(this.state.userInput);
    // reset input value after click search button
    const userInputValue = document.getElementById("search");
    userInputValue != null ? (userInputValue.value = "") : null;
  };

  render() {
    return (
      <div>
        <h1>GitHub App</h1>
        <SearchInput
          onChange={this.handleChange}
          onClick={this.handleFetchUserInfo}
          onKeyPress={this.handleKeyPress}
        />
        <UserInfo user={this.props.info} />
        <Repos repos={this.props.repos} />
        {this.props.isFetching ? <Loader /> : null}
      </div>
    );
  }
}

Main.propTypes = {
  fetchInfo: PropTypes.func.isRequired,
  fetchRepos: PropTypes.func.isRequired
};

// connect react with redux
const mapStateToProps = state => ({
  info: state.info.info,
  isFetching: state.isFetching.isFetching,
  repos: state.repos.repos
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchInfo, fetchRepos }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
