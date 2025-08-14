import React from "react";
import GlassCard from "./GlassCard";

const Themes = () => {
  const themes = [
    {
      title: "Healthcare Innovation",
      description:
        "Build solutions for better healthcare accessibility and patient care",
      icon: "🏥",
    },
    {
      title: "Education Technology",
      description: "Create tools and platforms to enhance learning experiences",
      icon: "📚",
    },
    {
      title: "Environmental Sustainability",
      description:
        "Develop solutions for climate change and environmental conservation",
      icon: "🌱",
    },
    {
      title: "Smart Cities",
      description: "Design technologies for intelligent urban infrastructure",
      icon: "🏙️",
    },
    {
      title: "Financial Inclusion",
      description: "Build fintech solutions for underserved communities",
      icon: "💳",
    },
    {
      title: "Social Impact",
      description: "Create applications that address social challenges",
      icon: "🤝",
    },
  ];

  return (
    <section className="themes" style={{ padding: "80px 0" }}>
      <div className="container">
        <h2 className="section-title">Hackathon Themes</h2>
        <div className="details-grid">
          {themes.map((theme, index) => (
            <GlassCard key={index} className="detail-card">
              <div className="detail-icon">{theme.icon}</div>
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;
