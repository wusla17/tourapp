import React, { Component } from "react";
import "./Nav.css";
import "../../App.css";
import Logo from "../../assets/images/logo.svg";

export default class MainNav extends Component {
  render() {
    return (
      <div className="Nav-Container">
        <img src={Logo} alt="Logo" className="Nav-Image" />
        <button title="Login" className="ButtonLogin">
          Login
        </button>
      </div>
    );
  }
}
