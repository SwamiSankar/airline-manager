import React from "react";
import { Link } from "react-router-dom";
import headerimage from '../../images/header-image.jpg';


const Header = () => {
  return (
      <header>
          <div className="website-title">
              {/* <img className="website-title-img" src={headerimage} alt="flight" /> */}
              {/* <h1 className="website-title-main">Airline Management System</h1>
              <h4 className="website-title-caption">For Hassle free onboarding</h4> */}
          </div>
          <nav className="navbar">
              <ul>
              <li>
              <div className="navbar-link-wrapper">
                  <Link className="navbar-links" to="/">
                      Home
                  </Link>
              </div>
              </li>
              <li>
              <div className="navbar-link-wrapper">
                  <Link className="navbar-links" to="/checkin">
                      Check-In
                  </Link>
              </div>
              </li>
              <li>
              <div className="navbar-link-wrapper">
                  <Link className="navbar-links" to="/inflight">
                      In-Flight
                  </Link>
              </div>
              </li>
              <li>
              <div className="navbar-link-wrapper">
                  <Link className="navbar-links" to="/dashboard">
                      Dashboard
                  </Link>
              </div>
              </li>
              <li>
              <div className="navbar-link-wrapper">
                  <Link className="navbar-links" to="/signin">
                      Sign-In
                  </Link>
              </div>
              </li>
              </ul>
              
          </nav>
      </header>
      
  )
};

export default Header;
