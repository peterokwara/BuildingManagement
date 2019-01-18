import React, { Component } from "react";
import { Button, Checkbox, Form, Grid, Header } from "semantic-ui-react";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    return (
      <div className="signUp-form">
        <Grid centered verticalAlign="middle" style={{ height: "100%" }}>
          <Grid.Column style={{ maxWidth: 300 }}>
            <Header as="h2" color="blue" textAlign="center">
              Sign up
            </Header>
            <Form fluid>
              <Form.Field>
                <label>Username</label>
                <input placeholder="Username" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder="Password" />
              </Form.Field>
              <Button type="submit" fluid size="large">
                Sign Up
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignUp;
