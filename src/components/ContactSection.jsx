import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden flex justify-center items-center">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-purple/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-cyan/20 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="max-w-5xl w-full mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
              Let's 
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan ml-4">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             Whether you have a massive project idea, need a consultation, or simply want to chat about the latest in frontend tech—my inbox is always open.
          </p>
        </motion.div>

        {/* Classical Premium Contact Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-[1px] group mx-auto max-w-4xl"
        >
          {/* Subtle Gold Border Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/30 to-transparent rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative bg-bg-secondary border border-white/5 rounded-[calc(1.5rem-1px)] p-10 md:p-16 flex flex-col md:flex-row gap-16 items-center justify-between z-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            
            {/* Left Info Column */}
            <div className="flex-1 space-y-10 w-full">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="mt-1 text-accent-purple">
                    <Mail size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] mb-2">Direct Inquiry</h4>
                    <a href="mailto:duraipandi1811@gmail.com" className="text-white text-xl md:text-2xl font-serif italic hover:text-accent-cyan transition-colors break-all">duraipandi1811@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="mt-1 text-accent-cyan">
                    <Phone size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] mb-2">Phone</h4>
                    <a href="tel:+917094627356" className="text-white text-2xl font-serif italic hover:text-accent-purple transition-colors">+91 7094627356</a>
                  </div>
                </div>
              </div>

              {/* Minimal Social Links */}
              <div className="pt-8 flex gap-6">
                <a href="https://github.com/Duraipandi1811" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-purple transition-all duration-300 hover:-translate-y-1">
                  <FaGithub size={22} />
                </a>
                <a href="https://linkedin.com/in/durai-pandi-k" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-purple transition-all duration-300 hover:-translate-y-1">
                  <FaLinkedin size={22} />
                </a>
                <a href="https://leetcode.com/u/Duraipandi1811" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-purple transition-all duration-300 hover:-translate-y-1">
                  <SiLeetcode size={22} />
                </a>
              </div>
            </div>

            {/* Right Action / "Letter" Panel */}
            <div className="flex-1 w-full flex flex-col items-center justify-center space-y-8 text-center border-t md:border-t-0 md:border-l border-white/5 pt-10 md:pt-0 md:pl-16">
              <h3 className="text-3xl font-serif italic text-white flex flex-col">
                <span>Let's Discuss</span>
                <span className="text-accent-purple tracking-tight">Your Vision</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I specialize in architecting sophisticated, responsive web applications for brands that refuse to compromise on quality. Reach out to schedule a consultation.
              </p>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:duraipandi1811@gmail.com"
                className="mt-4 px-10 py-4 font-semibold text-black bg-accent-cyan hover:bg-white rounded-full transition-all tracking-wide text-sm uppercase shadow-[0_0_20px_rgba(229,229,229,0.2)]"
              >
                Send a Message
              </motion.a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
