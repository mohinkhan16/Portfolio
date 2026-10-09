import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="nav-logo">
              <i className="fa-solid fa-code"></i>
            </span>
            <h3 className="mb-0">
              Mohin <span>Pathan</span>
            </h3>
          </div>
          <p>
            Full-Stack Web Developer | MERN Stack Specialist | PGDCA Second Rank (8.15 CGPA)
          </p>
          <p className="text-muted small">
            Dedicated to building reliable, high-performing web platforms and secure REST APIs with modern software engineering practices.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links-section">
          <h4>Quick Links</h4>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
            About
          </a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}>
            Experience & Internship
          </a>
          <a href="#education" onClick={(e) => { e.preventDefault(); handleNavClick('education'); }}>
            Education & Honors
          </a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>
            Skills
          </a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>
            Featured Projects
          </a>
          <a href="#slider" onClick={(e) => { e.preventDefault(); handleNavClick('slider'); }}>
            Showcase Slider
          </a>
          <a href="#resume" onClick={(e) => { e.preventDefault(); handleNavClick('resume'); }}>
            Resume
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h4>Connect With Me</h4>

          <a
            href="https://www.linkedin.com/in/mohinkhan16"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i> LinkedIn
          </a>

          <a
            href="https://github.com/mohinkhan16"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i> GitHub
          </a>

          <a href="mailto:mohinpathan2004@gmail.com">
            <i className="fa-solid fa-envelope"></i> Email
          </a>

          <a
            href="https://wa.me/919638955041"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>

          <button
            onClick={scrollToTop}
            className="btn-back-to-top mt-3"
            title="Scroll to Top"
          >
            <i className="fa-solid fa-arrow-up me-2"></i> Back to Top
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © 2026 <strong>Pathan Mohinkhan</strong> | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
