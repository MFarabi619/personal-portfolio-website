import React, { useState } from "react";
import "./NavbarStyles.scss";
import logo from '/src/assets/Logo1.png'

function Navbar(props) {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  const navToggle = () => {
    console.log("fdasf");
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };

  return (
    <nav className="nav">
      <a href="#" className="nav_logo">
        <img className="logoImage" src={logo} alt="" />
      </a>

      <ul className={active}>
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

      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
