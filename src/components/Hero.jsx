import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Build<span className="highlight">4</span>Change
            </h1>
            <h2>8-hour Hackathon</h2>
            <p className="hero-description">
              Join us for an exciting 8-hour hackathon where innovation meets
              impact. Build solutions that can change the world!
            </p>
            <p className="organizer-info">
              Organized by <strong>Krans Forum</strong>
              <br />
              Computer Science and Engineering Department
              <br />
              Anjuman College of Engineering and Technology
            </p>
            <div className="hero-buttons">
              <Link to="/register" className="btn-primary">
                Register Now
              </Link>
              <Link to="/problems" className="btn-secondary">
                View Problems
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-icon">
              <span>{"<>"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
