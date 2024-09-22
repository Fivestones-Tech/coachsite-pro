import React, { useState, useRef } from "react"; // Correct import for React, useState, and useRef
import "./Navbar.css";

import logo from "../../assets/CoachSite Pro (1).svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll"; // Make sure this is the correct library
import menu_close from "../../assets/menu_close.svg";
import menu_open from "../../assets/menu_open.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef(); // Adding useRef

  const openMenu = () => {
    menuRef.current.style.right = "0"; // Show the menu
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px"; // Hide the menu
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Site Logo" width="200px" />
      <img
        src={menu_open}
        alt="Open Menu"
        onClick={openMenu}
        className="nav-mob-open"
      />
      <ul className="nav-menu" ref={menuRef}>
        {" "}
        {/* Attach menuRef to this ul */}
        <img
          src={menu_close}
          alt="Close Menu"
          onClick={closeMenu}
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
            {menu === "home" ? <img src={underline} alt="Underline" /> : null}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>
            {menu === "about" ? <img src={underline} alt="Underline" /> : null}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
            {menu === "services" ? (
              <img src={underline} alt="Underline" />
            ) : null}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
            {menu === "work" ? <img src={underline} alt="Underline" /> : null}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
            {menu === "contact" ? (
              <img src={underline} alt="Underline" />
            ) : null}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
