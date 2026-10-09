import React from 'react';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-header">
        <h2>
          About <span className="highlight">Me</span>
        </h2>
        <div className="underline-bar"></div>
        <p className="section-subtitle">Get to know more about my background, mindset, and expertise</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            Motivated <strong>Full-Stack Web Developer</strong> with hands-on experience building scalable web applications and REST APIs using the <strong>MERN stack (MongoDB, Express.js, React.js, Node.js)</strong>.
          </p>
          <p>
            Secured <strong>Second Rank in PGDCA (8.15 CGPA)</strong> from Swami Sahajanand College of Commerce & Management. Delivered end-to-end projects covering JWT-based authentication, real-time communication systems, file-upload workflows, and responsive web platforms.
          </p>
          <p>
            Skilled in writing clean, maintainable, and type-safe code across both frontend and backend systems. Passionate about solving real-world challenges, optimizing performance, and building intuitive user experiences.
          </p>

          {/* Quick Metrics */}
          <div className="about-stats-grid">
            <div className="stat-card">
              <span className="stat-number">8.15</span>
              <span className="stat-label">PGDCA CGPA (Rank #2)</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3+</span>
              <span className="stat-label">End-to-End Featured Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">GitHub Repositories</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Commitment to Quality</span>
            </div>
          </div>

          <div className="about-divider"></div>

          {/* Contact and personal details */}
          <ul className="about-details">
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span><strong>Location:</strong> Bhavnagar, Gujarat, India</span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>
                <strong>Email:</strong>{' '}
                <a href="mailto:mohinpathan2004@gmail.com" className="about-link">
                  mohinpathan2004@gmail.com
                </a>
              </span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>
                <strong>Phone:</strong>{' '}
                <a href="tel:+919638955041" className="about-link">
                  +91 9638955041
                </a>
              </span>
            </li>
            <li>
              <i className="fa-solid fa-briefcase"></i>
              <span><strong>Role:</strong> Full-Stack Web Developer (MERN Stack)</span>
            </li>
            <li>
              <i className="fa-solid fa-language"></i>
              <span><strong>Languages:</strong> English, Hindi, Gujarati</span>
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>
              <span><strong>Availability:</strong> Open to Full-Time, Internship & Contract Roles</span>
            </li>
          </ul>

          <div className="mt-4 pt-2 text-center text-md-start">
            <a
              href="./Assets/MohinKhan_Resume_Final.docx.pdf"
              download="MohinKhan_Resume.pdf"
              className="btn-primary"
            >
              Download Full Resume <i className="fa-solid fa-file-arrow-down ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
