import React from "react";
import user from "../../assets/user-header.png";
import phone from "../../assets/phone-black.png";
import mail from "../../assets/mail-black.png";
import logo from "../../assets/logo-main.png";
import { Button } from "@aws-amplify/ui-react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="header-wrapper">
          <div className="header-logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="header-list">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/faq">Faq</Link>
                </li>
              </ul>
            </nav>
            <div className="user-contact">
              <ul>
                <li>
                  <a href="">
                    <img src={phone} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={mail} alt="" />
                  </a>
                </li>
                <li>
                  <Button className="main-btn" variation="primary">
                    Sign Up
                  </Button>
                  <Button className="main-btn" variation="outline">
                    Sign In
                  </Button>
                </li>
                <li>
                  <a href="">
                    <img src={user} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
