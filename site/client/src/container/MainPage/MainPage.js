import React, { Component } from "react";
import TopMenu from "../../components/TopMenu/TopMenu";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import MotionSensor from "../../components/MotionSensor/MotionSensor";
import { Grid } from "semantic-ui-react";

class MainPage extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <Grid>
          <Grid.Column width={2}>
            <LeftMenu />
          </Grid.Column>
          <Grid.Column width={14}>
            <MotionSensor />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default MainPage;
