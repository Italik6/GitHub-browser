import React from "react";
import PropTypes from "prop-types";
import { SingleRepo } from "./SingleRepo";

export const Repos = props => {
  return (
    <div>
      {props.repos.map(b => (
        <SingleRepo key={b.id} {...b} />
      ))}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array
};
