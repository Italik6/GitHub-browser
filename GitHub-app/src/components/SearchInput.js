import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class SearchInput extends Component {
  render() {
    const autoFocus = true;
    return (
      <div onKeyPress={this.props.onKeyPress}>
        <TextField
          id="search"
          label="Search"
          type="search"
          autoFocus={autoFocus}
          onChange={this.props.onChange}
          margin="normal"
          defaultValue="Italik6"
          placeholder="Search for a user"
        />
        <Button onClick={this.props.onClick}>Search</Button>
      </div>
    );
  }
}

// SearchInput.propTypes = {
//   image_url: PropTypes.string,
//   name: PropTypes.string,
//   brewers_tips: PropTypes.string,
//   abv: PropTypes.number,
//   description: PropTypes.bool
// };
