import React, { Component } from "react";

export default class Reset extends Component {
  state = {
    password: "",
    passwordConfirm: ""
  };
  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  onCPasswordChange = e => {
    this.setState({ passwordConfirm: e.target.value });
  };
  onBlur = () => {
    if (this.state.password === this.state.passwordConfirm) {
      // Match
      let passwordConfirm = document.getElementById("passwordConfirm");
      passwordConfirm.classList.add("valid");
      passwordConfirm.classList.remove("invalid");
    } else {
      // No Match
      let passwordConfirm = document.getElementById("passwordConfirm");
      passwordConfirm.classList.add("invalid");
      passwordConfirm.classList.remove("valid");
    }
  };
  onKeyUp = () => {
    if (this.state.password === this.state.passwordConfirm) {
      // Match
      let passwordConfirm = document.getElementById("passwordConfirm");
      passwordConfirm.classList.add("valid");
      passwordConfirm.classList.remove("invalid");
    } else {
      // No Match
      let passwordConfirm = document.getElementById("passwordConfirm");
      passwordConfirm.classList.add("invalid");
      passwordConfirm.classList.remove("valid");
    }
  };
  render() {
    return (
      <div className="container" style={{ marginTop: "10%" }}>
        <div class="row">
          <form
            action="http://localhost:4444/reset"
            method="post"
            class="col s12"
          >
            <div class="row">
              <div className="col s3" />
              <div class="input-field col s6">
                <input
                  id="password"
                  type="password"
                  class="validate"
                  name="password"
                  onBlur={this.onBlur}
                  onChange={this.onPasswordChange}
                />
                <label for="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="col s3" />
              <div class="input-field col s6">
                <input
                  id="passwordConfirm"
                  type="password"
                  onChange={this.onCPasswordChange}
                  onKeyUp={this.onKeyUp}
                />
                <label
                  id="lblPasswordConfirm"
                  for="passwordConfirm"
                  data-error="Password not match"
                  data-success="Password Match"
                >
                  Password (Confirm)
                </label>
              </div>
            </div>
            <div className="row" style={{ marginTop: "5%" }}>
              <div className="col s3" />
              <div className="col s6 center-align">
                <input type="submit" value="Reset" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
