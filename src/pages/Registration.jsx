import React, { useState } from "react";
import GlassCard from "../components/GlassCard";
import "../styles/Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    teamLeaderName: "",
    teamLeaderEmail: "",
    teamLeaderPhone: "",
    teamLeaderCollege: "",
    member2Name: "",
    member2Email: "",
    member3Name: "",
    member3Email: "",
    member4Name: "",
    member4Email: "",
    preferredTheme: "",
    experience: "",
    expectations: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Registration submitted successfully!");
  };

  return (
    <div className="registration-page">
      <div className="container">
        <div className="registration-header">
          <h1>Register for Build4Change</h1>
          <p>Join us for an exciting 8-hour hackathon experience!</p>
        </div>

        <GlassCard className="registration-form-card">
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-section">
              <h2>Team Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>Team Name *</label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your team name"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Team Leader Details</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="teamLeaderName"
                    value={formData.teamLeaderName}
                    onChange={handleChange}
                    required
                    placeholder="Team leader's full name"
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="teamLeaderEmail"
                    value={formData.teamLeaderEmail}
                    onChange={handleChange}
                    required
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="teamLeaderPhone"
                    value={formData.teamLeaderPhone}
                    onChange={handleChange}
                    required
                    placeholder="+91 9876543210"
                  />
                </div>
                <div className="form-group">
                  <label>College *</label>
                  <input
                    type="text"
                    name="teamLeaderCollege"
                    value={formData.teamLeaderCollege}
                    onChange={handleChange}
                    required
                    placeholder="College name"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Team Members (Optional)</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>Member 2 Name</label>
                  <input
                    type="text"
                    name="member2Name"
                    value={formData.member2Name}
                    onChange={handleChange}
                    placeholder="Member 2 full name"
                  />
                </div>
                <div className="form-group">
                  <label>Member 2 Email</label>
                  <input
                    type="email"
                    name="member2Email"
                    value={formData.member2Email}
                    onChange={handleChange}
                    placeholder="member2@example.com"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Member 3 Name</label>
                  <input
                    type="text"
                    name="member3Name"
                    value={formData.member3Name}
                    onChange={handleChange}
                    placeholder="Member 3 full name"
                  />
                </div>
                <div className="form-group">
                  <label>Member 3 Email</label>
                  <input
                    type="email"
                    name="member3Email"
                    value={formData.member3Email}
                    onChange={handleChange}
                    placeholder="member3@example.com"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Member 4 Name</label>
                  <input
                    type="text"
                    name="member4Name"
                    value={formData.member4Name}
                    onChange={handleChange}
                    placeholder="Member 4 full name"
                  />
                </div>
                <div className="form-group">
                  <label>Member 4 Email</label>
                  <input
                    type="email"
                    name="member4Email"
                    value={formData.member4Email}
                    onChange={handleChange}
                    placeholder="member4@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Additional Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Theme</label>
                  <select
                    name="preferredTheme"
                    value={formData.preferredTheme}
                    onChange={handleChange}
                  >
                    <option value="">Select a theme</option>
                    <option value="healthcare">Healthcare Innovation</option>
                    <option value="education">Education Technology</option>
                    <option value="environment">
                      Environmental Sustainability
                    </option>
                    <option value="smartcity">Smart Cities</option>
                    <option value="fintech">Financial Inclusion</option>
                    <option value="social">Social Impact</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Experience Level</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>What do you expect from this hackathon?</label>
                <textarea
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Share your expectations..."
                ></textarea>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Register Team (₹200)
              </button>
            </div>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};

export default Registration;
