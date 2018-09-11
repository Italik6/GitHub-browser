import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const SearchInput = props => {
  const autoFocus = true;
  return (
    <div onKeyPress={props.onKeyPress}>
      <TextField
        id="search"
        label="Search"
        type="search"
        autoFocus={autoFocus}
        onChange={props.onChange}
        margin="normal"
        placeholder="Search for a user"
      />
      <Button onClick={props.onClick}>Search</Button>
    </div>
  );
};
