import React, { Component } from "react";
import { Button, Header, Form, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import PropTypes from "prop-types";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password1: "",
      password2: "",
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password1: this.state.password1,
      password2: this.state.password2
    };
    this.props.registerUser(newUser);
  }
  render() {
    const { errors } = this.state;
    const { user } = this.props.auth;
    return (
      <div>
        {user ? user.name : null}
        <Grid centered style={{ height: "100%" }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: "450px" }}>
            <Header as="h2" textAlign="center">
              Sign Up
            </Header>
            <Form size="large" onSubmit={this.onSubmit}>
              <Form.Field>
                <label>Name</label>
                <input
                  placeholder="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  name="email"
                  placeholder="email"
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
              <Form.Field>
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="password2"
                  placeholder="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Button fluid type="submit">
                Sign Up
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

SignUp.PropTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(SignUp);
