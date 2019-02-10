import React, { Component } from "react";
import TopMenu from "../../components/TopMenu/TopMenu";
import LeftMenu from "../../components/LeftMenu/LeftMenu";

class MainPage extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <LeftMenu />
      </div>
    );
  }
}

export default MainPage;
