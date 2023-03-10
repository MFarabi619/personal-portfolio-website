import React, { useState,useEffect } from "react";
import { Link } from "react-scroll";
import "./NavbarStyles.scss";
import logo from "/src/assets/Logo1.png";

function Navbar(props) {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  const navToggle = () => {
    active === "nav_menu"
    ? setActive("nav_menu nav_active")
    : setActive("nav_menu");
    console.log(active);
    
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
          <Link
            to="Home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav_link"
            onClick={navToggle}
          >
            Home
          </Link>
        </li>

        <li className="nav_button">
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav_link"
            onClick={navToggle}
          >
            About
          </Link>
        </li>
        <li className="nav_button">
          <Link
            to="Skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav_link"
            onClick={navToggle}
          >
            Skills
          </Link>
        </li>
        <li className="nav_button">
          <Link
            to="Portfolio"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav_link"
            onClick={navToggle}
          >
            Portfolio
          </Link>
        </li>
        {/* 
        <li className="nav_button">
          <a href="#" className="nav_link">
            Other
          </a>
        </li> */}
        <li className="nav_button">
          <Link
            to="Contact "
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav_link"
            onClick={navToggle}
          >
            Contact
          </Link>
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
