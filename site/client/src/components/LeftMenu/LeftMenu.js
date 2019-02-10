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
          <Menu.Item>
            <Menu.Header>Motion Sensor</Menu.Header>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Temperature Sensor</Menu.Header>
          </Menu.Item>
          <Menu.Item>
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
