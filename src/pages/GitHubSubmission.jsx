import React, { useState } from "react";
import GlassCard from "../components/GlassCard";

const GitHubSubmission = () => {
  const [submissionData, setSubmissionData] = useState({
    teamName: "",
    teamLeaderEmail: "",
    problemId: "",
    repoUrl: "",
    demoUrl: "",
    videoUrl: "",
    description: "",
    techStack: "",
    challenges: "",
    future: "",
  });

  const handleChange = (e) => {
    setSubmissionData({
      ...submissionData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submission data:", submissionData);
    alert("Project submitted successfully!");
  };

  return (
    <div
      className="submission-page"
      style={{ padding: "120px 0 80px", minHeight: "100vh" }}
    >
      <div className="container">
        <div
          className="submission-header"
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "15px",
              background: "linear-gradient(45deg, #ff6b35, #f7931e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Submit Your Project
          </h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>
            Submit your GitHub repository and project details
          </p>
        </div>

        <GlassCard
          className="submission-form-card"
          style={{
            padding: "40px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "25px" }}
          >
            <div className="form-section">
              <h2
                style={{
                  color: "#4fc3f7",
                  marginBottom: "20px",
                  fontSize: "1.5rem",
                }}
              >
                Team Information
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                <div className="form-group">
                  <label
                    style={{
                      marginBottom: "8px",
                      fontWeight: "500",
                      color: "#e0e0e0",
                      display: "block",
                    }}
                  >
                    Team Name *
                  </label>
                  <input
                    type="text"
                    name="teamName"
                    value={submissionData.teamName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your team name"
                    style={{
                      padding: "12px 15px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      fontSize: "16px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label
                    style={{
                      marginBottom: "8px",
                      fontWeight: "500",
                      color: "#e0e0e0",
                      display: "block",
                    }}
                  >
                    Team Leader Email *
                  </label>
                  <input
                    type="email"
                    name="teamLeaderEmail"
                    value={submissionData.teamLeaderEmail}
                    onChange={handleChange}
                    required
                    placeholder="leader@example.com"
                    style={{
                      padding: "12px 15px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      fontSize: "16px",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2
                style={{
                  color: "#4fc3f7",
                  marginBottom: "20px",
                  fontSize: "1.5rem",
                }}
              >
                Project Details
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div className="form-group">
                  <label
                    style={{
                      marginBottom: "8px",
                      fontWeight: "500",
                      color: "#e0e0e0",
                      display: "block",
                    }}
                  >
                    Problem Statement *
                  </label>
                  <select
                    name="problemId"
                    value={submissionData.problemId}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "12px 15px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      fontSize: "16px",
                      width: "100%",
                    }}
                  >
                    <option value="">Select the problem you solved</option>
                    <option value="1">Smart Health Monitoring System</option>
                    <option value="2">Interactive Learning Platform</option>
                    <option value="3">Carbon Footprint Tracker</option>
                    <option value="4">Smart City Traffic Management</option>
                    <option value="5">Micro-lending Platform</option>
                    <option value="6">Community Support Network</option>
                  </select>
                </div>

                <div className="form-group">
                  <label
                    style={{
                      marginBottom: "8px",
                      fontWeight: "500",
                      color: "#e0e0e0",
                      display: "block",
                    }}
                  >
                    GitHub Repository URL *
                  </label>
                  <input
                    type="url"
                    name="repoUrl"
                    value={submissionData.repoUrl}
                    onChange={handleChange}
                    required
                    placeholder="https://github.com/yourteam/project-name"
                    style={{
                      padding: "12px 15px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      fontSize: "16px",
                      width: "100%",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                  }}
                >
                  <div className="form-group">
                    <label
                      style={{
                        marginBottom: "8px",
                        fontWeight: "500",
                        color: "#e0e0e0",
                        display: "block",
                      }}
                    >
                      Live Demo URL
                    </label>
                    <input
                      type="url"
                      name="demoUrl"
                      value={submissionData.demoUrl}
                      onChange={handleChange}
                      placeholder="https://your-demo-site.com"
                      style={{
                        padding: "12px 15px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "10px",
                        background: "rgba(255, 255, 255, 0.1)",
                        color: "white",
                        fontSize: "16px",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      style={{
                        marginBottom: "8px",
                        fontWeight: "500",
                        color: "#e0e0e0",
                        display: "block",
                      }}
                    >
                      Demo Video URL
                    </label>
                    <input
                      type="url"
                      name="videoUrl"
                      value={submissionData.videoUrl}
                      onChange={handleChange}
                      placeholder="https://youtube.com/watch?v=..."
                      style={{
                        padding: "12px 15px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "10px",
                        background: "rgba(255, 255, 255, 0.1)",
                        color: "white",
                        fontSize: "16px",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2
                style={{
                  color: "#4fc3f7",
                  marginBottom: "20px",
                  fontSize: "1.5rem",
                }}
              >
                Project Description
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div className="form-group">
                  <label
                    style={{
                      marginBottom: "8px",
                      fontWeight: "500",
                      color: "#e0e0e0",
                      display: "block",
                    }}
                  >
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={submissionData.description}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Describe your project, its features, and how it solves the problem..."
                    style={{
                      padding: "12px 15px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      fontSize: "16px",
                      width: "100%",
                      resize: "vertical",
                    }}
                  />
                </div>

                <div className="form-group">
                  <label
                    style={{
                      marginBottom: "8px",
                      fontWeight: "500",
                      color: "#e0e0e0",
                      display: "block",
                    }}
                  >
                    Technology Stack *
                  </label>
                  <input
                    type="text"
                    name="techStack"
                    value={submissionData.techStack}
                    onChange={handleChange}
                    required
                    placeholder="React, Node.js, MongoDB, etc."
                    style={{
                      padding: "12px 15px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      fontSize: "16px",
                      width: "100%",
                    }}
                  />
                </div>

                <div className="form-group">
                  <label
                    style={{
                      marginBottom: "8px",
                      fontWeight: "500",
                      color: "#e0e0e0",
                      display: "block",
                    }}
                  >
                    Challenges Faced
                  </label>
                  <textarea
                    name="challenges"
                    value={submissionData.challenges}
                    onChange={handleChange}
                    rows="3"
                    placeholder="What challenges did you face and how did you overcome them?"
                    style={{
                      padding: "12px 15px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      fontSize: "16px",
                      width: "100%",
                      resize: "vertical",
                    }}
                  />
                </div>

                <div className="form-group">
                  <label
                    style={{
                      marginBottom: "8px",
                      fontWeight: "500",
                      color: "#e0e0e0",
                      display: "block",
                    }}
                  >
                    Future Enhancements
                  </label>
                  <textarea
                    name="future"
                    value={submissionData.future}
                    onChange={handleChange}
                    rows="3"
                    placeholder="What would you add to this project given more time?"
                    style={{
                      padding: "12px 15px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      fontSize: "16px",
                      width: "100%",
                      resize: "vertical",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <button type="submit" className="btn-primary">
                Submit Project
              </button>
            </div>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};

export default GitHubSubmission;
