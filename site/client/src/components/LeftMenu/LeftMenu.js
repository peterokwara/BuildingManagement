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
              window.location.href = "/climate";
            }}
          >
            <Menu.Header>Climate</Menu.Header>
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              window.location.href = "/occupancy";
            }}
          >
            <Menu.Header>Occupancy</Menu.Header>
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              window.location.href = "/devices";
            }}
          >
            <Menu.Header>Devices</Menu.Header>
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              window.location.href = "/power";
            }}
          >
            <Menu.Header>Power</Menu.Header>
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
