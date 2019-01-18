import React, { Component } from "react";
import Login from "./container/Login/Login";
import SignUp from "./container/SignUp/SignUp";
import Dashboard from "./container/Dashboard/Dashboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
