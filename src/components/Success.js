import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export class Success extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>Sup</Toolbar>
        </AppBar>
        <h1>Thank you for your submission</h1>
        <p>You will recieve a confirmation email shortly.</p>
      </React.Fragment>
    );
  }
}

export default Success;
