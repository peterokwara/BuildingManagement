import React, { Component } from "react";
import { Grid, Menu, Segment } from 'semantic-ui-react'

import "./LeftMenu.css";

class LeftMenu extends Component {
  render() {
    return (
      <div className="left-menus">
        <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name='bio' active='bio' onClick={this.handleItemClick} />
            <Menu.Item name='pics' onClick={this.handleItemClick} />
            <Menu.Item
              name='companies'
            />
            <Menu.Item
              name='links'
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the tab height
          </Segment>
        </Grid.Column>
      </Grid>
      </div>
    );
  }
}

export default LeftMenu;
