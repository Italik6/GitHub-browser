import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export const UserInfo = (props) => {
  if (props.user.avatar_url === undefined) {
    return null;
  }
  return (
    <Card className="user-info-card">
      <CardMedia
        className="avatar"
        image={props.user.avatar_url}
        title={props.user.name}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {props.user.name}
        </Typography>
        <Typography component="p">Login: {props.user.login}</Typography>
        <Typography component="p">
          Email:{" "}
          {props.user.email === null ? "N/A" : props.user.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

UserInfo.propTypes = {
  avatar_url: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  public_repos: PropTypes.number
};
