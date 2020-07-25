import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </main>
    );
  }
}

export default App;
