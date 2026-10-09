import React, { useState, useEffect } from 'react';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  // Typing effect state
  const words = ['Frontend Developer', 'Full-Stack Developer', 'MERN Developer', 'React Developer'];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  // Scroll listener for navbar and active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'slider', 'work', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveNav(id);
    setNavOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header>
        <nav className={`navbar navbar-expand-lg fixed-top navbar-dark custom-navbar ${scrolled ? 'scrolled shadow-lg' : ''}`}>
          <div className="container">
            <a className="navbar-brand logo" href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
              MohinKhan
            </a>

            <button
              className="navbar-toggler border-0"
              type="button"
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse justify-content-end ${navOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeNav === 'home' ? 'active' : ''}`}
                    href="#home"
                    onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeNav === 'slider' ? 'active' : ''}`}
                    href="#slider"
                    onClick={(e) => { e.preventDefault(); handleNavClick('slider'); }}
                  >
                    Slider
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeNav === 'work' ? 'active' : ''}`}
                    href="#work"
                    onClick={(e) => { e.preventDefault(); handleNavClick('work'); }}
                  >
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeNav === 'contact' ? 'active' : ''}`}
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                  <a
                    href="#contact"
                    className="btn btn-outline-success btn-sm px-3 py-2 rounded-pill fw-bold"
                    onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* ===== HERO / HOME SECTION ===== */}
      <section className="home section" id="home">
        <div className="container">
          <div className="row align-items-center min-vh-75 py-5">
            <div className="home-content col-lg-6 col-md-6 order-2 order-md-1">
              <div className="badge-wrapper mb-3">
                <span className="badge rounded-pill bg-dark border border-success text-success px-3 py-2 fs-6">
                  <i className="fa-solid fa-circle me-2 animate-pulse" style={{ fontSize: '8px' }}></i>
                  Available for Freelance & Full-time
                </span>
              </div>
              <h3 className="text-light fs-3 mb-2">Hello, It's Me</h3>
              <h1 className="fw-bold display-3 mb-2">Mohin Khan</h1>
              <h3 className="fs-3 mb-3">
                And I'm a <span className="typed-text text-success fw-bold">{text}</span>
                <span className="cursor text-success">|</span>
              </h3>
              <p className="lead text-light mb-4" style={{ opacity: 0.9, lineHeight: 1.8 }}>
                I'm a Frontend Developer who builds clean, responsive, and user-friendly websites using modern web technologies. Specialized in crafting smooth web interfaces and high-performance interactive experiences.
              </p>

              <div className="social-media mb-4 d-flex gap-3">
                <a
                  href="https://github.com/mohinkhan16"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohin-khan-580a58388/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>

              <div className="d-flex flex-wrap gap-3 align-items-center">
                <a
                  href="./Assets/MohinKhan_Resume_Final.docx.pdf"
                  className="btn btn-resume px-4 py-3 fw-bold"
                  download="MohinKhan_Resume.pdf"
                >
                  <i className="fa-solid fa-download me-2"></i> Download Resume
                </a>
                <a
                  href="#work"
                  className="btn btn-outline-light px-4 py-3 fw-bold rounded-pill"
                  onClick={(e) => { e.preventDefault(); handleNavClick('work'); }}
                >
                  View My Work <i className="fa-solid fa-arrow-down ms-2"></i>
                </a>
              </div>
            </div>

            <div className="home-img col-lg-6 col-md-6 text-center order-1 order-md-2 mb-4 mb-md-0">
              <div className="profile-img-container position-relative d-inline-block">
                <div className="profile-glow-ring"></div>
                <img
                  src="./Assets/Image1.png"
                  alt="Mohin Khan Profile"
                  className="img-fluid position-relative profile-main-img"
                  style={{ maxHeight: '480px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
