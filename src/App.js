import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import history from "./history";
import Profile from "./components/Profile";
class App extends Component {
  state = {
    isSignedIn: false
  };
  handleSignIn = value => {
    this.setState({ isSignedIn: value });
  };
  render() {
    return (
      <BrowserRouter history={history}>
        <div className="App">
          <Navbar isSignedIn={this.state.isSignedIn} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/sign-in"
              component={() => <SignIn handleSignIn={this.handleSignIn} />}
            />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
