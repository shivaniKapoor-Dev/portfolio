import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200/80 bg-white text-slate-500 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center text-white">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <span className="font-semibold text-slate-900">{PERSONAL_INFO.name}</span>
          <span className="text-slate-300">•</span>
          <span>Full Stack Software Engineer</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">GitHub</a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
        </div>

        <div className="text-slate-400 text-xs">
          © {new Date().getFullYear()} Shivani Kapoor. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
