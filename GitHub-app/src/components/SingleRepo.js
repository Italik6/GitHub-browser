import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const SingleRepo = props => {
  return (
    <Card className="single-repos m-2">
      <a target="_blank" href={props.svn_url}>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.name}
          </Typography>
          <Typography component="p">
            Last update: {props.updated_at.substring(0, 10)}
          </Typography>
        </CardContent>
      </a>
    </Card>
  );
};

SingleRepo.propTypes = {
  svn_url: PropTypes.string,
  updated_at: PropTypes.string,
  name: PropTypes.string
};
