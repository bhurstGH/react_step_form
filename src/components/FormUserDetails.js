import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button/";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>Sup</Toolbar>
        </AppBar>
        <TextField
          helperText="Enter your first name"
          label="First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          helperText="Enter your last name"
          label="Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          helperText="Enter your Email"
          label="Email"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={this.continue}>
          Continue
        </Button>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
