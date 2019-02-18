import React, { Component } from "react";
import TopMenu from "../../components/TopMenu/TopMenu";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import Motion from "../../components/Motion/Motion";
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
            <Motion />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default MainPage;
