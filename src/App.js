import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import OtpVerify from "./components/OtpVerify";
class App extends Component {
  state = {
    isSignedIn: false
  };
  handleSignIn = value => {
    console.log("Called");
    this.setState({ isSignedIn: value });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar
            isSignedIn={this.state.isSignedIn}
            handleSignIn={this.handleSignIn}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-in" component={() => <SignIn />} />
            <Route
              exact
              path="/profile"
              render={() => <Profile handleSignIn={this.handleSignIn} />}
            />
            <Route exact path="/otp" component={OtpVerify} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
