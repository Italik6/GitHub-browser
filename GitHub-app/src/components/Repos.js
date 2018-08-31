import React, { Component } from "react";
import PropTypes from "prop-types";
import { SingleRepo } from "./SingleRepo";

export class Repos extends Component {
  render() {
    // sort array by date
    this.props.repos.sort(function(a, b) {
      return a.updated_at < b.updated_at
        ? -1
        : a.updated_at > b.updated_at
          ? 1
          : 0;
    });

    return (
      <div>
        {this.props.repos.map(b => <SingleRepo key={b.id} {...b} />)}
      </div>
    );
  }
}

// Repos.propTypes = {
//   image_url: PropTypes.string,
//   name: PropTypes.string,
//   brewers_tips: PropTypes.string,
//   abv: PropTypes.number,
//   description: PropTypes.bool
// }
