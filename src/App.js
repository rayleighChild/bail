import React, { Component } from "react";
import { AppLayout } from "./styledComponents";
import { Home } from "./pages";
import { HeaderContainer } from "./containers";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <HeaderContainer />
        <Home />
      </AppLayout>
    );
  }
}

export default App;
