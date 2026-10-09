import React from 'react';

const Experience = () => {
  const experiences = [
    {
      period: '2026 – Present',
      role: 'Full-Stack Web Developer Intern',
      company: 'DP Infosystem',
      location: 'Gujarat, India',
      type: 'Internship',
      summary:
        'Hands-on practical development of scalable web applications, robust REST APIs, authentication security, and interactive responsive UI components.',
      highlights: [
        'Developed full-stack web applications and microservices leveraging MongoDB, Express.js, React.js, and Node.js.',
        'Engineered secure JWT authentication systems with Bcrypt password hashing, access/refresh token rotation, and role-based middleware.',
        'Integrated real-time bi-directional messaging with Socket.IO and cloud media storage pipelines using Cloudinary.',
        'Documented RESTful API endpoints using Swagger OpenAPI specification and conducted comprehensive testing via Postman.',
        'Collaborated on responsive, accessible user interfaces using React.js, Bootstrap 5, and modern CSS.',
        'Maintained Git version control workflows and deployed production builds to Render, Netlify, and Vercel.'
      ],
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.IO', 'Cloudinary', 'Swagger', 'Postman', 'Git']
    }
  ];

  return (
    <section className="section section-alt" id="experience">
      <div className="section-header">
        <h2>
          Work <span className="highlight">Experience</span> & Internship
        </h2>
        <div className="underline-bar"></div>
        <p className="section-subtitle">Practical industry experience and software development at DP Infosystem</p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                <span className="timeline-year">{exp.period}</span>
                <span className="timeline-badge-tag">{exp.type}</span>
              </div>

              <h3>{exp.role}</h3>
              <div className="timeline-company">
                <i className="fa-solid fa-briefcase me-2 text-cyan"></i>
                <strong>{exp.company}</strong>
                <span className="timeline-location ms-3">
                  <i className="fa-solid fa-location-dot me-1"></i> {exp.location}
                </span>
              </div>

              <p className="mt-3 timeline-summary">{exp.summary}</p>

              <div className="timeline-highlights">
                <h6 className="fw-bold text-dark mb-2">Key Contributions & Learning:</h6>
                <ul>
                  {exp.highlights.map((item, idx) => (
                    <li key={idx}>
                      <i className="fa-solid fa-check-circle me-2 text-cyan"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-tags mt-3">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
