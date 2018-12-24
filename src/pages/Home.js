import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginContainer, RegisterContainer } from "../containers";

class Home extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/auth/register" component={RegisterContainer} />
        </Switch>
      </Router>
    );
  }
}

export default Home;
