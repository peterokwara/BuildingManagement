import React, { Component } from "react";
import TopNav from "../../components/TopNav/TopNav";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import { Grid, Menu, Segment } from "semantic-ui-react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <LeftMenu />
      </div>
    );
  }
}

export default Dashboard;
