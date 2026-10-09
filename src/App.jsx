import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Slider from './components/Slider';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-app">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* 2. Hero Section (Canvas Dots, Typewriter & Floating Profile Ring) */}
      <Hero />

      {/* 3. About Section (Bio, Ranking, Stats & Details) */}
      <About />

      {/* 4. Experience & Internship Section (Red and White Skill Education) */}
      <Experience />

      {/* 5. Education & Certifications Section (PGDCA Rank #2 & Certifications) */}
      <Education />

      {/* 6. Technical Skills Section (Categorized Grid with Icons) */}
      <Skills />

      {/* 7. Featured Projects Section (TaskUp, JWT Auth, Quiz App, etc. with GitHub links) */}
      <Projects />

      {/* 8. Interactive Showcase Slider (Project Carousel & Peer Recommendations) */}
      <Slider />

      {/* 9. Resume Section (Preview & Download PDF) */}
      <Resume />

      {/* 10. Contact Section (Direct Details, Google Map & Message Form) */}
      <Contact />

      {/* 11. Footer (Navigation, Socials & Back to Top) */}
      <Footer />
    </div>
  );
}

export default App;
