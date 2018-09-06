import React, { Component } from "react";
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
          placeholder="Search for a user"
        />
        <Button onClick={this.props.onClick}>Search</Button>
      </div>
    );
  }
}
