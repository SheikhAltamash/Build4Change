import React from "react";
import "../styles/Footer.css"
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          {/* Main Footer Content */}
          <div className="footer-main">
            <div className="footer-section">
              <div className="footer-brand">
                <h3 className="footer-title">
                  Build<span className="accent">4</span>Change
                </h3>
                <p className="footer-subtitle">8-hour Innovation Hackathon</p>
                <p className="footer-date">August 23, 2025</p>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Organized By</h4>
              <div className="organizer-info">
                <p>
                  <strong>Krans Forum</strong>
                </p>
                <p>Computer Science & Engineering Department</p>
                <p>Anjuman College of Engineering and Technology</p>
                <div className="accreditation">
                  <span className="pill">NAAC A++ Grade</span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <nav className="footer-nav">
                <a href="#home">Home</a>
                {/* <a href="#problems">Problem Statements</a> */}
                <a href="#register">Register</a>
                {/* <a href="#submit">Submit Project</a> */}
              </nav>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Contact</h4>
              <div className="contact-info">
                <a
                  href="mailto:info@anjumancollege.edu"
                  className="contact-link"
                >
                  📧 altamashsheikh077@gmail.com
                </a>
                <a href="tel:+919876543210" className="contact-link">
                  📞 +91 7498399449
                </a>
                     </div>
            </div>
          </div>

          {/* Sponsor Section */}
         

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                © 2025 Build4Change Hackathon. All rights reserved.
              </p>
              <div className="footer-links">
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
                <span className="divider">•</span>
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
                <span className="divider">•</span>
                <a href="#" className="footer-link">
                  Code of Conduct
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
