import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export class UserInfo extends Component {
  render() {
    if (this.props.user.avatar_url === undefined) {
      return <div></div>;
    }
    return (
      <Card>
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
            Email: {this.props.user.email === null ? "N/A" : this.props.user.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={this.props.onClick}>
            Show public repos ({this.props.user.public_repos})
          </Button>
        </CardActions>
      </Card>
    );
  }
}

// UserInfo.propTypes = {
//   image_url: PropTypes.string,
//   name: PropTypes.string,
//   brewers_tips: PropTypes.string,
//   abv: PropTypes.number,
//   description: PropTypes.bool
// };
