import React from "react";
import "../styles/GlassCard.css";

const GlassCard = ({ children, className = "", ...props }) => {
  return (
    <div className={`glass-card ${className}`} {...props}>
      {children}
    </div>
  );
};

export default GlassCard;
