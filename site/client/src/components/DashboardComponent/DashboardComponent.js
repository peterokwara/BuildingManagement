import React, { Component } from "react";
import { Feed } from "semantic-ui-react";

class DashboardComponent extends Component {
  render() {
    return (
      <div>
        <Feed>
          <Feed.Event
            image="/images/avatar/small/elliot.jpg"
            content="You added Elliot Fu to the group Coworkers"
          />
          <Feed.Event>
            <Feed.Label image="/images/avatar/small/elliot.jpg" />
            <Feed.Content content="You added Elliot Fu to the group Coworkers" />
          </Feed.Event>
        </Feed>
      </div>
    );
  }
}

export default DashboardComponent;
