import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef(null);

  // Typewriter effect
  const phrases = [
    'Full-Stack Web Development',
    'MERN Stack Web Development',
    'Scalable REST APIs',
    'JWT Security & Authentication',
    'Modern Responsive Websites'
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setTypedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  // Animated Dots Canvas (just like reference portfolio)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let dots = [];
    const DOT_COUNT = 65;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createDots = () => {
      dots = [];
      for (let i = 0; i < DOT_COUNT; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          r: Math.random() * 3.5 + 2
        });
      }
    };

    const drawDots = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connecting lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.4;
            ctx.strokeStyle = `rgba(0, 180, 216, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 180, 216, 0.6)';
        ctx.fill();

        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(drawDots);
    };

    resizeCanvas();
    createDots();
    drawDots();

    const handleResize = () => {
      resizeCanvas();
      createDots();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id) => {
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
    <section className="hero" id="home">
      {/* Animated dots canvas */}
      <canvas id="dotsCanvas" ref={canvasRef}></canvas>

      <div className="hero-container">
        {/* Left Column */}
        <div className="hero-left">
          <div className="hero-badge mb-2">
            <span className="badge-status">
              <span className="pulse-dot"></span> Available for Hire & Projects
            </span>
          </div>

          <p className="hero-greeting">
            Hi There, <span className="wave">👋</span>
          </p>

          <h1 className="hero-title">
            I Am <span className="highlight">Pathan Mohinkhan</span>
          </h1>

          <p className="hero-subtitle">
            FULL-STACK WEB DEVELOPER (MERN STACK)
          </p>

          <p className="hero-typewriter">
            I Am Into <span className="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </p>

          <p className="hero-bio">
            Crafting scalable web architectures, robust REST APIs, and responsive high-performance digital experiences with clean, maintainable code.
          </p>

          <div className="hero-cta-group">
            <a
              href="#about"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About Me <i className="fa-solid fa-circle-chevron-down ms-2"></i>
            </a>

            <a
              href="#projects"
              className="btn-secondary-custom"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              View Projects <i className="fa-solid fa-code ms-2"></i>
            </a>

            <a
              href="./Assets/MohinKhan_Resume_Final.docx.pdf"
              download="MohinKhan_Resume.pdf"
              className="btn-outline-custom"
            >
              Resume <i className="fa-solid fa-download ms-2"></i>
            </a>
          </div>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/mohinkhan16"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/mohinkhan16"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              title="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="mailto:mohinpathan2004@gmail.com"
              className="social-icon"
              title="Email: mohinpathan2004@gmail.com"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              href="https://wa.me/919638955041"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              title="WhatsApp: +91 9638955041"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="hero-right">
          <div className="profile-container">
            <div className="profile-ring">
              <img
                src="./Assets/Image1.png"
                alt="Pathan Mohinkhan"
                className="profile-photo"
                id="profilePhoto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fb = document.getElementById('profileFallback');
                  if (fb) fb.style.display = 'flex';
                }}
              />
              <div className="profile-fallback" id="profileFallback" style={{ display: 'none' }}>
                <i className="fa-solid fa-user"></i>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="hero-floating-card top-badge">
              <span className="floating-badge-icon">🏆</span>
              <div>
                <strong>Second Rank</strong>
                <small>PGDCA · 8.15 CGPA</small>
              </div>
            </div>

            <div className="hero-floating-card bottom-badge">
              <span className="floating-badge-icon">⚡</span>
              <div>
                <strong>MERN Stack</strong>
                <small>Full-Stack Developer</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
