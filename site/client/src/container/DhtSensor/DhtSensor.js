import React, { Component } from "react";
import TopMenu from "../../components/TopMenu/TopMenu";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import Climate from "../../components/Climate/Climate";
import { Grid } from "semantic-ui-react";

class DhtSensor extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <Grid>
          <Grid.Column width={2}>
            <LeftMenu />
          </Grid.Column>
          <Grid.Column width={14}>
            <Climate />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default DhtSensor;
