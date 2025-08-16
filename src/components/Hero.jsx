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
            </p>{" "}
            <div className="cta-buttons hello">
              <a
                href="https://forms.gle/yE9oVqDg7SLCEsYf9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary large"
              >
                Register Your Team
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-icon">
              <span className="span_hero">{"<>"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
