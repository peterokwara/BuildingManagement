import React, { Component } from "react";
import { Button, Header, Form, Grid, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password1: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password1: this.state.password1
    };
    console.log(user);
  }
  render() {
    return (
      <div>
        <Grid centered style={{ height: "100%" }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: "450px" }}>
            <Header as="h2" textAlign="center">
              Sign In
            </Header>
            <Form size="large" onSubmit={this.onSubmit}>
              <Form.Field>
                <label>Email</label>
                <input
                  placeholder="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="password"
                  name="password1"
                  value={this.state.password1}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Button fluid type="submit">
                Sign In
              </Button>
              <Message>
                New to us? <Link to="/signup">Sign Up</Link>
              </Message>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignIn;
