import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import HomeLogo from "../assets/logos/Logo.svg";

function NavBar() {
  const [click, setClick] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const handleClick = () => setClick(!click);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < scrollPos) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }

    setScrollPos(currentScrollPos);
  }, [scrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <nav className={`navbar ${showNav ? "" : "hide-nav"}`}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={HomeLogo} alt="lablogo" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Overview
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/members"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Members
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/publications"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Publications
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/network"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Network
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/news"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                News
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
