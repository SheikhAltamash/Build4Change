import React from "react";
import GlassCard from "../components/GlassCard";
import "../styles/ProblemStatements.css";

const ProblemStatements = () => {
  const problems = [
    {
      id: 1,
      title: "Smart Health Monitoring System",
      theme: "Healthcare Innovation",
      description:
        "Develop a comprehensive health monitoring application that can track vital signs, predict health issues, and provide personalized health recommendations.",
      requirements: [
        "Real-time health data tracking",
        "Predictive analytics for health risks",
        "User-friendly dashboard",
        "Emergency alert system",
      ],
      difficulty: "Intermediate",
      techSuggestions: ["React/Flutter", "Node.js", "MongoDB", "IoT sensors"],
    },
    {
      id: 2,
      title: "Interactive Learning Platform",
      theme: "Education Technology",
      description:
        "Create an AI-powered learning platform that adapts to individual learning styles and provides personalized educational content.",
      requirements: [
        "Adaptive learning algorithms",
        "Multi-media content support",
        "Progress tracking",
        "Gamification elements",
      ],
      difficulty: "Advanced",
      techSuggestions: ["React", "Python/Flask", "TensorFlow", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Carbon Footprint Tracker",
      theme: "Environmental Sustainability",
      description:
        "Build an application that helps individuals and organizations track, analyze, and reduce their carbon footprint through actionable insights.",
      requirements: [
        "Carbon footprint calculation",
        "Data visualization",
        "Reduction recommendations",
        "Community challenges",
      ],
      difficulty: "Beginner",
      techSuggestions: ["React", "Node.js", "Chart.js", "Firebase"],
    },
    {
      id: 4,
      title: "Smart City Traffic Management",
      theme: "Smart Cities",
      description:
        "Design a traffic management system that optimizes traffic flow, reduces congestion, and improves public transportation efficiency.",
      requirements: [
        "Real-time traffic monitoring",
        "Route optimization",
        "Public transport integration",
        "Emergency vehicle prioritization",
      ],
      difficulty: "Advanced",
      techSuggestions: [
        "Python",
        "OpenCV",
        "Google Maps API",
        "Machine Learning",
      ],
    },
    {
      id: 5,
      title: "Micro-lending Platform",
      theme: "Financial Inclusion",
      description:
        "Develop a peer-to-peer micro-lending platform that connects lenders with borrowers in underserved communities.",
      requirements: [
        "User verification system",
        "Credit scoring algorithm",
        "Secure payment gateway",
        "Risk assessment tools",
      ],
      difficulty: "Intermediate",
      techSuggestions: ["React", "Node.js", "Blockchain", "Payment APIs"],
    },
    {
      id: 6,
      title: "Community Support Network",
      theme: "Social Impact",
      description:
        "Create a platform that connects community members to share resources, provide mutual aid, and strengthen local social bonds.",
      requirements: [
        "Resource sharing system",
        "Event organization tools",
        "Volunteer matching",
        "Community forums",
      ],
      difficulty: "Beginner",
      techSuggestions: [
        "React",
        "Firebase",
        "Google Maps",
        "Push Notifications",
      ],
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "#4caf50";
      case "Intermediate":
        return "#ff9800";
      case "Advanced":
        return "#f44336";
      default:
        return "#2196f3";
    }
  };

  return (
    <div className="problems-page">
      <div className="container">
        <div className="problems-header">
          <h1>Problem Statements</h1>
          <p>
            Choose a problem that inspires you and build innovative solutions!
          </p>
        </div>

        <div className="problems-grid">
          {problems.map((problem) => (
            <GlassCard key={problem.id} className="problem-card">
              <div className="problem-header">
                <h3>{problem.title}</h3>
                <div className="problem-meta">
                  <span className="theme-tag">{problem.theme}</span>
                  <span
                    className="difficulty-tag"
                    style={{
                      backgroundColor: getDifficultyColor(problem.difficulty),
                    }}
                  >
                    {problem.difficulty}
                  </span>
                </div>
              </div>

              <p className="problem-description">{problem.description}</p>

              <div className="problem-requirements">
                <h4>Key Requirements:</h4>
                <ul>
                  {problem.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="tech-suggestions">
                <h4>Suggested Technologies:</h4>
                <div className="tech-tags">
                  {problem.techSuggestions.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;
