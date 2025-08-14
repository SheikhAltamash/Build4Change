import React from "react";
import GlassCard from "./GlassCard";
import "../styles/EventDetails.css";

const EventDetails = () => {
  const eventInfo = [
    {
      icon: "📅",
      title: "Date",
      value: "23 August 2025",
      subtitle: "Friday",
    },
    {
      icon: "⏰",
      title: "Duration",
      value: "8 Hours",
      subtitle: "9:00 AM - 5:00 PM",
    },
    {
      icon: "🏢",
      title: "Venue",
      value: "Anjuman College",
      subtitle: "Engineering & Technology",
    },
    {
      icon: "👥",
      title: "Team Size",
      value: "2-4 Members",
      subtitle: "Per Team",
    },
    {
      icon: "💰",
      title: "Entry Fee",
      value: "₹200 per team",
      subtitle: "₹50 per person",
    },
    {
      icon: "🏆",
      title: "Prize Pool",
      value: "Exciting Rewards",
      subtitle: "Certificates & Goodies",
    },
  ];

  return (
    <section className="event-details">
      <div className="container">
        <h2 className="section-title">Event Details</h2>
        <div className="details-grid">
          {eventInfo.map((info, index) => (
            <GlassCard key={index} className="detail-card">
              <div className="detail-icon">{info.icon}</div>
              <h3>{info.title}</h3>
              <p className="detail-value">{info.value}</p>
              <p className="detail-subtitle">{info.subtitle}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
