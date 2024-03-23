import { useState, useEffect } from "react";
import "./Nav.css";
import logo from "/gdsc-logo.png";
import { Icon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Nav = () => {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [dropdownNav, setDropdownNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleDropdown = () => {
    setDropdownMenuOpen(!dropdownMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="navheader"
      className={`fixed-top ${scrollPosition > 100 ? "black-bg" : ""}`}
    >
      <div className="navcontainer">
        <a href="/" className="logo-container">
          <img
            src={logo}
            alt="Logo"
            className="logo-img"
            style={{ height: "50px", width: "200px" }}
          />
        </a>
        <nav
          id="navbar"
          className={`navbar ${dropdownNav ? "dropdown-nav" : "nav-hide"}`}
        >
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#aboutdev">
                Devcation`24
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#features">
                Timeline
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/event">
                Events
              </a>
            </li>
            <li
              className="nav-link dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <a className="dropdown-toggle" href="#" role="button">
                More
              </a>
              <ul
                className={`dropdown-menu ${dropdownMenuOpen ? "dropdown-menu-show" : "menu-hide"
                  }`}
                style={{ visibility: dropdownMenuOpen ? "visible" : "hidden" }}
              >
                <li>
                  <a className="dropdown-item" href="#tracks">
                    Tracks
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#prizes">
                    Prizes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/team">
                    Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#sponsors">
                    Sponsors
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="Hambu-Social">
          <div className="social-links">
            <a
              href="https://discord.gg/5fz4rza3cn"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link"
            >
              <div className="single-cta">
                <i className="fab fa-discord"></i>
              </div>
            </a>
            {/* <a href="https://twitter.com/gdsc_igdtuw" target="_blank" className="twitter"> <Icon color="primary" component={XIcon} style={{ "width": "25px", "color": "#1BB1DC" }} /> </a>
                    <a href="https://www.facebook.com/GDSCIGDTUW/" target="_blank" className="facebook"> <Icon color="primary" component={FacebookIcon} style={{ "width": "26px", "color": "#1BB1DC" }} /> </a>
                    <a href="https://www.linkedin.com/company/dscigdtuw/mycompany/" target="_blank" className="linkedin"> <Icon color="primary" component={LinkedInIcon} style={{ "width": "25px", "color": "#1BB1DC" }} /> </a>
                    <a href="https://www.instagram.com/gdsc_igdtuw" target="_blank" className="instagram"> <Icon color="primary" component={InstagramIcon} style={{ "width": "25px", "color": "#1BB1DC" }} /> </a>
                    <a href="https://www.youtube.com/@DSCIGDTUW" target="_blank" className="instagram"> <Icon color="primary" component={YouTubeIcon} style={{ "width": "30px", "color": "#1BB1DC" }} /> </a> */}
          </div>
          <div className="NavHamToggel">
            <Icon
              className="NavHam"
              component={dropdownNav ? CloseIcon : MenuIcon}
              style={{ color: "black" }}
              onClick={() => setDropdownNav(!dropdownNav)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
