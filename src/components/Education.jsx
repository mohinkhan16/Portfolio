import React from 'react';

const Education = () => {
  const educationList = [
    {
      period: '2025 – Present',
      degree: 'Full-Stack Web Developer — MERN Stack Course',
      institute: 'Red and White Skill Education',
      score: 'Comprehensive MERN Certification',
      honors: '⚡ Professional Full-Stack Course & Hands-on Training',
      description:
        'Intensive professional software development training focused on MERN stack architecture, MongoDB schema modeling, Express.js REST APIs, React.js frontend development, and Node.js backend engineering.',
      badge: 'Professional Course'
    },
    {
      period: 'Jun 2025 – Jun 2026',
      degree: 'Post Graduate Diploma in Computer Application (PGDCA)',
      institute: 'Swami Sahajanand College of Commerce & Management, Bhavnagar',
      score: '8.15 CGPA',
      honors: '🏆 Secured Second Rank in PGDCA (8.15 CGPA)',
      description:
        'Comprehensive post-graduate diploma covering advanced computer applications, database management systems, data structures, and software principles.',
      badge: 'Academic Degree'
    }
  ];

  const certifications = [
    {
      title: 'Second Rank Certificate in PGDCA',
      issuer: 'Swami Sahajanand College of Commerce & Management',
      score: '8.15 CGPA (Rank #2)',
      icon: 'fa-solid fa-trophy',
      highlight: true
    },
    {
      title: 'PGDCA Completion Certificate',
      issuer: 'Swami Sahajanand College of Commerce & Management',
      score: 'Graduated with Distinction',
      icon: 'fa-solid fa-award',
      highlight: false
    },
    {
      title: 'Full-Stack MERN Developer Course Certificate',
      issuer: 'Red and White Skill Education',
      score: 'MERN Stack Course Track',
      icon: 'fa-solid fa-certificate',
      highlight: false
    }
  ];

  return (
    <section className="section" id="education">
      <div className="section-header">
        <h2>
          My <span className="highlight">Education</span> & Courses
        </h2>
        <div className="underline-bar"></div>
        <p className="section-subtitle">Academic foundations, professional MERN stack course & certifications</p>
      </div>

      {/* Timeline Section */}
      <div className="timeline mb-5">
        {educationList.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                <span className="timeline-year">{item.period}</span>
                <span className="timeline-badge-tag">{item.badge}</span>
              </div>

              <h3>{item.degree}</h3>
              <div className="timeline-company mb-2">
                <i className="fa-solid fa-graduation-cap me-2 text-cyan"></i>
                <strong>{item.institute}</strong>
              </div>

              {item.honors && (
                <div className="rank-alert my-2">
                  <i className="fa-solid fa-medal me-2 text-warning fs-5"></i>
                  <strong>{item.honors}</strong>
                </div>
              )}

              <p className="mt-2 text-muted">{item.description}</p>

              <div className="d-flex align-items-center gap-2 mt-3">
                <span className="score-pill">
                  <i className="fa-solid fa-star text-warning me-1"></i> Result: <strong>{item.score}</strong>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="container" style={{ maxWidth: '850px' }}>
        <h4 className="text-center fw-bold text-dark mb-4">
          <i className="fa-solid fa-stamp text-cyan me-2"></i> Official Certifications & Honors
        </h4>

        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div className={`cert-card ${cert.highlight ? 'featured-cert' : ''}`} key={idx}>
              <div className="cert-icon">
                <i className={cert.icon}></i>
              </div>
              <div className="cert-details">
                <h5>{cert.title}</h5>
                <p className="cert-issuer mb-1">{cert.issuer}</p>
                <span className="cert-badge">{cert.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
