import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaLinkedin, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiPostman , SiExpress,  SiLeetcode } from 'react-icons/si';
import { VscVscodeInsiders } from "react-icons/vsc";
const skills = [
  { icon: <FaJava size={32} className="text-[#ED8B00]" />, name: 'Java' },
  { icon: <SiJavascript size={32} className="text-[#F7DF1E]" />, name: 'JS' },
  { icon: <FaDatabase size={32} className="text-[#336791]" />, name: 'SQL' },
  { icon: <SiMongodb size={32} className="text-[#47A248]" />, name: 'MongoDB' },
  { icon: <FaNodeJs size={32} className="text-[#339933]" />, name: 'Node.js' },
  { icon: <SiExpress size={32} className="text-white" />, name: 'Express' },
  { icon: <FaHtml5 size={32} className="text-[#E34F26]" />, name: 'HTML5' },
  { icon: <FaGitAlt size={32} className="text-[#F05032]" />, name: 'Git' },
  { icon: <SiPostman size={32} className="text-[#F05032]" />, name: 'Postman' },
  { icon: <VscVscodeInsiders  size={32} className="text-[#F05032]" />, name: 'Vs Code' },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Independent Floating Skills Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {skills.map((skill, index) => {
          // Predefined coordinates for scattered placement across the screen
          const positions = [
            { top: '15%', left: '10%' },
            { top: '22%', left: '85%' },
            { top: '75%', left: '8%' },
            { top: '78%', left: '82%' },
            { top: '12%', left: '50%' },
            { top: '85%', left: '45%' },
            { top: '45%', left: '5%' },
            { top: '50%', left: '90%' },
          ];

          const pos = positions[index % positions.length];
          
          // Organic floating timing
          const duration = 6 + (index % 4) * 2; 
          const delay = index * 0.4;
          const yMovement = index % 2 === 0 ? [0, -20, 0] : [0, 20, 0];

          return (
            <motion.div
              key={index}
              className="absolute flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16"
              style={{ top: pos.top, left: pos.left, x: '-50%', y: '-50%' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                y: yMovement,
                opacity: [0.2, 0.5, 0.2],
                scale: 1,
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-bg-secondary/40 backdrop-blur-md border border-white/5 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] pointer-events-auto transition-all duration-300 hover:scale-110 hover:bg-bg-secondary hover:border-accent-purple/30 group">
                <div className="flex items-center justify-center scale-75 sm:scale-90 opacity-60 group-hover:opacity-100 group-hover:text-accent-cyan transition-colors duration-300 text-white">
                  {skill.icon}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pointer-events-none">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start text-left mt-10 lg:mt-0 pointer-events-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-gray-300">Available for new opportunities</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-6"
          >
            Crafting Elegant <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-purple italic pr-4">
               Experiences
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl text-lg md:text-xl text-gray-400 mb-10"
          >
            Skilled software developer with expertise in Java, frontend technologies, and SQL. Experienced in OOP, algorithm development, API integration, and version control.
          </motion.p>

          {/* Buttons & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6 w-full sm:w-auto"
          >
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="flex items-center justify-center px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/5 transition-colors text-white backdrop-blur-sm w-full sm:w-auto"
              >
                Contact Me
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4 sm:pl-6 sm:border-l border-white/10">
              <a href="https://github.com/Duraipandi1811" target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-white transition-all hover:scale-110">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/durai-pandi-k" target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-[#0A66C2] transition-all hover:scale-110">
                <FaLinkedin size={24} />
              </a>
              <a href="https://leetcode.com/u/Duraipandi1811" target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-[#FFA116] transition-all hover:scale-110">
                <SiLeetcode size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Classical Premium Portrait Design */}
        <div className="relative flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px] my-10 lg:my-0 pointer-events-auto">
          
          {/* Soft Elegant Backlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] md:w-[400px] md:h-[500px] bg-accent-purple/15 rounded-[2rem] blur-[80px] z-0"
          />



          {/* Main Character / Image Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="relative z-10 w-[260px] h-[340px] md:w-[340px] md:h-[460px] flex justify-center group"
          >
            <div className="w-full h-full relative cursor-pointer translate-y-0 group-hover:-translate-y-2 transition-transform duration-700">
              
              {/* Elegant Gold Trim Frame */}
              <div className="absolute inset-0 rounded-[2rem] border border-accent-purple/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group-hover:border-accent-purple transition-all duration-700 z-10">
                <div className="w-full h-full bg-bg-secondary relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                    alt="Profile" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  {/* Subtle vignette layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-80" />
                </div>
              </div>

              {/* Refined Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 md:-left-10 bg-bg-secondary/95 backdrop-blur-md border border-white/5 px-6 py-4 rounded-2xl shadow-xl z-20"
              >
                <div className="text-accent-purple font-serif italic text-xl whitespace-nowrap mb-1">Est. 2020</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-semibold">Years of Excellence</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
