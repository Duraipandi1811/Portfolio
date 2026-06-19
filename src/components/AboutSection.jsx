import React from 'react';
import { motion } from 'framer-motion';

import { FaJava, FaNodeJs, FaHtml5, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiPostman } from 'react-icons/si';
import { Download } from 'lucide-react';

const skills = [
  { name: 'Java', icon: <FaJava />, color: 'group-hover:text-[#ED8B00]', shadow: 'hover:shadow-[0_0_20px_rgba(237,139,0,0.2)] hover:border-[#ED8B00]/40' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'group-hover:text-[#F7DF1E]', shadow: 'hover:shadow-[0_0_20px_rgba(247,223,30,0.2)] hover:border-[#F7DF1E]/40' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'group-hover:text-[#339933]', shadow: 'hover:shadow-[0_0_20px_rgba(51,153,51,0.2)] hover:border-[#339933]/40' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'group-hover:text-[#47A248]', shadow: 'hover:shadow-[0_0_20px_rgba(71,162,72,0.2)] hover:border-[#47A248]/40' },
  { name: 'SQL', icon: <FaDatabase />, color: 'group-hover:text-[#336791]', shadow: 'hover:shadow-[0_0_20px_rgba(51,103,145,0.2)] hover:border-[#336791]/40' },
  { name: 'HTML/CSS', icon: <FaHtml5 />, color: 'group-hover:text-[#E34F26]', shadow: 'hover:shadow-[0_0_20px_rgba(227,79,38,0.2)] hover:border-[#E34F26]/40' },
  { name: 'Express.js', icon: <SiExpress />, color: 'group-hover:text-white', shadow: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:border-white/40' },
  { name: 'Postman', icon: <SiPostman />, color: 'group-hover:text-[#FF6C37]', shadow: 'hover:shadow-[0_0_20px_rgba(255,108,55,0.2)] hover:border-[#FF6C37]/40' }
];

// Helper to render an individual skill card
const SkillCard = ({ skill, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, type: "spring", bounce: 0.4 }}
    className={`group w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center p-2 sm:p-4 bg-bg-secondary/40 backdrop-blur-sm border border-white/5 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${skill.shadow}`}
  >
    <div className={`text-3xl sm:text-5xl mb-2 sm:mb-3 text-gray-500 transition-colors duration-300 ${skill.color}`}>
      {skill.icon}
    </div>
    <span className="text-[10px] sm:text-sm font-semibold text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-center">
      {skill.name}
    </span>
  </motion.div>
);

const ExperienceItem = ({ year, role, company, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative pl-6 border-l-2 border-accent-purple/30 before:absolute before:-left-[9px] before:top-1.5 before:w-4 before:h-4 before:bg-accent-cyan before:rounded-full before:border-4 before:border-bg-primary pb-6 last:pb-0"
  >
    <div className="text-xs font-bold text-accent-cyan mb-1 tracking-wider">{year}</div>
    <h4 className="text-white font-semibold text-lg leading-tight mb-1">{role}</h4>
    <div className="text-gray-400 text-sm font-medium">{company}</div>
  </motion.div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Text & Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">Journey</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Passionate Software Developer with experience in Full Stack Development, Java, and backend technologies. Focused on building responsive and user-friendly web applications while continuously improving problem-solving and development skills.
            </p>

            {/* Experience & Knowledge Multi-Column */}
            <div className="w-full flex flex-col md:flex-row gap-10 mb-2">

              {/* Experience Timeline */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="w-6 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full mr-3"></span>
                  Education & Experience
                </h3>
                <div className="mt-4">
                  <ExperienceItem
                    year="Internship"
                    role="Full Stack Development"
                    company="Phoenix Softech"
                    delay={0.4}
                  />
                  <ExperienceItem
                    year="Nov 2022 - Apr 2026"
                    role="B.E in Computer Science Engineering (7.74 CGPA)"
                    company="KPR Institute of Engineering and Technology"
                    delay={0.2}
                  />
                  <ExperienceItem
                    year="Jun 2021 - Apr 2022"
                    role="HSC (76%)"
                    company="Thiruvalluvar Matric Higher Secondary School"
                    delay={0.3}
                  />
                  <ExperienceItem
                    year="Jun 2019 - Apr 2020"
                    role="SSLC (74%)"
                    company="Thiruvalluvar Matric Higher Secondary School"
                    delay={0.3}
                  />
                </div>
              </div>

              {/* Knowledge / Stats */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="w-6 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full mr-3"></span>
                  Achievements
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] flex flex-col justify-center">
                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan mb-1">
                      200+
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold flex flex-col gap-1"><span>LeetCode Solutions</span> <span className="text-accent-purple uppercase text-[7px]">50 Days Badges/ Two Monthly Badges</span></div>
                  </div>
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col justify-center">
                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan mb-1">
                      200+
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold flex flex-col gap-1"><span>E-Box Coding Ex.</span> <span className="text-accent-purple uppercase text-[7px]">Java Foundation </span></div>
                  </div>
                  <div className="col-span-2 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors shadow-lg mt-2">
                    <div className="text-sm font-bold text-white mb-2 tracking-wide">Core Competencies</div>
                    <div className="flex flex-wrap gap-2">
                      {['Java OOP', 'REST APIs', 'SQL','Problem Solving', 'MongoDB', 'Git & GitHub', 'Responsive Design'].map((item, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <a
                href="/Resume.pdf"
                download
                className="group flex items-center justify-center space-x-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-purple hover:border-accent-purple transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
              >
                <Download size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Unique Skills Wall */}
          <div className="relative h-[450px] sm:h-[600px] flex justify-center items-center opacity-95">

            {/* Staggered Floating Column System */}
            <div className="relative z-10 flex gap-3 sm:gap-6 justify-center items-center w-full">

              {/* Column 1 (Flows down, offset top) */}
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col gap-3 sm:gap-6 mt-16"
              >
                <SkillCard skill={skills[0]} delay={0.1} />
                <SkillCard skill={skills[1]} delay={0.2} />
                <SkillCard skill={skills[2]} delay={0.3} />
              </motion.div>

              {/* Column 2 (Flows opposite, offset top negative) */}
              <motion.div
                animate={{ y: [15, -15, 15] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col gap-3 sm:gap-6 mb-16"
              >
                <SkillCard skill={skills[3]} delay={0.4} />
                <SkillCard skill={skills[4]} delay={0.5} />
                <SkillCard skill={skills[5]} delay={0.6} />
              </motion.div>

              {/* Column 3 (Asymmetric, floats uniquely) */}
              <motion.div
                animate={{ y: [-10, 20, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col gap-3 sm:gap-6 mt-8"
              >
                <SkillCard skill={skills[6]} delay={0.7} />
                <SkillCard skill={skills[7]} delay={0.8} />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
