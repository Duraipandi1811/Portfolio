import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen text-gray-100 font-sans selection:bg-accent-purple/40 overflow-x-hidden bg-bg-primary">
      
      {/* Global elegant noise texture overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none noise-bg" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-bg-primary via-bg-primary to-[#181818]" />
      
      <div className="relative z-10 w-full">
        <Navbar />
        <main>
          <HeroSection />
          
          {/* Continuous Elegant Background across About, Projects, and Contact */}
          <div className="relative bg-bg-primary/50 z-10 border-t border-white/5">
            <div className="relative z-10">
              <AboutSection />
              <ProjectsSection />
              <ContactSection />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
