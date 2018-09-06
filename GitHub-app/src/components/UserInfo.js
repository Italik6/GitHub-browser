import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export class UserInfo extends Component {
  render() {
    if (this.props.user.avatar_url === undefined) {
      return null;
    }
    return (
      <Card className="user-info-card">
        <CardMedia
          className="avatar"
          image={this.props.user.avatar_url}
          title={this.props.user.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.user.name}
          </Typography>
          <Typography component="p">Login: {this.props.user.login}</Typography>
          <Typography component="p">
            Email:{" "}
            {this.props.user.email === null ? "N/A" : this.props.user.email}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

UserInfo.propTypes = {
  avatar_url: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  public_repos: PropTypes.number
};
