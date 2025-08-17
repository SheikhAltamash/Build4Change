// components/Sponsors.js
import React from "react";
import "../styles/Sponsors.css"
const Sponsors = () => {
  return (
    <section className="section">
      {" "}
      <h2 className="section-title">Our Sponsors</h2>
      <div className="container sponserContainer">
        {/* Main Sponsor */}
        <div className="sponsor-card glass main-sponsor">
          <img
            src="/images/smartOwl.png"
            alt="Smart Owl"
            className="sponsor-logo large"
          />
          <h3>Smart Owl</h3>
          <p className="muted">
            Empowering lifelong learners with innovative education solutions
          </p>
        </div>
        <div className="sponsor-card glass main-sponsor">
          <img
            src="/images/devSource.png"
            alt="Smart Owl"
            className="sponsor-logo large"
          />
          <h3>Dev Source</h3>
          <p className="muted">
            Connecting developers with endless opportunities
          </p>
        </div>
        <div className="sponsor-card glass main-sponsor">
          <img
            src="/images/ieee.png"
            alt="Smart Owl"
            className="sponsor-logo large ieee"
          />
          <h3>IEEE Computer Society</h3>
          <p className="muted">Shaping the Future of Technology</p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
