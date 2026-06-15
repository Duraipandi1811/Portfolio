import React from 'react';
import { Heart } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin, FiTwitter as Twitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-bg-secondary py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </div>
        
        <div className="flex items-center text-sm font-medium text-gray-400">
          Built with <Heart size={14} className="mx-1 text-accent-purple" /> using React & Tailwind
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
