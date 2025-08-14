import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="container">
        <div className="nav-content">
          <div className="nav-brand">
            <img
              src="/images/image.png"
              alt="Anjuman College"
              className="college-logo"
            />
            <div className="brand-text">
              <h2>Build4Change</h2>
              <p>8-hour Hackathon</p>
            </div>
            <img
              src="/images/nac.png"
              alt="NAAC A++"
              className="naac-logo"
            />
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/problems" onClick={() => setIsMenuOpen(false)}>
              Problems
            </Link>
            <Link to="/submit" onClick={() => setIsMenuOpen(false)}>
              Submit
            </Link>
            <Link
              to="/register"
              className="register-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
