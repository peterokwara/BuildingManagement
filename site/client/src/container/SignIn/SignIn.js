import React, { Component } from "react";
import { Button, Header, Form, Grid, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/mainpage");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/mainpage");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }
  render() {
    const { errors } = this.state;

    return (
      <div>
        <Grid centered style={{ height: "100%" }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: "450px" }}>
            <Header as="h2" textAlign="center">
              Sign In
            </Header>
            <Form
              error={errors ? true : false}
              size="large"
              onSubmit={this.onSubmit}
            >
              <Form.Field error={errors.email ? true : false}>
                <label>Email</label>
                <input
                  placeholder="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </Form.Field>
              {errors.email ? (
                <Message error header="Error!" content={errors.email} />
              ) : null}
              <Form.Field error={errors.password ? true : false}>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </Form.Field>
              {errors.password ? (
                <Message error header="Error!" content={errors.password} />
              ) : null}
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

SignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(SignIn);
