import React, { Component } from "react";
import { Button, Form, Grid, Header, Message } from "semantic-ui-react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="login-form">
        <Grid centered verticalAlign="middle" style={{ height: "100%" }}>
          <Grid.Column style={{ maxWidth: 300 }}>
            <Header as="h2" color="blue" textAlign="center">
              Log-in to your account
            </Header>
            <Form>
              <Form.Field>
                <label>Username</label>
                <input size="mini" placeholder="Username" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder="Password" />
              </Form.Field>
              <Button type="submit" fluid>
                Login
              </Button>
            </Form>
            <Message size="tiny">
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
