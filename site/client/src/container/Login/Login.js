import React, { Component } from "react";
import { Button, Form, Grid, Header, Message } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import "./Login.css";
import client from "../../feathers";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateField(name, ev) {
    this.setState({ [name]: ev.target.value });
  }

  login() {
    const { email, password } = this.state;

    return client
      .authenticate({
        strategy: "local",
        email,
        password
      })
      .catch(error => this.setState({ error }));
  }

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
              <Button type="submit" fluid onClick={() => this.login()}>
                Login
              </Button>
            </Form>
            <Message>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
