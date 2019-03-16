import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button/";

export class Confirm extends Component {
  confirm = e => {
    e.preventDefault();
    // Backend calls go here.
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;

    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>Sup</Toolbar>
        </AppBar>

        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={bio} />
          </ListItem>
        </List>

        <Button variant="contained" color="primary" onClick={this.confirm}>
          Confirm
        </Button>
        <br />
        <Button variant="contained" color="secondary" onClick={this.back}>
          Back
        </Button>
      </React.Fragment>
    );
  }
}

export default Confirm;
