import React from "react";
import Logo from "./Logo";
import "./style/NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Logo />
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#speakers" className="nav__link">
              Speakers
            </a>
          </li>
          <li className="nav__item">
            <a href="#venue" className="nav__link">
              Venue
            </a>
          </li>
          <li className="nav__item">
            <a href="#schedule" className="nav__link">
              Schedule
            </a>
          </li>
          <li className="nav__item">
            <a href="#partners" className="nav__link">
              Partners
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#register" className="nav__link">
              Register
            </a>
          </li>
          <li className="nav__item">
            <a href="#pages" className="nav__link">
              Pages
            </a>
          </li>
        </ul>
      </nav>
      <div className="gap"></div>
    </div>
  );
};

export default NavBar;
