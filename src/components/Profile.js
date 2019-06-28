import React, { Component } from "react";
import Axios from "axios";
export default class Profile extends Component {
  state = {
    username: ""
  };

  componentDidMount() {
    Axios.get("/profile", {
      withCredentials: true,
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": " X-NEW-ONE, Content-Type",
        Authorization: "vikramsinghbedi"
      }
    }).then(data => {
      if (data.data.username) {
        this.setState({ username: data.data.username });
        this.props.handleSignIn(true);
      }
    });
  }
  render() {
    console.log("Rerendered");
    return <div>{this.state.username}</div>;
  }
}
