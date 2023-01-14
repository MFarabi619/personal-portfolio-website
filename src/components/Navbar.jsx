import React from "react";
import "./NavbarStyles.scss";

function Navbar(props) {
  return (
    <nav className="nav">
      <a href="#" className="nav_logo">
        <img className="logoImage" src="/src/assets/Logo1.png" alt="" />
      </a>

      <ul className="nav_menu">
        <li className="nav_button">
          <a href="#" className="nav_link">
            Home
          </a>
        </li>

        <li className="nav_button">
          <a href="#" className="nav_link">
            About
          </a>
        </li>
        <li className="nav_button">
          <a href="#" className="nav_link">
            Skills
          </a>
        </li>
        <li className="nav_button">
          <a href="#" className="nav_link">
            Portfolio
          </a>
        </li>
        {/* 
        <li className="nav_button">
          <a href="#" className="nav_link">
            Other
          </a>
        </li> */}
        <li className="nav_button">
          <a href="#" className="nav_link">
            Contact
          </a>
        </li>
      </ul>

      <div className="nav_toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
