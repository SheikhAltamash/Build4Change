import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        padding: "40px 0",
        marginTop: "auto",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="container">
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <div>
            <h3>Build4Change Hackathon</h3>
            <p>Organized by Krans Forum, CSE Department</p>
            <p>Anjuman College of Engineering and Technology</p>
          </div>
          <div style={{ opacity: 0.7 }}>
            <p>© 2025 Build4Change. All rights reserved.</p>
            <p>Contact: info@anjumancollege.edu | +91 9876543210</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
