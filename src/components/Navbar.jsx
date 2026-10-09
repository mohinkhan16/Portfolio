import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = [
        'home',
        'about',
        'experience',
        'education',
        'skills',
        'projects',
        'slider',
        'resume',
        'contact'
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        {/* Brand */}
        <a
          href="#home"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
        >
          <span className="nav-logo">
            <i className="fa-solid fa-code"></i>
          </span>
          <span className="nav-name">MohinKhan</span>
        </a>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
          <li>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('experience');
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('education');
              }}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('skills');
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('projects');
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#slider"
              className={`nav-link ${activeSection === 'slider' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('slider');
              }}
            >
              Showcase
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('resume');
              }}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              Contact
            </a>
          </li>
          <li className="d-lg-none mt-3">
            <a
              href="#contact"
              className="btn-nav-action"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Right Action */}
        <div className="nav-actions">
          <a
            href="#contact"
            className="btn-nav-action d-none d-lg-inline-flex"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            Hire Me <i className="fa-solid fa-paper-plane ms-2"></i>
          </a>

          {/* Hamburger button */}
          <div
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            id="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
