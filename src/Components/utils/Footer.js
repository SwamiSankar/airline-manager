import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-about">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea obcaecati corporis dolorum maiores voluptate nisi non? Tenetur possimus accusamus quo.</p>
        </div>
        <div className="footer-links-container">
          <ul className="footer-links-list">
          <li>
              <div className="footer-link-wrapper">
                  <Link className="footer-links" to="/">
                      Home
                  </Link>
              </div>
              </li>
              <li>
              <div className="footer-link-wrapper">
                  <Link className="footer-links" to="/checkin">
                      Check-In
                  </Link>
              </div>
              </li>
              <li>
              <div className="footer-link-wrapper">
                  <Link className="footer-links" to="/inflight">
                      In-Flight
                  </Link>
              </div>
              </li>
              <li>
              <div className="footer-link-wrapper">
                  <Link className="footer-links" to="/dashboard">
                      Dashboard
                  </Link>
              </div>
              </li>
              <li>
              <div className="footer-link-wrapper">
                  <Link className="footer-links" to="/signin">
                      Sign-In
                  </Link>
              </div>
              </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
