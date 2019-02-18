import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";

class LeftMenu extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        <Menu secondary pointing vertical style={{ minHeight: "100vh" }}>
          <Menu.Item
            onClick={() => {
              window.location.href = "/dashboard";
            }}
          >
            <Menu.Header>Dashboard</Menu.Header>
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              window.location.href = "/motionsensor";
            }}
          >
            <Menu.Header>Motion Sensor</Menu.Header>
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              window.location.href = "/temperaturesensor";
            }}
          >
            <Menu.Header>Temperature Sensor</Menu.Header>
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              window.location.href = "/currentsensor";
            }}
          >
            <Menu.Header>Current sensor</Menu.Header>
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              window.location.href = "/relays";
            }}
          >
            <Menu.Header>Relays</Menu.Header>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

LeftMenu.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(LeftMenu);
