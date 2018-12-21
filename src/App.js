import React, { Component } from "react";
import { LoginContainer } from "./containers";
import { AppLayout } from "./styledComponents";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <LoginContainer />
      </AppLayout>
    );
  }
}

export default App;
