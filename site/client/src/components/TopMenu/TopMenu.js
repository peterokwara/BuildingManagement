import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";

class TopMenu extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        <Menu secondary pointing>
          <Menu.Item
            name="Dashboard"
            onClick={this.handleItemClick}
            className="menu-logo"
          />
          <Menu.Menu position="right">
            <Menu.Item name="logout" onClick={this.onLogoutClick.bind(this)}>
              Logout
              <Icon style={{ paddingLeft: "5px" }} name="user" size="small" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

TopMenu.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(TopMenu);
