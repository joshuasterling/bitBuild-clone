import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="/bitBuild.png" alt="" className="logo-icon" />
        </div>
        <nav className="nav-bar">
          <ul className="menu-list">
            <li>Home</li>
            <li>Solutions</li>
            <li>Our Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
