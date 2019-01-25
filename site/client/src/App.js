import React, { Component } from "react";
import Login from "./container/Login/Login";
import SignUp from "./container/SignUp/SignUp";
import Dashboard from "./container/Dashboard/Dashboard";
import client from "./feathers";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const messages = client.service("messages");
    const users = client.service("users");

    // Try to authenticate with the JWT stored in localStorage
    client.authenticate().catch(() => this.setState({ login: null }));

    // On successfull login
    client.on("authenticated", login => {
      // console.log("therse viloent delights");
      // // Get all users and messages
      // Promise.all([
      //   messages.find({
      //     query: {
      //       $sort: { createdAt: -1 },
      //       $limit: 25
      //     }
      //   }),
      //   users.find()
      // ]).then(([messagePage, userPage]) => {
      //   // We want the latest messages but in the reversed order
      //   const messages = messagePage.data.reverse();
      //   const users = userPage.data;

      //   // Once both return, update the state
      //   this.setState({ login, messages, users });
      // });
      // this.setState({ login, messages, users });
      this.props.history.push("/dashboard");
    });

    // On logout reset all all local state (which will then show the login screen)
    client.on("logout", () =>
      this.setState({
        login: null,
        // messages: null,
        users: null
      })
    );

    // // Add new messages to the message list
    // messages.on("created", message =>
    //   this.setState({
    //     messages: this.state.messages.concat(message)
    //   })
    // );

    // Add new users to the user list
    users.on("created", user =>
      this.setState({
        users: this.state.users.concat(user)
      })
    );
  }

  render() {
    // if (this.state.login === undefined) {
    //   return <h1>Loading</h1>;
    // } else if (this.state.login) {
    //   return <Dashboard />;
    // }
    // return <Login />;
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
