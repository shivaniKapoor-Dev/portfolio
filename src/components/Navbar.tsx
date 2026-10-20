import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, 
  Terminal, 
  Menu, 
  X
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Case Studies', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Interview Guide', href: '#interview-guide' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#ebe2d5] shadow-xs py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#2d3a29] flex items-center justify-center font-bold text-[#faf8f5] shadow-xs group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-[#f6d7dc]" />
            </div>
            <div>
              <div className="font-bold text-[#22291f] group-hover:text-[#2d3a29] transition-colors flex items-center gap-2">
                {PERSONAL_INFO.name}
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#edf4eb] text-[#2d4329] border border-[#d2e2ce]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3d6037] mr-1.5 animate-pulse"></span>
                  Open for Roles
                </span>
              </div>
              <p className="text-xs text-[#6e766a] font-medium">{PERSONAL_INFO.title}</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#4f584b] hover:text-[#2d3a29] hover:underline underline-offset-4 decoration-[#df8893] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-[#565e52] hover:text-[#22291f] hover:bg-[#f2ebdf] rounded-xl transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-[#565e52] hover:text-[#a34753] hover:bg-[#fdf0f2] rounded-xl transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#faf8f5] bg-[#2d3a29] hover:bg-[#1f281d] rounded-xl shadow-xs transition-all hover:scale-102"
            >
              <Mail className="w-4 h-4 text-[#f6d7dc]" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#4f584b] hover:text-[#22291f] rounded-xl hover:bg-[#f2ebdf]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f5]/95 border-b border-[#ebe2d5] px-6 py-5 backdrop-blur-xl shadow-md">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#3d4538] hover:text-[#2d3a29] font-medium py-1.5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#ebe2d5] flex items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#4f584b] hover:text-[#22291f]"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#4f584b] hover:text-[#a34753]"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 bg-[#2d3a29] text-[#faf8f5] font-semibold rounded-xl mt-2 shadow-xs"
            >
              Hire Shivani
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
