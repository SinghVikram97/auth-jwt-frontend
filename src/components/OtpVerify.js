import React, { Component } from "react";

export default class Otp extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "10%" }}>
        <div className="row">
          <div className="col s4" />
          <div className="col s4 center-align">
            <h4 style={{ marginBottom: "15%" }}>Please verify your OTP</h4>
            <form action="http://localhost:4444/otp/verify" method="post">
              <div class="input-field">
                <input id="otp" type="number" class="validate" name="otp" />
                <label for="otp">Enter OTP</label>
              </div>
              <div
                className="input-field center-align"
                style={{ marginTop: "16%" }}
              >
                <input type="submit" value="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
