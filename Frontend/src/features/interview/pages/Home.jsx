import React from 'react';
import "../style/home.scss";

const Home = () => {
  return (
    <main className='home-container'>
      <div className="header-container">
        <h1>Create Your Custom <span className="highlight-red">Interview Plan</span></h1>
        <p>Let our AI analyze the job requirements and your unique profile to build a winning strategy.</p>
      </div>
      
      <div className="card-container">
        <div className="columns-wrapper">
          {/* Left Column */}
          <div className="left-column">
            <div className="section-header">
              <div className="header-title">
                <span className="icon">💼</span> Target Job Description
              </div>
              <span className="badge badge-red">REQUIRED</span>
            </div>
            <div className="textarea-wrapper job-desc-wrapper">
              <textarea 
                placeholder="Paste the full job description here...&#10;e.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'"
              ></textarea>
              <div className="char-counter">0 / 5000 chars</div>
            </div>
          </div>

          <div className="vertical-divider"></div>

          {/* Right Column */}
          <div className="right-column">
            <div className="section-header profile-header">
              <div className="header-title">
                <span className="icon">👤</span> Your Profile
              </div>
            </div>

            <div className="upload-section">
              <div className="sub-header">
                <label>Upload Resume</label>
                <span className="badge badge-dark-red">BEST RESULTS</span>
              </div>
              <div className="upload-box">
                <div className="upload-content">
                  <span className="upload-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16V4M12 4L8 8M12 4L16 8" stroke="#ff4757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 16V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V16" stroke="#ff4757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <p className="upload-text">Click to upload or drag & drop</p>
                  <p className="upload-subtext">PDF & DOCX (Max 5MB)</p>
                </div>
              </div>
            </div>

            <div className="or-divider">
              <span>or</span>
            </div>

            <div className="self-desc-section">
              <label>Quick Self-Description</label>
              <div className="textarea-wrapper">
                <textarea 
                  placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
                ></textarea>
              </div>
            </div>

            <div className="info-box">
              <span className="info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#3b82f6"/>
                  <path d="M12 16V12M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <p>Either a <strong>Resume</strong> or a <strong>Self Description</strong> is required to generate a personalized plan.</p>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <div className="generation-info">
            <span className="magic-icon">✨</span> AI-Powered Strategy Generation - Approx 30s
          </div>
          <button className="generate-button">
            <span className="star-icon">★</span> Generate My Interview Strategy
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;