import React from "react";
import GlassCard from "../components/GlassCard";
import "../styles/Registration.css"
const Registration = () => {
  return (
    <div className="hackathon-info-page">
      <div className="container">
        {/* Header Section */}
        <div className="page-header">
          <h1>Build4Change Hackathon</h1>
          <p className="page-subtitle">
            Everything you need to know to participate
          </p>
          <div className="event-highlight">
            <span className="highlight-badge">8-Hour Innovation Challenge</span>
            <span className="highlight-badge">August 23, 2025</span>
            <span className="highlight-badge">₹300 per team</span>
          </div>
        </div>

        {/* Quick Registration CTA */}
        <div className="registration-cta">
          <GlassCard className="cta-card">
            <h2>Ready to Build for Change?</h2>
            <p>
              Register your team now and be part of the innovation revolution!
            </p>
            <div className="cta-buttons">
              <a
                href="https://forms.google.com/build4change-registration"
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary large"
              >
                Register Your Team
              </a>
              <a href="#schedule" className="btn ghost large">
                View Schedule
              </a>
            </div>
          </GlassCard>
        </div>

        {/* Event Schedule */}
        <section id="schedule" className="info-section">
          <h2 className="section-title">Event Schedule</h2>
          <GlassCard>
            <div className="schedule-grid">
              <div className="schedule-item">
                <div className="time">8:00 AM - 9:00 AM</div>
                <div className="activity">
                  <h4>Registration & Check-in</h4>
                  <p>Team verification and welcome kit distribution</p>
                </div>
              </div>
              <div className="schedule-item">
                <div className="time">8:45 AM</div>
                <div className="activity">
                  <h4>Problem Statement Reveal</h4>
                  <p>Official announcement of hackathon challenges</p>
                </div>
              </div>
              <div className="schedule-item">
                <div className="time">9:00 AM</div>
                <div className="activity">
                  <h4>Hackathon Begins</h4>
                  <p>Start coding! Initial development phase</p>
                </div>
              </div>
              <div className="schedule-item">
                <div className="time">11:00 AM</div>
                <div className="activity">
                  <h4>Code Push Deadline #1</h4>
                  <p>Mandatory code submission - 2 hour checkpoint</p>
                </div>
              </div>
              <div className="schedule-item">
                <div className="time">1:00 PM</div>
                <div className="activity">
                  <h4>Code Push Deadline #2 & Lunch</h4>
                  <p>Second code submission + networking and refreshments</p>
                </div>
              </div>
              <div className="schedule-item">
                <div className="time">3:00 PM</div>
                <div className="activity">
                  <h4>Code Push Deadline #3</h4>
                  <p>Final development phase - last 2 hour checkpoint</p>
                </div>
              </div>
              <div className="schedule-item">
                <div className="time">5:00 PM</div>
                <div className="activity">
                  <h4>Hackathon Ends & Judging Begins</h4>
                  <p>Final code submission and project evaluation starts</p>
                </div>
              </div>
              <div className="schedule-item">
                <div className="time">5:00 PM - 6:00 PM</div>
                <div className="activity">
                  <h4>Project Presentations & Evaluation</h4>
                  <p>Teams present their solutions to judges</p>
                </div>
              </div>
              <div className="schedule-item">
                <div className="time">6:00 PM</div>
                <div className="activity">
                  <h4>Winner Announcement & Prize Distribution</h4>
                  <p>Results declaration and closing ceremony</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Rules & Guidelines */}
        <section className="info-section">
          <h2 className="section-title">Rules & Guidelines</h2>
          <div className="rules-grid">
            <GlassCard className="rule-card">
              <div className="rule-icon">👥</div>
              <h3>Team Composition</h3>
              <ul>
                <li>Teams must have 2-4 members</li>
                <li>Individual participation not allowed</li>
                <li>Team leader must be present throughout</li>
                <li>Cross-college teams are welcome</li>
              </ul>
            </GlassCard>

            <GlassCard className="rule-card">
              <div className="rule-icon">⏰</div>
              <h3>Time Constraints</h3>
              <ul>
                <li>Strict 8-hour development time</li>
                <li>Late submissions will be disqualified</li>
                <li>Presentation time: 5 minutes per team</li>
                <li>No extensions under any circumstances</li>
              </ul>
            </GlassCard>

            <GlassCard className="rule-card">
              <div className="rule-icon">💻</div>
              <h3>Technical Requirements</h3>
              <ul>
                <li>Bring your own laptops and devices</li>
                <li>Wi-Fi and power will be provided</li>
                <li>Use any programming language/framework</li>
                <li>Open source libraries are allowed</li>
              </ul>
            </GlassCard>

            <GlassCard className="rule-card">
              <div className="rule-icon">🚫</div>
              <h3>Prohibited Activities</h3>
              <ul>
                <li>No pre-written code allowed</li>
                <li>Plagiarism will lead to disqualification</li>
                <li>No external help during development</li>
                <li>Respect code of conduct at all times</li>
              </ul>
            </GlassCard>

            <GlassCard className="rule-card">
              <div className="rule-icon">🏆</div>
              <h3>Judging Criteria</h3>
              <ul>
                <li>Innovation & Creativity (30%)</li>
                <li>Technical Implementation (25%)</li>
                <li>Social Impact & Feasibility (25%)</li>
                <li>Presentation & Demo (20%)</li>
              </ul>
            </GlassCard>

            <GlassCard className="rule-card">
              <div className="rule-icon">🎁</div>
              <h3>Rewards & Recognition</h3>
              <ul>
                <li>Exciting prizes for winners</li>
                <li>Certificates for all participants</li>
                <li>Recognition for innovative solutions</li>
                <li>Networking opportunities with industry experts</li>
              </ul>
            </GlassCard>
          </div>
        </section>

        {/* What to Bring */}
        <section className="info-section">
          <h2 className="section-title">What to Bring</h2>
          <div className="bring-grid">
            <GlassCard className="bring-card">
              <h3>💼 Essential Items</h3>
              <div className="checklist">
                <div className="checklist-item">✅ Laptop with charger</div>
                <div className="checklist-item">✅ Student ID card</div>
                <div className="checklist-item">✅ Government photo ID</div>
                <div className="checklist-item">
                  ✅ Registration confirmation
                </div>
              </div>
            </GlassCard>

            <GlassCard className="bring-card">
              <h3>🔧 Recommended Items</h3>
              <div className="checklist">
                <div className="checklist-item">
                  ✅ Extension cords/power banks
                </div>
                <div className="checklist-item">✅ Notepad and pen</div>
                <div className="checklist-item">✅ Headphones</div>
                <div className="checklist-item">✅ Water bottle</div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Contact & Support */}
        <section className="info-section">
          <h2 className="section-title">Need Help?</h2>
          <GlassCard className="contact-card">
            <div className="contact-grid">
              <div className="contact-item">
                <h4>📞 Phone Support</h4>
                <p>+91 7498399449</p>
                <p className="muted">Available 24/7 before event</p>
              </div>
              <div className="contact-item">
                <h4>📧 Email Support</h4>
                <p>altamashsheikh077@gmail.com</p>
                <p className="muted">Response within 2 hours</p>
              </div>
              <div className="contact-item">
                <h4>💬 WhatsApp Group</h4>
                <a
                  href="https://chat.whatsapp.com/build4change"
                  className="btn ghost"
                >
                  Join Group
                </a>
                <p className="muted">For real-time updates</p>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
};

export default Registration;
