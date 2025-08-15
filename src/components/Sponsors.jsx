// components/Sponsors.js
import React from "react";
import "../styles/Sponsors.css"
const Sponsors = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Our Sponsor</h2>

    
          {/* Main Sponsor */}
          <div className="sponsor-card glass main-sponsor">
 
            <img
              src="/images/smartOwl.png"
              alt="Smart Owl"
              className="sponsor-logo large"
            />
            <h3>Smart Owl</h3>
            <p className="muted">Powering Innovation & Technology</p>
          </div>

       
    
      </div>
    </section>
  );
};

export default Sponsors;
