import React, { Component } from "react";
import "./App.css";
import Home from "./page/Home.js";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
