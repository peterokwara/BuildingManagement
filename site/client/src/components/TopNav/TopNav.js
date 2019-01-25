import React, { Component } from "react";
import { Menu, Input } from "semantic-ui-react";
import { Link } from "react-router";
import "./TopNav.css";

class TopNav extends Component {
  render() {
    return (
      <div>
        <Menu secondary>
          <Menu.Item name="home" />
          <Menu.Menu position="right">
            <Menu.Item name="logout" />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default TopNav;
