import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  state = {
    authenticated: null
  };
  render() {
    if (this.props.signedIn === true) {
      return (
        <div>
          <nav className="nav-wrapper">
            <div className="container">
              <Link to="/" className="brand-logo">
                Auth
              </Link>
              <a
                href="#abc"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <img src="https://img.icons8.com/ios/50/000000/menu.png" />
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/" onClick={() => this.props.onSignIn(false)}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <ul className="sidenav" id="mobile-demo">
            <li>
              <Link to="/" onClick={() => this.props.onSignIn(false)}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="nav-wrapper">
            <div className="container">
              <Link to="/" className="brand-logo">
                Auth
              </Link>
              <a
                href="#abc"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <img src="https://img.icons8.com/ios/50/000000/menu.png" />
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/sign-in">Sign In</Link>
                </li>
                <li>
                  <Link to="/sign-up">Sign Up</Link>
                </li>
              </ul>
            </div>
          </nav>
          <ul className="sidenav" id="mobile-demo">
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </div>
      );
    }
  }
}
