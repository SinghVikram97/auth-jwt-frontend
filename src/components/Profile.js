import React, { Component } from "react";
class Profile extends Component {
  state = {
    name: ""
  };
  componentDidMount() {
    let id = JSON.parse(localStorage.getItem("id"));
    console.log(id);
    fetch(`http://localhost:4000/profile/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ name: data.firstName });
        console.log(this.state.name);
      });
  }
  render() {
    return <div>{"Welcome " + this.state.name}</div>;
  }
}
export default Profile;
