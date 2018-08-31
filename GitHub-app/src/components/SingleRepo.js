import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export class SingleRepo extends Component {
  render() {
    return (
      <a target="_blank" href={this.props.svn_url}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.name}
            </Typography>
            <Typography component="p">
              Last update: {this.props.updated_at}
            </Typography>
          </CardContent>
        </Card>
      </a>
    );
  }
}

// SingleRepo.propTypes = {
//   image_url: PropTypes.string,
//   name: PropTypes.string,
//   brewers_tips: PropTypes.string,
//   abv: PropTypes.number,
//   description: PropTypes.bool
// };
