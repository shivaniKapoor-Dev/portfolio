import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-[#FBCFE8] bg-[#FFE4EC] text-[#6B5561] text-xs sm:text-sm font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-[#F45B8D] flex items-center justify-center text-white">
            <Terminal className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-extrabold text-[#24151D]">{PERSONAL_INFO.name}</span>
          <span className="text-[#FBCFE8]">•</span>
          <span>Full Stack Software Engineer</span>
        </div>

        <div className="flex items-center gap-6 font-semibold">
          <a href="#projects" className="hover:text-[#F45B8D] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[#F45B8D] transition-colors">Skills</a>
          <a href="#experience" className="hover:text-[#F45B8D] transition-colors">Experience</a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#24151D] transition-colors">GitHub</a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#F45B8D] transition-colors">LinkedIn</a>
        </div>

        <div className="text-[#6B5561]/80 text-xs">
          © {new Date().getFullYear()} Shivani Kapoor. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
