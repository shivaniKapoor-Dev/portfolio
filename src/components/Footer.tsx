import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-[#e8ded2] bg-[#f5efe6] text-[#636c5f] text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-[#2d3a29] flex items-center justify-center text-white">
            <Terminal className="w-3.5 h-3.5 text-[#f6d7dc]" />
          </div>
          <span className="font-semibold text-[#1f271c]">{PERSONAL_INFO.name}</span>
          <span className="text-[#cbbfb0]">•</span>
          <span>Full Stack Software Engineer</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#projects" className="hover:text-[#2d3a29] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[#2d3a29] transition-colors">Skills</a>
          <a href="#experience" className="hover:text-[#2d3a29] transition-colors">Experience</a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#2d3a29] transition-colors">GitHub</a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#9c3f4c] transition-colors">LinkedIn</a>
        </div>

        <div className="text-[#889284] text-xs">
          © {new Date().getFullYear()} Shivani Kapoor. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
