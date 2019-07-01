import React, { Component } from "react";

export default class ResetMsg extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row">
          <div className="col s2" />
          <div className="col s8">
            <h4>A email has been sent to you with further instructions</h4>
          </div>
        </div>
      </div>
    );
  }
}
