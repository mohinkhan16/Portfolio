import React, { useState } from 'react';

const allSkills = [
  // Frontend
  {
    name: 'React.js',
    category: 'Frontend',
    icon: './Assets/Skill/images.png',
    isImage: true,
    level: '95%',
    tag: 'Advanced',
    highlight: 'Hooks, Component Lifecycle & SPA State'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    icon: './Assets/Skill/js-square.svg',
    isImage: true,
    level: '94%',
    tag: 'Core Proficiency',
    highlight: 'Async/Await, Promises & DOM APIs'
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    icon: './Assets/Skill/html-5.svg',
    isImage: true,
    level: '98%',
    tag: 'Expert',
    highlight: 'Semantic Elements & Web Standards'
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    icon: './Assets/Skill/css-fill.svg',
    isImage: true,
    level: '92%',
    tag: 'Advanced',
    highlight: 'Flexbox, Grid & Keyframe Animations'
  },
  {
    name: 'Bootstrap 5',
    category: 'Frontend',
    icon: './Assets/Skill/bootstrap.svg',
    isImage: true,
    level: '95%',
    tag: 'Expert',
    highlight: 'Grid System, Components & Mobile-First'
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    icon: './Assets/Skill/node-js.svg',
    isImage: true,
    level: '93%',
    tag: 'Advanced',
    highlight: 'Event-Driven Async Server Engine'
  },
  {
    name: 'Express.js',
    category: 'Backend',
    icon: 'fa-solid fa-server',
    isImage: false,
    level: '92%',
    tag: 'Advanced',
    highlight: 'RESTful Routing & Custom Middleware'
  },

  {
    name: 'RESTful APIs',
    category: 'Backend',
    icon: './Assets/Skill/api.svg',
    isImage: true,
    level: '95%',
    tag: 'Advanced',
    highlight: 'Scalable Endpoints, CRUD & Status Codes'
  },

  // Languages & Tools
  {
    name: 'TypeScript',
    category: 'Languages',
    icon: 'fa-solid fa-code',
    isImage: false,
    level: '88%',
    tag: 'Proficient',
    highlight: 'Static Typing, Interfaces & Generics'
  },
  {
    name: 'Git & GitHub',
    category: 'Tools',
    icon: 'fa-brands fa-github',
    isImage: false,
    level: '95%',
    tag: 'Version Control',
    highlight: 'Branching, Merge Workflows & Collaboration'
  },
  {
    name: 'Postman',
    category: 'Tools',
    icon: 'fa-solid fa-paper-plane',
    isImage: false,
    level: '93%',
    tag: 'API Testing',
    highlight: 'Endpoint Testing, Collections & Environments'
  },
  {
    name: 'Render & Netlify',
    category: 'Tools',
    icon: 'fa-solid fa-globe',
    isImage: false,
    level: '90%',
    tag: 'Deployment',
    highlight: 'CI/CD Pipelines, Serverless & Web Hosting'
  }
];

const categories = ['All', 'Frontend', 'Backend',  'Tools'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? allSkills
      : allSkills.filter((item) => item.category === activeCategory);

  return (
    <section className="section" id="skills">
      <div className="section-header">
        <h2>
          Technical <span className="highlight">Skills</span>
        </h2>
        <div className="underline-bar"></div>
        <p className="section-subtitle">
          Core technical competencies, production stacks, and modern developer tooling
        </p>

        {/* Category Pills Filter */}
        <div className="skills-pill-filter mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skills-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'All' ? '⚡ All Technologies' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1140px' }}>
        <div className="unique-skills-grid">
          {filteredSkills.map((skill, index) => (
            <div className="unique-skill-card" key={index}>
              <div className="skill-card-top">
                <div className="skill-icon-badge">
                  {skill.isImage ? (
                    <img src={skill.icon} alt={skill.name} className="skill-badge-img" />
                  ) : (
                    <i className={skill.icon}></i>
                  )}
                </div>
                <div className="skill-meta-right">
                  <span className="skill-level-tag">{skill.tag}</span>
                  <span className="skill-pct-number">{skill.level}</span>
                </div>
              </div>

              <div className="skill-info-body">
                <h4 className="skill-title">{skill.name}</h4>
                <p className="skill-highlight-text">{skill.highlight}</p>
              </div>

              {/* Unique animated meter */}
              <div className="skill-progress-track">
                <div
                  className="skill-progress-bar"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
