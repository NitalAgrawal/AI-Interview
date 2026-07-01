import React, { useState } from 'react';
import '../style/interview.scss';

const mockData = {
  "_id": {
    "$oid": "689af91fe5a3daf502d43744"
  },
  "matchScore": 86,
  "technicalQuestions": [
    {
      "question": "Explain the difference between authentication and authorization in Node.js applications.",
      "intention": "To evaluate understanding of authentication and access control.",
      "answer": "Authentication verifies the identity of a user, while authorization determines what resources the authenticated user can access. Authentication is usually implemented using JWT or sessions, whereas authorization is handled using roles and permissions."
    },
    {
      "question": "How does the Express.js middleware lifecycle work?",
      "intention": "To assess knowledge of Express request handling.",
      "answer": "Middleware functions execute sequentially. They can modify the request or response objects, end the request-response cycle, or pass control to the next middleware using next()."
    },
    {
      "question": "Explain MongoDB aggregation and give one practical use case.",
      "intention": "To test MongoDB querying skills.",
      "answer": "MongoDB aggregation processes documents through stages like $match, $group, and $project. It is commonly used for analytics, reports, and filtering complex datasets."
    }
  ],
  "hrQuestions": [
    {
      "question": "Tell me about yourself.",
      "intention": "To evaluate communication skills and confidence.",
      "answer": "Introduce yourself briefly, highlight your education, technical skills, projects, and career goals."
    }
  ],
  "strengths": [
    "Strong understanding of MERN Stack fundamentals.",
    "Good knowledge of REST APIs and Express.js."
  ],
  "weaknesses": [
    "Needs deeper understanding of system design concepts.",
    "Should improve advanced MongoDB optimization techniques."
  ],
  "recommendations": [
    "Revise JavaScript concepts including closures, promises, and the event loop."
  ]
};

const Interview = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [expandedQs, setExpandedQs] = useState({ 0: true, 1: true });

  const toggleQuestion = (index) => {
    setExpandedQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <main className="interview-container">
      <div className="interview-layout">
        
        {/* Left Sidebar */}
        <aside className="sidebar left-sidebar">
          <div className="sidebar-header">
            <span className="section-title">SECTIONS</span>
          </div>
          <div className="nav-menu">
            <button 
              className={`nav-item ${activeTab === 'technical' ? 'active' : ''}`}
              onClick={() => setActiveTab('technical')}
            >
              <span className="icon">{'</>'}</span> Technical Questions
            </button>
            <button 
              className={`nav-item ${activeTab === 'behavioral' ? 'active' : ''}`}
              onClick={() => setActiveTab('behavioral')}
            >
              <span className="icon">💬</span> Behavioral Questions
            </button>
            <button 
              className={`nav-item ${activeTab === 'roadmap' ? 'active' : ''}`}
              onClick={() => setActiveTab('roadmap')}
            >
              <span className="icon">🗺️</span> Road Map
            </button>
          </div>
        </aside>

        {/* Center Main Content */}
        <section className="main-content">

          {/* ── Technical Questions Tab ── */}
          {activeTab === 'technical' && (
            <>
              <div className="content-header">
                <h2>Technical Questions</h2>
                <span className="question-count">{mockData.technicalQuestions.length} questions</span>
              </div>
              <div className="questions-list">
                {mockData.technicalQuestions.map((q, index) => (
                  <div className="question-card" key={index}>
                    <div className="question-header" onClick={() => toggleQuestion(index)}>
                      <div className="question-title-wrapper">
                        <span className="q-number">Q{index + 1}</span>
                        <h3 className="question-text">{q.question}</h3>
                      </div>
                      <button className="expand-btn">{expandedQs[index] ? '⌃' : '⌄'}</button>
                    </div>
                    {expandedQs[index] && (
                      <div className="question-body">
                        <div className="intention-section">
                          <span className="badge intention-badge">INTENTION</span>
                          <p>{q.intention}</p>
                        </div>
                        <div className="answer-section">
                          <span className="badge answer-badge">MODEL ANSWER</span>
                          <p>{q.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ── Behavioral Questions Tab ── */}
          {activeTab === 'behavioral' && (
            <>
              <div className="content-header">
                <h2>Behavioral Questions</h2>
                <span className="question-count">{mockData.hrQuestions.length} questions</span>
              </div>
              <div className="questions-list">
                {mockData.hrQuestions.map((q, index) => (
                  <div className="question-card" key={index}>
                    <div className="question-header" onClick={() => toggleQuestion(`hr-${index}`)}>
                      <div className="question-title-wrapper">
                        <span className="q-number">Q{index + 1}</span>
                        <h3 className="question-text">{q.question}</h3>
                      </div>
                      <button className="expand-btn">{expandedQs[`hr-${index}`] ? '⌃' : '⌄'}</button>
                    </div>
                    {expandedQs[`hr-${index}`] && (
                      <div className="question-body">
                        <div className="intention-section">
                          <span className="badge intention-badge">INTENTION</span>
                          <p>{q.intention}</p>
                        </div>
                        <div className="answer-section">
                          <span className="badge answer-badge">MODEL ANSWER</span>
                          <p>{q.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ── Road Map Tab ── */}
          {activeTab === 'roadmap' && (
            <>
              <div className="content-header">
                <h2>Road Map</h2>
                <span className="question-count">{mockData.recommendations.length} items</span>
              </div>
              <div className="roadmap-grid">
                <div className="roadmap-section">
                  <h3 className="roadmap-section-title"><span className="dot green-dot"></span> Strengths</h3>
                  <ul className="roadmap-list">
                    {mockData.strengths.map((item, i) => (
                      <li key={i} className="roadmap-item strength-item">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="roadmap-section">
                  <h3 className="roadmap-section-title"><span className="dot red-dot"></span> Weaknesses</h3>
                  <ul className="roadmap-list">
                    {mockData.weaknesses.map((item, i) => (
                      <li key={i} className="roadmap-item weakness-item">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="roadmap-section full-width">
                  <h3 className="roadmap-section-title"><span className="dot blue-dot"></span> Recommendations</h3>
                  <ol className="roadmap-list recommendations-list">
                    {mockData.recommendations.map((item, i) => (
                      <li key={i} className="roadmap-item recommendation-item">
                        <span className="rec-number">{i + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </>
          )}

        </section>

        {/* Right Sidebar */}
        <aside className="sidebar right-sidebar">
          <div className="score-section">
            <h3 className="sidebar-title">MATCH SCORE</h3>
            <div className="score-circle">
              <svg viewBox="0 0 36 36" className="circular-chart green">
                <path className="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                  strokeDasharray={`${mockData.matchScore}, 100`}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">{mockData.matchScore}</text>
                <text x="18" y="25" className="percent-sign">%</text>
              </svg>
            </div>
            <p className="score-text">Strong match for this role</p>
          </div>

          <div className="skills-section">
            <h3 className="sidebar-title">SKILL GAPS</h3>
            <div className="tags-container">
              {mockData.weaknesses.map((weakness, index) => (
                <div className={`skill-tag tag-level-${index % 3}`} key={index}>
                  {weakness}
                </div>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
};

export default Interview;