import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/desktop/logo.svg";
import ThemeSwitcher from "../components/ThemeSwitcher";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="content">
          <Link to="/">
            <img src={logo} alt="devjobs" />
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

export default Header;
