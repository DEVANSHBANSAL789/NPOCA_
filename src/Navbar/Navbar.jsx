import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import logo from "../Image/logo-Npoca.png";
import youtube from "../Image/youtube.png";
import facebook from "../Image/facebook.png";
import linkedin from "../Image/linkedin.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (link, event) => {
    // event.preventDefault();
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link
            to="/about-us"
            className={activeLink === "/about-us" ? "active" : ""}
            onClick={(e) => handleSetActive("/about-us", e)}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/what-we-offer"
            className={activeLink === "/what-we-offer" ? "active" : ""}
            onClick={(e) => handleSetActive("/what-we-offer", e)}
          >
            What We Offer
          </Link>
        </li>
        <li>
          <Link
            to="/career-resources"
            className={activeLink === "/career-resources" ? "active" : ""}
            onClick={(e) => handleSetActive("/career-resources", e)}
          >
            Career Resources
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            className={activeLink === "/events" ? "active" : ""}
            onClick={(e) => handleSetActive("/events", e)}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            className={activeLink === "/contact-us" ? "active" : ""}
            onClick={(e) => handleSetActive("/contact-us", e)}
          >
            Contact Us
          </Link>
        </li>
        <div className="navicon">
          <a
            href="https://www.facebook.com/NPOCAInd/"
            target="_blank"
            rel="noopener noreferrer"
            className="navlink"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.youtube.com/c/NPOCA"
            target="_blank"
            rel="noopener noreferrer"
            className="navlink"
            id="nav4"
          >
            <img src={youtube} alt="YouTube" />
          </a>
          <a
            href="https://www.linkedin.com/company/npocaindia/"
            target="_blank"
            rel="noopener noreferrer"
            className="navlink"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
