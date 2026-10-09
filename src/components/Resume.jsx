import React from 'react';

const Resume = () => {
  return (
    <section className="section" id="resume">
      <div className="section-header">
        <h2>
          Curriculum <span className="highlight">Vitae</span>
        </h2>
        <div className="underline-bar"></div>
        <p className="section-subtitle">
          Download my updated professional resume or review credentials online
        </p>
      </div>

      <div className="container" style={{ maxWidth: '780px' }}>
        <div className="resume-box">
          <i className="fa-solid fa-file-lines resume-icon"></i>
          <h3 className="fw-bold mb-2 text-dark">Mohinkhan Pathan</h3>
          <p className="text-cyan fw-semibold mb-3">
            Full-Stack Web Developer · MERN Stack Specialist · Bhavnagar, Gujarat
          </p>

          <p className="resume-description">
            Download my comprehensive resume covering my full-stack engineering work in MERN stack,
            REST API architecture, JWT authentication systems, academic ranking (<strong>Second Rank in PGDCA · 8.15 CGPA</strong>),
            course from <strong>Red and White Skill Education</strong>, and internship experience at <strong>DP Infosystem</strong>.
          </p>

          {/* Key CV Highlights Pill Grid */}
          <div className="resume-highlights-grid mb-4">
            <div className="resume-highlight-item">
              <i className="fa-solid fa-graduation-cap text-cyan me-2"></i>
              <span>PGDCA (8.15 CGPA) · <strong>Rank #2</strong></span>
            </div>
            <div className="resume-highlight-item">
              <i className="fa-solid fa-layer-group text-cyan me-2"></i>
              <span><strong>MERN Stack Course:</strong> Red & White Skill Education</span>
            </div>
            <div className="resume-highlight-item">
              <i className="fa-solid fa-shield-halved text-cyan me-2"></i>
              <span>JWT Security, Bcrypt, Middleware & REST APIs</span>
            </div>
            <div className="resume-highlight-item">
              <i className="fa-solid fa-briefcase text-cyan me-2"></i>
              <span>Internship: <strong>DP Infosystem</strong></span>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a
              href="./Assets/MohinKhan_Resume_Final.docx.pdf"
              download="MohinKhan_Resume.pdf"
              className="btn-primary"
            >
              <i className="fa-solid fa-download me-2"></i> Download Resume (PDF)
            </a>

            <a
              href="./Assets/MohinKhan_Resume_Final.docx.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary-custom"
            >
              <i className="fa-solid fa-eye me-2"></i> View Resume Online
            </a>

            <a
              href="https://github.com/mohinkhan16"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-custom"
            >
              <i className="fa-brands fa-github me-2"></i> GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
