import React, { Component } from "react";

export default class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  name = e => {
    this.setState({ name: e.target.value });
  };
  email = e => {
    this.setState({ email: e.target.value });
  };
  password = e => {
    this.setState({ password: e.target.value });
  };
  register = () => {
    let data = {
      firstName: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    console.log(this.state.name);
    fetch("http://localhost:4000/signup", {
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
        this.props.history.push("/sign-in");
      });
  };
  render() {
    return (
      <div class="row mt5">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s2 offset-s5">
              <input
                id="first_name"
                type="text"
                class="validate"
                onChange={this.name}
              />
              <label for="first_name">Name</label>
            </div>
          </div>
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
              <a class="waves-effect waves-light btn" onClick={this.register}>
                Sign Up
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
