import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
    authenticated: "",
    id: ""
  };
  email = e => {
    this.setState({ email: e.target.value });
  };
  password = e => {
    this.setState({ password: e.target.value });
  };
  handleClick = () => {
    let data = {
      email: this.state.email,
      password: this.state.password
    };
    fetch("http://localhost:4000/signin", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.setItem("id", JSON.stringify(data.user_id));
        this.setState({ authenticated: data.success, id: data.user_id });

        this.props.onSignIn(data.success);

        if (data === true) {
        }
      });
  };
  render() {
    if (this.state.authenticated === "") {
      return (
        <div class="row mt5">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s2 offset-s5">
                <input
                  id="email"
                  type="email"
                  class="validate"
                  onChange={this.email}
                />
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s2 offset-s5">
                <input
                  id="password"
                  type="password"
                  class="validate"
                  onChange={this.password}
                />
                <label for="password">Password</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s2 offset-s5 center-align">
                <a
                  class="waves-effect waves-light btn"
                  onClick={this.handleClick}
                >
                  Sign In
                </a>
              </div>
            </div>
          </form>
        </div>
      );
    } else if (this.state.authenticated === false) {
      return (
        <div class="row mt5">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s2 offset-s5">
                <input
                  id="email"
                  type="email"
                  class="validate"
                  onChange={this.email}
                />
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s2 offset-s5">
                <input
                  id="password"
                  type="password"
                  class="validate"
                  onChange={this.password}
                />
                <label for="password">Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s2 offset-s5 center-align">
                <a
                  class="waves-effect waves-light btn"
                  onClick={this.handleClick}
                >
                  Sign In
                </a>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s2 offset-s5 center-align">
                Password incorrect
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: "/profile"
          }}
        />
      );
    }
  }
}
