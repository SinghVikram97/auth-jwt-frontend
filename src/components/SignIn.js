import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class SignIn extends Component {
  render() {
    return (
      <div class="row mt5">
        <div className="col s4" />
        <div className="col s4">
          <form action="http://localhost:4444/login" method="post">
            <div class="input-field">
              <input
                id="username"
                type="text"
                class="validate"
                name="username"
              />
              <label for="username">Username/Mobile No.</label>
            </div>
            <div class="input-field">
              <input
                id="password"
                type="password"
                class="validate"
                name="password"
              />
              <label for="password">Password</label>
            </div>
            <div className="center-align" style={{ marginTop: "8%" }}>
              <Link to="/forgot">Forgot Password?</Link>
            </div>
            <div
              className="input-field center-align"
              style={{ marginTop: "5%" }}
            >
              <input type="submit" value="submit" onClick={this.handleClick} />
            </div>
          </form>
        </div>
        <div className="col s4" />
      </div>
    );
  }
}
