import React, { useState, useEffect } from 'react';

const showcaseProjects = [
  {
    title: 'TaskUp — Team Collaboration Platform',
    badge: 'Flagship MERN Project',
    tagline: 'Real-time team communication, task boards, channels & video meetings',
    desc: 'An enterprise-grade collaboration platform featuring end-to-end JWT security, instant Socket.IO channel messaging, organization workspaces, interactive meetings, task assignments, and Cloudinary file attachments.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Cloudinary', 'Swagger', 'JWT'],
    icon: 'fa-solid fa-users-gear',
    github: 'https://github.com/mohinkhan16/Task-Manager',
    stats: [
      { label: 'Real-time Latency', val: '< 50ms' },
      { label: 'Architecture', val: 'MERN Stack' },
      { label: 'Security', val: 'JWT & Bcrypt' }
    ]
  },
  {
    title: 'JWT Authentication System',
    badge: 'Backend Security Architecture',
    tagline: 'Role-based access control, token rotation & encrypted authorization',
    desc: 'Production-ready authentication system built with Node.js and Express.js. Implements Bcrypt password hashing, access token and refresh token rotation, custom authorization middleware, and MongoDB user schema indexing.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Bcrypt', 'JWT', 'Middleware API'],
    icon: 'fa-solid fa-shield-halved',
    github: 'https://github.com/mohinkhan16/JWT_Authentication',
    stats: [
      { label: 'Hashing', val: 'Bcrypt Salt' },
      { label: 'Auth Flow', val: 'Access + Refresh' },
      { label: 'Middleware', val: 'Role-Based' }
    ]
  },
  {
    title: 'Interactive Quiz Application',
    badge: 'Frontend Engineering',
    tagline: 'Timer-driven questions, real-time scoring & responsive dynamics',
    desc: 'A feature-complete frontend quiz application featuring dynamic question randomization, automatic countdown timer navigation, real-time score calculation, and a comprehensive post-quiz performance review.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap 5', 'Timer API', 'DOM API'],
    icon: 'fa-solid fa-stopwatch-20',
    github: 'https://github.com/mohinkhan16/Quiz-Application',
    stats: [
      { label: 'Timer Engine', val: 'Real-Time' },
      { label: 'Scoring', val: 'Instant' },
      { label: 'UI', val: 'Dynamic DOM' }
    ]
  },
  {
    title: 'Personal Budget Tracker',
    badge: 'State & Storage Management',
    tagline: 'Income vs expense analytics with localized persistence',
    desc: 'React application for expense tracking that computes balance metrics, breaks down expenses by category with visual indicators, and guarantees offline persistence via browser LocalStorage.',
    tech: ['React.js', 'JavaScript', 'CSS3', 'LocalStorage', 'Responsive'],
    icon: 'fa-solid fa-wallet',
    github: 'https://github.com/mohinkhan16/Budget-Tracker',
    stats: [
      { label: 'Framework', val: 'React 19' },
      { label: 'Storage', val: 'Persistent' },
      { label: 'Analytics', val: 'Category-wise' }
    ]
  }
];

const testimonials = [
  {
    name: 'Kalpesh Goswami',
    role: 'Peer Developer',
    quote:
      'Working alongside Mohin has been an inspiring experience. His attention to detail in full-stack MERN development is exceptional — clean architecture and maintainable code.',
    initials: 'KG'
  },
  {
    name: 'Ankit Shiyal',
    role: 'Development Collaborator',
    quote:
      'Mohin consistently demonstrates strong problem-solving ability. His authentication system and REST APIs are rock-solid, well-documented, and production-ready.',
    initials: 'AS'
  },
  {
    name: 'Amit Chavda',
    role: 'Tech Colleague',
    quote:
      "Mohin's grasp of both frontend React and backend Node.js technologies is truly impressive. He delivers well-structured, scalable solutions on schedule.",
    initials: 'AC'
  },
  {
    name: 'Prince Nandoliya',
    role: 'Project Partner',
    quote:
      'I have seen Mohin engineer complex MERN modules with ease. His work on real-time collaboration with Socket.IO and JWT token security is top-notch.',
    initials: 'PN'
  }
];

const techMarquee = [
  { name: 'React.js', icon: 'fa-brands fa-react' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js' },
  { name: 'Express.js', icon: 'fa-solid fa-server' },
  { name: 'MongoDB', icon: 'fa-solid fa-database' },
  { name: 'JWT Auth', icon: 'fa-solid fa-shield-halved' },
  { name: 'JavaScript', icon: 'fa-brands fa-js' },
  { name: 'TypeScript', icon: 'fa-solid fa-code' },
  { name: 'Socket.IO', icon: 'fa-solid fa-bolt' },
  { name: 'Bootstrap 5', icon: 'fa-brands fa-bootstrap' },
  { name: 'Git & GitHub', icon: 'fa-brands fa-github' },
  { name: 'Postman', icon: 'fa-solid fa-paper-plane' },
  { name: 'Swagger API', icon: 'fa-solid fa-file-code' },
  { name: 'Cloudinary', icon: 'fa-solid fa-cloud-arrow-up' },
  { name: 'Vercel & Render', icon: 'fa-solid fa-cloud' }
];

const Slider = () => {
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' or 'reviews'
  const [projectIndex, setProjectIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play for project slider
  useEffect(() => {
    if (isPaused || activeTab !== 'projects') return;
    const interval = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % showcaseProjects.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, activeTab]);

  // Auto-play for reviews slider
  useEffect(() => {
    if (isPaused || activeTab !== 'reviews') return;
    const interval = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, activeTab]);

  const currentProj = showcaseProjects[projectIndex];
  const currentReview = testimonials[reviewIndex];

  return (
    <section className="section slider-section" id="slider">
      <div className="section-header">
        <h2>
          Interactive <span className="highlight">Showcase</span> Slider
        </h2>
        <div className="underline-bar"></div>
        <p className="section-subtitle">
          Dynamic slider spotlighting featured works, tech stack, and peer recommendations
        </p>

        {/* Tab switcher */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button
            className={`btn-slider-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <i className="fa-solid fa-laptop-code me-2"></i> Featured Projects Slider
          </button>
          <button
            className={`btn-slider-tab ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            <i className="fa-solid fa-comments me-2"></i> Peer Endorsements Slider
          </button>
        </div>
      </div>

      <div
        className="container slider-carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* ================= MODE 1: PROJECTS SLIDER ================= */}
        {activeTab === 'projects' && (
          <div className="project-slider-wrapper">
            <div className="showcase-card shadow-lg">
              <div className="row g-4 align-items-center">
                {/* Left info */}
                <div className="col-lg-7">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-highlight">
                      <i className="fa-solid fa-star me-1 text-warning"></i> {currentProj.badge}
                    </span>
                    <span className="slider-counter">
                      {projectIndex + 1} / {showcaseProjects.length}
                    </span>
                  </div>

                  <h3 className="showcase-title">{currentProj.title}</h3>
                  <p className="showcase-tagline">{currentProj.tagline}</p>
                  <p className="showcase-desc">{currentProj.desc}</p>

                  <div className="showcase-stats-row mb-4">
                    {currentProj.stats.map((st, sIdx) => (
                      <div className="showcase-stat-box" key={sIdx}>
                        <span className="stat-val">{st.val}</span>
                        <span className="stat-key">{st.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-tags mb-4">
                    {currentProj.tech.map((t, tIdx) => (
                      <span key={tIdx}>{t}</span>
                    ))}
                  </div>

                  <div className="d-flex flex-wrap gap-3">
                    <a
                      href={currentProj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      <i className="fa-brands fa-github me-2"></i> View Repository
                    </a>
                    <a
                      href={currentProj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary-custom"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square me-2"></i> Explore Details
                    </a>
                  </div>
                </div>

                {/* Right Visual preview */}
                <div className="col-lg-5 text-center">
                  <div className="showcase-visual-box">
                    <div className="showcase-icon-halo">
                      <i className={currentProj.icon}></i>
                    </div>
                    <div className="tech-badge-cluster mt-4">
                      {currentProj.tech.slice(0, 4).map((tech, idx) => (
                        <span className="tech-cluster-item" key={idx}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Navigation Controls */}
            <div className="slider-controls-row mt-4 d-flex justify-content-between align-items-center">
              <button
                className="slider-nav-btn"
                onClick={() =>
                  setProjectIndex((prev) => (prev === 0 ? showcaseProjects.length - 1 : prev - 1))
                }
                title="Previous Project"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>

              <div className="slider-dots">
                {showcaseProjects.map((_, dotIdx) => (
                  <span
                    key={dotIdx}
                    className={`slider-dot ${dotIdx === projectIndex ? 'active' : ''}`}
                    onClick={() => setProjectIndex(dotIdx)}
                  ></span>
                ))}
              </div>

              <button
                className="slider-nav-btn"
                onClick={() => setProjectIndex((prev) => (prev + 1) % showcaseProjects.length)}
                title="Next Project"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        )}

        {/* ================= MODE 2: REVIEWS SLIDER ================= */}
        {activeTab === 'reviews' && (
          <div className="review-slider-wrapper">
            <div className="testimonial-card shadow-lg mx-auto" style={{ maxWidth: '780px' }}>
              <div className="quote-icon mb-3">
                <i className="fa-solid fa-quote-left text-cyan"></i>
              </div>

              <p className="testimonial-quote">"{currentReview.quote}"</p>

              <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                <div className="testimonial-avatar">
                  {currentReview.initials}
                </div>
                <div className="text-start">
                  <h5 className="mb-0 fw-bold text-dark">{currentReview.name}</h5>
                  <small className="text-muted">{currentReview.role}</small>
                  <div className="rating-stars text-warning mt-1">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Controls */}
            <div className="slider-controls-row mt-4 d-flex justify-content-between align-items-center mx-auto" style={{ maxWidth: '500px' }}>
              <button
                className="slider-nav-btn"
                onClick={() =>
                  setReviewIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                }
                title="Previous Review"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>

              <div className="slider-dots">
                {testimonials.map((_, rDot) => (
                  <span
                    key={rDot}
                    className={`slider-dot ${rDot === reviewIndex ? 'active' : ''}`}
                    onClick={() => setReviewIndex(rDot)}
                  ></span>
                ))}
              </div>

              <button
                className="slider-nav-btn"
                onClick={() => setReviewIndex((prev) => (prev + 1) % testimonials.length)}
                title="Next Review"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ================= CONTINUOUS TECH MARQUEE SLIDER ================= */}
      <div className="tech-marquee-wrapper mt-5 pt-3">
        <p className="text-center text-muted small fw-semibold text-uppercase tracking-wider mb-3">
          Technologies & Tools Ecosystem
        </p>
        <div className="tech-marquee-track">
          {[...techMarquee, ...techMarquee].map((item, mIdx) => (
            <div className="marquee-item" key={mIdx}>
              <i className={`${item.icon} me-2 text-cyan`}></i>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
