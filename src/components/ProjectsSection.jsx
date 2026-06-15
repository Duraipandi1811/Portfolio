import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FiGithub as Github } from 'react-icons/fi';

const projects = [
  {
    title: 'Perfume Shop Application',
    description: 'A responsive e-commerce perfume website featuring a unified user interface across devices. Handled contact form submissions via secure REST APIs.',
    tech: ['HTML/CSS/JS', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Duraipandi1811',
    live: '#',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Fruit Shop Application',
    description: 'A feature-rich fruit shop application dedicated to managing inventory, carts, and customer interactions smoothly.',
    tech: ['MongoDB', 'Express', 'Node.js', 'DOM API'],
    github: 'https://github.com/Duraipandi1811',
    live: '#',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1200&auto=format&fit=crop',
  }
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const project = projects[currentIndex];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-12 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">Works</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl text-lg">
              A showcase of my recent standout projects. I strive to combine elegant architecture with stunning, intuitive interfaces.
            </p>
          </div>
          
          {/* Top Desktop Controls */}
          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={handlePrev} className="p-4 rounded-full bg-bg-primary border border-white/10 hover:bg-white/10 hover:text-accent-cyan transition-all duration-300 hover:scale-110 shadow-lg">
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNext} className="p-4 rounded-full bg-bg-primary border border-white/10 hover:bg-white/10 hover:text-accent-cyan transition-all duration-300 hover:scale-110 shadow-lg">
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative mt-8 min-h-[500px] md:min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-bg-primary border border-white/5 rounded-[2.5rem] p-4 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
            >
              {/* Left Side: Massive Image Container */}
              <div className="w-full lg:w-[55%] h-[300px] sm:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 to-accent-cyan/20 mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Tech Pills Overlay on Image for Modernity */}
                <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2 pointer-events-none">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-semibold text-gray-200">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-semibold text-accent-cyan">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Right Side: Details and Call to Action */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center py-4 lg:py-8 lg:pr-8 text-left">
                <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-auto space-y-8">
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all shadow-lg w-full sm:w-auto group">
                      <ExternalLink size={20} className="mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-all w-full sm:w-auto group">
                      <Github size={20} className="mr-2 group-hover:scale-110 transition-transform" /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Mobile Controls and Dot Indicators */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-6">
           <div className="flex lg:hidden space-x-6">
             <button onClick={handlePrev} className="p-4 rounded-full bg-bg-primary border border-white/10 hover:bg-white/10 hover:text-accent-cyan transition-all duration-300 shadow-md">
               <ChevronLeft size={24} />
             </button>
             <button onClick={handleNext} className="p-4 rounded-full bg-bg-primary border border-white/10 hover:bg-white/10 hover:text-accent-cyan transition-all duration-300 shadow-md">
               <ChevronRight size={24} />
             </button>
           </div>
           
           {/* Dots Progress Indicator */}
           <div className="flex space-x-3 w-full justify-center lg:mx-auto">
             {projects.map((_, i) => (
               <button 
                 key={i} 
                 onClick={() => setCurrentIndex(i)}
                 className={`transition-all duration-500 rounded-full ${
                   i === currentIndex 
                     ? 'w-12 h-2.5 bg-gradient-to-r from-accent-purple to-accent-cyan' 
                     : 'w-2.5 h-2.5 bg-white/10 hover:bg-white/30'
                 }`}
                 aria-label={`Go to slide ${i + 1}`}
               />
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
