import React from 'react';
import { Heart } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin, FiTwitter as Twitter } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-bg-secondary py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Duraipandi. All rights reserved.
        </div>
        
        <div className="flex items-center text-sm font-medium text-gray-400">
          Building • Learning • Growing Every Day
        </div>
        
        <div className="flex space-x-6">
          <a href="https://github.com/Duraipandi1811" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/durai-pandi-k" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://leetcode.com/u/duraipandi1811/" className="text-gray-400 hover:text-white transition-colors">
            <SiLeetcode size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
