import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button/";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>Sup</Toolbar>
        </AppBar>
        <TextField
          helperText="Enter your occupation"
          label="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />

        <TextField
          helperText="Enter your city"
          label="City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <TextField
          helperText="Enter your Bio"
          label="Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={this.continue}>
          Continue
        </Button>
        <br />
        <Button variant="contained" color="secondary" onClick={this.back}>
          Back
        </Button>
      </React.Fragment>
    );
  }
}

export default FormPersonalDetails;
