import React, { useState } from 'react';

const servicesData = [
  {
    id: 1,
    title: 'Frontend Development',
    desc: 'Responsive, pixel-perfect, and modern websites using HTML5, CSS3, Bootstrap 5, JavaScript, React 19, and Next.js.',
    img: './Assets/service/frontend1.png',
    tags: ['React', 'Next.js', 'Bootstrap', 'UI/UX'],
  },
  {
    id: 2,
    title: 'Backend Development',
    desc: 'Secure, scalable backend architectures and robust microservices using Node.js, Express.js, MongoDB, and RESTful APIs.',
    img: './Assets/service/backend.png',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    id: 3,
    title: 'Full Stack Development',
    desc: 'End-to-end web applications with seamless frontend UI, powerful server backend, database modeling, and deployment.',
    img: './Assets/service/fullstack.png',
    tags: ['Full Stack', 'Database', 'Cloud', 'Architecture'],
  },
  {
    id: 4,
    title: 'MERN Stack Development',
    desc: 'Production-ready MERN applications combining MongoDB, Express.js, React.js, and Node.js with modern state management.',
    img: './Assets/service/mern.png',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
  },
];

const projectsData = [
  {
    id: 1,
    title: 'Modern E-Commerce Web App',
    category: 'Full Stack',
    img: './Assets/img-2.jpeg',
    desc: 'Interactive shopping platform with shopping cart, responsive layout, product filtering, and REST API integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
    liveUrl: '#',
    codeUrl: 'https://github.com/mohinkhan16',
  },
  {
    id: 2,
    title: 'Dynamic Business & Portfolio Hub',
    category: 'Frontend',
    img: './Assets/img-3.jpeg',
    desc: 'High-performance interactive web application with dark-glow aesthetic, smooth carousel slider, and mobile-first responsiveness.',
    tech: ['React', 'Vite', 'CSS3 Animations', 'JavaScript'],
    liveUrl: '#',
    codeUrl: 'https://github.com/mohinkhan16',
  },
];

const skillsData = [
  { name: 'HTML 5', pct: '97%', icon: './Assets/Skill/html-5.svg' },
  { name: 'CSS 3', pct: '90%', icon: './Assets/Skill/css-fill.svg' },
  { name: 'Bootstrap 5', pct: '94%', icon: './Assets/Skill/bootstrap.svg' },
  { name: 'JavaScript', pct: '95%', icon: './Assets/Skill/js-square.svg' },
  { name: 'React 19', pct: '95%', icon: './Assets/Skill/images.png' },
  { name: 'MongoDB', pct: '90%', icon: './Assets/Skill/mongodb.svg' },
  { name: 'Next JS', pct: '95%', icon: './Assets/Skill/next-js.svg' },
  { name: 'Node JS', pct: '94%', icon: './Assets/Skill/node-js.svg' },
  { name: 'PHP', pct: '90%', icon: './Assets/Skill/php.svg' },
  { name: 'REST API', pct: '95%', icon: './Assets/Skill/api.svg' },
  { name: 'MySQL', pct: '88%', icon: './Assets/Skill/mysql.svg' },
];

const Work = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="work" className="py-5 work-section">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-light">My Work & Expertise</h2>
          <div className="d-flex justify-content-center my-2">
            <img
              className="img-fluid curly-waves"
              src="./Assets/curlyways.svg"
              alt="curly-wave"
            />
          </div>
          <p className="text-success fs-5">--- What I Build & Provide ---</p>

          {/* Filter Tabs */}
          <div className="d-flex justify-content-center gap-2 mt-4 flex-wrap">
            <button
              type="button"
              className={`btn rounded-pill px-4 py-2 fw-semibold ${
                activeTab === 'all' ? 'btn-success' : 'btn-outline-secondary text-light'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Work
            </button>
            <button
              type="button"
              className={`btn rounded-pill px-4 py-2 fw-semibold ${
                activeTab === 'services' ? 'btn-success' : 'btn-outline-secondary text-light'
              }`}
              onClick={() => setActiveTab('services')}
            >
              Services
            </button>
            <button
              type="button"
              className={`btn rounded-pill px-4 py-2 fw-semibold ${
                activeTab === 'projects' ? 'btn-success' : 'btn-outline-secondary text-light'
              }`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button
              type="button"
              className={`btn rounded-pill px-4 py-2 fw-semibold ${
                activeTab === 'skills' ? 'btn-success' : 'btn-outline-secondary text-light'
              }`}
              onClick={() => setActiveTab('skills')}
            >
              Skills & Tech
            </button>
            <button
              type="button"
              className={`btn rounded-pill px-4 py-2 fw-semibold ${
                activeTab === 'about' ? 'btn-success' : 'btn-outline-secondary text-light'
              }`}
              onClick={() => setActiveTab('about')}
            >
              About Mohin
            </button>
          </div>
        </div>

        {/* 1. SERVICES SECTION */}
        {(activeTab === 'all' || activeTab === 'services') && (
          <div className="mb-5">
            <h3 className="text-light fw-bold mb-4 d-flex align-items-center gap-2">
              <span className="text-success">✦</span> Core Services
            </h3>
            <div className="row g-4">
              {servicesData.map((service) => (
                <div className="col-12 col-md-6" key={service.id}>
                  <div className="card service-card h-100 border-0 overflow-hidden shadow-lg">
                    <div className="row g-0 align-items-center h-100">
                      <div className="col-md-5 text-center p-3">
                        <img
                          src={service.img}
                          className="img-fluid rounded-3"
                          alt={service.title}
                          style={{ maxHeight: '180px', objectFit: 'contain' }}
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body p-4">
                          <h4 className="card-title text-light fw-bold mb-2">
                            {service.title}
                          </h4>
                          <p className="card-text text-light opacity-75 small mb-3">
                            {service.desc}
                          </p>
                          <div className="d-flex flex-wrap gap-1 mb-3">
                            {service.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="badge bg-dark border border-success text-success px-2 py-1"
                                style={{ fontSize: '11px' }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a href="#contact" className="btn btn-outline-success btn-sm rounded-pill px-3">
                            Let's Work Together <i className="fa-solid fa-arrow-right ms-1"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. FEATURED PROJECTS SECTION */}
        {(activeTab === 'all' || activeTab === 'projects') && (
          <div className="mb-5">
            <h3 className="text-light fw-bold mb-4 d-flex align-items-center gap-2">
              <span className="text-success">✦</span> Featured Projects
            </h3>
            <div className="row g-4">
              {projectsData.map((project) => (
                <div className="col-12 col-md-6" key={project.id}>
                  <div className="card border-0 rounded-4 overflow-hidden shadow-lg h-100" style={{ background: '#0f172a', border: '1px solid rgba(0,255,136,0.2)' }}>
                    <div className="position-relative overflow-hidden project-img-box" style={{ height: '240px' }}>
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-100 h-100 object-fit-cover"
                        style={{ objectFit: 'cover' }}
                      />
                      <span className="badge bg-success position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill fw-bold">
                        {project.category}
                      </span>
                    </div>
                    <div className="card-body p-4 d-flex flex-column">
                      <h4 className="card-title text-light fw-bold mb-2">{project.title}</h4>
                      <p className="card-text text-light opacity-75 mb-3 flex-grow-1">
                        {project.desc}
                      </p>
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {project.tech.map((t, idx) => (
                          <span key={idx} className="badge bg-black border border-secondary text-light px-2 py-1">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="d-flex gap-3">
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-success btn-sm rounded-pill px-3"
                        >
                          <i className="fa-brands fa-github me-1"></i> Source Code
                        </a>
                        <a href="#contact" className="btn btn-success btn-sm rounded-pill px-3 text-dark fw-bold">
                          Live Demo <i className="fa-solid fa-arrow-up-right-from-square ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. SKILLS SECTION */}
        {(activeTab === 'all' || activeTab === 'skills') && (
          <div className="mb-5">
            <h3 className="text-light fw-bold mb-4 d-flex align-items-center gap-2">
              <span className="text-success">✦</span> Technical Skills
            </h3>
            <div className="row g-4 justify-content-center">
              {skillsData.map((skill, index) => (
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                  <div className="card skills-card border-0 shadow-lg rounded-4 p-3 text-center h-100">
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '65px' }}>
                      <img
                        src={skill.icon}
                        className="img-fluid"
                        alt={skill.name}
                        style={{ maxHeight: '50px', maxWidth: '50px', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="card-body p-2 mt-2">
                      <h6 className="text-light fw-bold mb-2 small">{skill.name}</h6>
                      <div className="progress mt-2" style={{ height: '8px' }}>
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                          style={{ width: skill.pct }}
                        ></div>
                      </div>
                      <span className="text-success small fw-bold d-block mt-1">
                        {skill.pct}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. ABOUT SECTION */}
        {(activeTab === 'all' || activeTab === 'about') && (
          <div className="about-block mt-5 pt-3">
            <div className="row align-items-center g-4">
              <div className="col-12 col-md-5 text-center">
                <div className="d-inline-flex align-items-center justify-content-center rounded-4 shadow-lg" style={{ background: 'rgba(0, 180, 216, 0.1)', border: '2px solid rgba(0, 180, 216, 0.3)', width: '220px', height: '220px' }}>
                  <i className="fa-solid fa-user text-cyan" style={{ fontSize: '5rem' }}></i>
                </div>
              </div>

              <div className="col-12 col-md-7 d-flex flex-column gap-3">
                <div className="h4 text-light fs-2 fw-bold">Full-Stack Developer</div>
                <p className="color text-success fs-5">
                  I'm Mohin Khan, a motivated Full-Stack Development student focused on learning and building modern, scalable web applications. I love solving problems and turning concepts into clean, functional, and user-friendly websites.
                </p>
                <p className="text-light fs-6 opacity-75">
                  With hands-on experience in JavaScript, React, Node.js, and backend systems, I specialize in developing end-to-end applications that are efficient, secure, and maintainable.
                </p>

                <div className="card about-card border-0 shadow-lg mt-2">
                  <div className="card-body p-3">
                    <div className="row g-3">
                      <div className="col-6 col-sm-4">
                        <h6 className="text-secondary small mb-1">Name</h6>
                        <h6 className="text-light fw-bold">Mohin Khan</h6>
                      </div>
                      <div className="col-6 col-sm-4">
                        <h6 className="text-secondary small mb-1">Phone</h6>
                        <h6 className="text-light fw-bold">+91 9638955041</h6>
                      </div>
                      <div className="col-6 col-sm-4">
                        <h6 className="text-secondary small mb-1">Age</h6>
                        <h6 className="text-light fw-bold">21</h6>
                      </div>
                      <div className="col-6 col-sm-4">
                        <h6 className="text-secondary small mb-1">Email</h6>
                        <h6 className="text-light fw-bold text-truncate">mohinpathan2004@gmail.com</h6>
                      </div>
                      <div className="col-6 col-sm-4">
                        <h6 className="text-secondary small mb-1">Occupation</h6>
                        <h6 className="text-light fw-bold">Full-Stack Developer</h6>
                      </div>
                      <div className="col-6 col-sm-4">
                        <h6 className="text-secondary small mb-1">Location</h6>
                        <h6 className="text-light fw-bold">Bhavnagar, India</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
