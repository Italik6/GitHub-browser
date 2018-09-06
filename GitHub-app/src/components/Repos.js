import React, { Component } from "react";
import PropTypes from "prop-types";
import { SingleRepo } from "./SingleRepo";

export class Repos extends Component {
  render() {
    return (
      <div>
        {this.props.repos.map(b => (
          <SingleRepo key={b.id} {...b} />
        ))}
      </div>
    );
  }
}

Repos.propTypes = {
  repos: PropTypes.array
};
