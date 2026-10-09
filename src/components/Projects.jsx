import React, { useState } from 'react';

const projectsList = [
  {
    id: 1,
    title: 'TaskUp — Team Communication & Collaboration Platform',
    badge: 'MERN Stack • Real-Time',
    category: 'Full Stack',
    icon: 'fa-solid fa-users-rectangle',
    img: './Assets/service/fullstack.png',
    desc: 'Full-stack collaboration platform with secure authentication, real-time chat and communication, channels and groups, meetings, task and project management, file sharing, calendar, notifications, organization management, and responsive dashboard UI.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.IO', 'Cloudinary', 'Swagger'],
    githubUrl: 'https://github.com/mohinkhan16/Task-Manager',
    liveUrl: 'https://github.com/mohinkhan16',
    featured: true
  },
  {
    id: 2,
    title: 'JWT Authentication System',
    badge: 'Security • Backend API',
    category: 'Backend',
    icon: 'fa-solid fa-shield-halved',
    img: './Assets/service/backend.png',
    desc: 'Secure user authentication API with Bcrypt password hashing, access/refresh token flow, and role-based route protection using custom middleware. Engineered for production security with robust error handling.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Bcrypt', 'JWT Tokens', 'Custom Middleware'],
    githubUrl: 'https://github.com/mohinkhan16/JWT_Authentication',
    liveUrl: 'https://github.com/mohinkhan16/JWT_Authentication',
    featured: true
  },
  {
    id: 3,
    title: 'Interactive Quiz Application',
    badge: 'Dynamic UI • Real-Time Score',
    category: 'Frontend',
    icon: 'fa-solid fa-stopwatch-20',
    img: './Assets/img-2.jpeg',
    desc: 'Interactive Quiz App with timer-based questions, automatic navigation, real-time score tracking, detailed result analysis with answer summary, and dynamic UI rendering.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap 5', 'Timer API', 'Dynamic DOM'],
    githubUrl: 'https://github.com/mohinkhan16/Quiz-Application',
    liveUrl: 'https://github.com/mohinkhan16/Quiz-Application',
    featured: true
  },
  {
    id: 4,
    title: 'Budget Tracker Application',
    badge: 'Finance Tracker • React',
    category: 'Frontend',
    icon: 'fa-solid fa-wallet',
    img: './Assets/img-3.jpeg',
    desc: 'Comprehensive personal budget and expense management application with category visualization, income vs expense balance analysis, and persistent client-side storage.',
    tech: ['React.js', 'JavaScript', 'CSS3', 'LocalStorage', 'Responsive UI'],
    githubUrl: 'https://github.com/mohinkhan16/Budget-Tracker',
    liveUrl: 'https://github.com/mohinkhan16/Budget-Tracker',
    featured: false
  },
  {
    id: 5,
    title: 'Feastify — Restaurant Platform',
    badge: 'Restaurant Web UI',
    category: 'Frontend',
    icon: 'fa-solid fa-utensils',
    img: './Assets/service/frontend1.png',
    desc: 'Responsive culinary web portal featuring appetizing digital menus, table reservation requests, chef spotlights, customer reviews, and sleek mobile-first design.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Modern Layout'],
    githubUrl: 'https://github.com/mohinkhan16/Feastify-Restaurant',
    liveUrl: 'https://github.com/mohinkhan16/Feastify-Restaurant',
    featured: false
  },
  {
    id: 6,
    title: 'Live Weather API Application',
    badge: 'API Integration • Forecast',
    category: 'Frontend',
    icon: 'fa-solid fa-cloud-sun',
    img: './Assets/img-2.jpeg',
    desc: 'Instant weather lookup application using REST APIs to deliver live atmospheric data, temperature, humidity levels, wind speed, and multi-day meteorological forecasts.',
    tech: ['JavaScript', 'OpenWeatherMap API', 'Async/Await', 'Bootstrap 5', 'CSS3'],
    githubUrl: 'https://github.com/mohinkhan16/Weather-Api',
    liveUrl: 'https://github.com/mohinkhan16/Weather-Api',
    featured: false
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projectsList
      : projectsList.filter((p) => p.category === filter);

  return (
    <section className="section section-alt" id="projects">
      <div className="section-header">
        <h2>
          Featured <span className="highlight">Projects</span>
        </h2>
        <div className="underline-bar"></div>
        <p className="section-subtitle">
          Projects built with the MERN stack, secure REST APIs, and modern frontend technologies
        </p>

        {/* Filter Pills */}
        <div className="filter-pill-container mt-4">
          {['All', 'Full Stack', 'Backend', 'Frontend'].map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="project-icon">
                <i className={project.icon}></i>
              </div>
              <span className="project-category-badge">{project.badge}</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="project-tags">
              {project.tech.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>

            <div className="project-actions-row pt-3 mt-auto border-top border-light-subtle d-flex justify-content-between align-items-center">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <i className="fa-brands fa-github me-1"></i> View Code{' '}
                <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="project-preview-icon"
                title="Open Repository"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub CTA banner */}
      <div className="container mt-5 text-center">
        <div className="github-cta-card p-4 rounded-4 shadow-sm mx-auto" style={{ maxWidth: '780px' }}>
          <h4 className="fw-bold mb-2">
            <i className="fa-brands fa-github me-2 text-cyan"></i> Explore More on GitHub
          </h4>
          <p className="text-muted mb-3">
            Looking for more repositories, backend APIs, and web projects? Check out my full GitHub profile.
          </p>
          <a
            href="https://github.com/mohinkhan16"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Visit github.com/mohinkhan16 <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
