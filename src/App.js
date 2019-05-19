import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import history from "./history";
import Profile from "./components/Profile";
class App extends Component {
  state = {
    signedIn: false
  };
  onSignIn = val => {
    if (val === true) {
      this.setState({ signedIn: true });
    } else {
      this.setState({ signedIn: false });
    }
  };
  render() {
    return (
      <BrowserRouter history={history}>
        <div className="App">
          <Navbar signedIn={this.state.signedIn} onSignIn={this.onSignIn} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/sign-in"
              render={() => (
                <SignIn onSignIn={this.onSignIn} history={this.props.history} />
              )}
            />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
