import React from 'react';
import DarkModeSwitch from './DarkModeSwitch';

export default function Navbar() {
  return (
    <nav className="navbar-background">
      <div className="navbar">
        {/* Silicon logo */}
        <a href="#">
          <img id="solid" src="Images/solid.svg" alt="Silicon Logo" />
        </a>

        {/* Feature link */}
        <div id="Feature">
          <a href="#" aria-current="page" tabIndex="0">Feature</a>
        </div>

        {/* Dark mode and bright mode switch */}
        {/* <p className="theme-text"></p>
        <label className="toggle" htmlFor="darkmode-switch" aria-label="darkmode-switch">
          <input type="checkbox" id="darkmode-switch" />
          <span className="slider"></span>
        </label> */}
        <DarkModeSwitch />

        {/* Sign in button */}
        <button id="sign-in-btn">
          <img className="icon-l" src="Images/icon-l.svg" alt="Icon" />
          Sign in/up
        </button>

        {/* Mobile menu button */}
        <img id="Button-Mobil-bright" src="Images/Button-Mobil-bright.svg" alt="Mobile tab bar" />
      </div>
    </nav>
  );
}
