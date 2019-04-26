import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./container/SignIn/SignIn";
import SignUp from "./container/SignUp/SignUp";
import Dashboard from "./container/Dashboard/Dashboard";
import Climate from "./container/Climate/Climate";
import Power from "./container/Power/Power";
import Devices from "./container/Devices/Devices";
import Occupancy from "./container/Occupancy/Occupancy";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/Common/PrivateRoute";

// check for token
if (localStorage.jwtToken) {
  // set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // logout the user
    store.dispatch(logoutUser());
    // TODO: clear current profile
    // Redirect to login
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/Climate" component={Climate} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/power" component={Power} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/devices" component={Devices} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/occupancy" component={Occupancy} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
