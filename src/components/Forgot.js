import React, { Component } from "react";

export default class Forgot extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row">
          <div className="col s4" />

          <div className="col s4 center-align">
            <form action="http://localhost:4444/forgot" method="post">
              <h4 style={{ marginBottom: "10%" }}>Forgot Password</h4>
              <div class="input-field">
                <input id="email" type="email" class="validate" name="email" />
                <label for="email">Email</label>
              </div>
              <input
                type="submit"
                value="submit"
                style={{ marginTop: "10%" }}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
