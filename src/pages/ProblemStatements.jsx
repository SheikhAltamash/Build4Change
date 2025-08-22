import React, { useMemo } from "react";
import GlassCard from "../components/GlassCard";
import "../styles/ProblemStatements.css";

const ProblemStatements = () => {
  // Replaced with your new data
  const problems = [
    // Healthcare Innovation
    {
      title: "Rural Telemedicine Connector",
      theme: "Healthcare Innovation",
      description:
        "Build a platform connecting rural patients with doctors via video calls and chat, including appointment scheduling and basic symptom checkers.",
    },
    {
      title: "Medication Reminder & Tracker",
      theme: "Healthcare Innovation",
      description:
        "Create a mobile app that sends personalized medication reminders, tracks adherence, and provides basic drug interaction warnings.",
    },
    {
      title: "Mental Health Mood Monitor",
      theme: "Healthcare Innovation",
      description:
        "Develop a app that analyzes text input (journal entries) for mood patterns and provides basic mental wellness resources.",
    },
    {
      title: "Medical Image Anomaly Detector",
      theme: "Healthcare Innovation",
      description:
        "Build a basic CNN model to detect common anomalies in chest X-rays or skin lesions using pre-trained models.",
    },
    {
      title: "Healthcare Cost Calculator",
      theme: "Healthcare Innovation",
      description:
        "Design a tool that estimates treatment costs for common procedures and helps users find affordable healthcare options in their area.",
    },

    // Education Technology
    {
      title: "Personalized Learning Path Generator",
      theme: "Education Technology",
      description:
        "Create a platform that assesses student skills and generates customized learning roadmaps with resource recommendations.",
    },
    {
      title: "Interactive Study Group Matcher",
      theme: "Education Technology",
      description:
        "Build an app that connects students with similar learning goals and schedules for collaborative study sessions.",
    },
    {
      title: "Exam Prep Chatbot",
      theme: "Education Technology",
      description:
        "Develop an AI-powered chatbot that creates practice questions and provides instant feedback for specific subjects.",
    },
    {
      title: "Accessibility Learning Tools",
      theme: "Education Technology",
      description:
        "Design educational tools for students with disabilities, such as text-to-speech readers or visual learning aids.",
    },
    {
      title: "Skill Assessment Dashboard",
      theme: "Education Technology",
      description:
        "Create a platform that tracks student progress across multiple subjects and identifies knowledge gaps.",
    },

    // Environmental Sustainability
    {
      title: "Carbon Footprint Calculator",
      theme: "Environmental Sustainability",
      description:
        "Build an app that calculates personal carbon footprint based on daily activities and suggests reduction strategies.",
    },
    {
      title: "Waste Sorting Assistant",
      theme: "Environmental Sustainability",
      description:
        "Develop a mobile app using image recognition to help users correctly sort waste and learn recycling guidelines.",
    },
    {
      title: "Smart Energy Usage Monitor",
      theme: "Environmental Sustainability",
      description:
        "Create a dashboard that tracks household energy consumption and provides conservation tips.",
    },
    {
      title: "Sustainable Transportation Planner",
      theme: "Environmental Sustainability",
      description:
        "Design an app that suggests eco-friendly travel routes and calculates emissions saved.",
    },
    {
      title: "Community Green Challenge Platform",
      theme: "Environmental Sustainability",
      description:
        "Build a gamified platform where users can participate in environmental challenges and track collective impact.",
    },

    // Smart Cities
    {
      title: "Crowdsourced Infrastructure Reporter",
      theme: "Smart Cities",
      description:
        "Create a platform for citizens to report infrastructure issues (potholes, streetlight outages) with photo uploads and status tracking.",
    },
    {
      title: "Public Transport Optimization Tool",
      theme: "Smart Cities",
      description:
        "Build a real-time system that suggests optimal routes and predicts delays based on current traffic data.",
    },
    {
      title: "Smart Parking Finder",
      theme: "Smart Cities",
      description:
        "Develop an app that shows available parking spaces in real-time and allows advance booking.",
    },
    {
      title: "Citizen Engagement Portal",
      theme: "Smart Cities",
      description:
        "Design a platform where residents can participate in local governance through polls, suggestions, and community discussions.",
    },
    {
      title: "Emergency Response Coordinator",
      theme: "Smart Cities",
      description:
        "Create a system that efficiently coordinates emergency resources and provides real-time updates during disasters.",
    },

    // Financial Inclusion
    {
      title: "Micro-Savings Goal Tracker",
      theme: "Financial Inclusion",
      description:
        "Build an app that helps low-income users set and achieve small savings goals with automated transfers and progress visualization.",
    },
    {
      title: "Financial Literacy Gamification",
      theme: "Financial Inclusion",
      description:
        "Create an interactive game that teaches basic financial concepts like budgeting, credit scores, and investment basics.",
    },
    {
      title: "Peer-to-Peer Lending Platform",
      theme: "Financial Inclusion",
      description:
        "Design a platform connecting individuals for small loans with basic credit assessment tools.",
    },
    {
      title: "Digital Stokvel Manager",
      theme: "Financial Inclusion",
      description:
        "Develop a web app to manage rotating savings groups with member tracking and automated contributions.",
    },
    {
      title: "Gig Worker Income Tracker",
      theme: "Financial Inclusion",
      description:
        "Create a tool that helps freelancers and gig workers track multiple income sources and manage irregular cash flow.",
    },

    // Social Impact
    {
      title: "Volunteer Opportunity Matcher",
      theme: "Social Impact",
      description:
        "Build a platform connecting volunteers with NGOs based on skills, location, and availability with hour tracking.",
    },
    {
      title: "Community Skill Exchange",
      theme: "Social Impact",
      description:
        "Create a web app where community members can offer and request skills (teaching, repairs, cooking) in a bartering system.",
    },
    {
      title: "Disaster Preparedness Educator",
      theme: "Social Impact",
      description:
        "Design an interactive platform providing disaster preparation checklists and emergency response tutorials.",
    },
    {
      title: "Senior Citizen Support Network",
      theme: "Social Impact",
      description:
        "Build a platform connecting elderly people with volunteers for companionship, and basic tech support.",
    },
    {
      title: "Food Waste Reducer",
      theme: "Social Impact",
      description:
        "Develop an app connecting restaurants with excess food to local charities and food banks for redistribution.",
    },
  ];

  // 2-letter theme codes
  const THEME_CODES = {
    "Healthcare Innovation": "HI",
    "Education Technology": "ET",
    "Environmental Sustainability": "ES",
    "Smart Cities": "SC",
    "Financial Inclusion": "FI",
    "Social Impact": "SI",
  };

  // Group by theme and assign incremental short IDs per theme
  const grouped = useMemo(() => {
    const buckets = {};
    Object.keys(THEME_CODES).forEach((t) => (buckets[t] = []));
    problems.forEach((p) => {
      if (!buckets[p.theme]) buckets[p.theme] = [];
      buckets[p.theme].push(p);
    });

    const withIds = {};
    Object.entries(buckets).forEach(([theme, items]) => {
      const code = THEME_CODES[theme];
      withIds[theme] = items.map((p, idx) => ({
        ...p,
        shortId: `${code}${String(idx + 1).padStart(2, "0")}`,
      }));
    });
    return withIds;
  }, [problems]);

  return (
    <div className="problems-page">
      <div className="container">
        <div className="problems-header">
          <h1>Problem Statements</h1>
          <p>
            Explore the challenges grouped by theme. Each item has a compact ID.
          </p>
        </div>

        <div className="themes-stack">
          {Object.keys(THEME_CODES).map((theme) => {
            const list = grouped[theme] || [];
            if (!list.length) return null;
            const themeCode = THEME_CODES[theme];

            return (
              <section key={theme} className="theme-section">
                <h2 className="theme-heading">
                  {theme} ({themeCode})
                </h2>

                <div className="problems-grid">
                  {list.map((p) => (
                    <GlassCard
                      key={p.shortId}
                      className={`problem-card theme-${THEME_CODES[theme]}`}
                    >
                      {" "}
                      <div className="problem-header">
                        <h3>
                          <span className="short-id">{p.shortId}</span><br />
                          <br />
                          {p.title}
                        </h3>
                        {/* <div className="problem-meta">
                          <span className="theme-tag">{theme}</span>
                        </div> */}
                      </div>
                      <p className="problem-description">{p.description}</p>
                    </GlassCard>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;
