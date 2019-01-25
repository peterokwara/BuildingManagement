import React, { Component } from "react";
import { Button, Checkbox, Form, Grid, Header } from "semantic-ui-react";
import "./SignUp.css";
import client from "../../feathers";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signup() {
    const { email, password } = this.state;

    return client
      .service("users")
      .create({ email, password })
      .then(this.props.history.push("/"));
  }

  updateField(name, ev) {
    this.setState({ [name]: ev.target.value });
  }

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
                <label>email</label>
                <input
                  placeholder="Username"
                  onChange={ev => this.updateField("email", ev)}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  placeholder="Password"
                  onChange={ev => this.updateField("password", ev)}
                />
              </Form.Field>
              <Button
                type="submit"
                fluid
                size="large"
                onClick={() => this.signup()}
              >
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
