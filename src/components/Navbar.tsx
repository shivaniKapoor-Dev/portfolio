import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, 
  Terminal, 
  Menu, 
  X,
  ExternalLink
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
          ? 'bg-[#FFF1F4]/95 backdrop-blur-md border-b border-[#FBCFE8] shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#F45B8D] flex items-center justify-center font-bold text-white shadow-sm shadow-[#F45B8D]/25 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-[#24151D] group-hover:text-[#F45B8D] transition-colors flex items-center gap-2">
                {PERSONAL_INFO.name}
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FFE4EC] text-[#E83E76] border border-[#FBCFE8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E83E76] mr-1.5 animate-pulse"></span>
                  Available for Hire
                </span>
              </div>
              <p className="text-xs text-[#6B5561] font-semibold">{PERSONAL_INFO.title}</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[#6B5561] hover:text-[#F45B8D] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons (GitHub, Performable LinkedIn, Performable Get in Touch) */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="View GitHub Repositories"
              className="p-2 text-[#6B5561] hover:text-[#24151D] hover:bg-[#FFE4EC] rounded-xl transition-colors border border-transparent hover:border-[#FBCFE8]"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            {/* Performable LinkedIn Button */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn Profile"
              title="Open LinkedIn Profile (Shivani Kapoor)"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#24151D] hover:text-[#F45B8D] bg-white hover:bg-[#FFE4EC] border border-[#FBCFE8] hover:border-[#F45B8D] rounded-xl shadow-xs transition-all hover:scale-102"
            >
              <LinkedinIcon className="w-4 h-4 text-[#F45B8D]" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[#F9A8C4]" />
            </a>

            {/* Performable Get in Touch (Direct Email to shivanikapoor5588@gmail.com) */}
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Job%20Opportunity%20for%20Shivani%20Kapoor&body=Hi%20Shivani,%0D%0A%0D%0AWe%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20engineering%20opportunity...`}
              aria-label="Send Email to Shivani Kapoor"
              title={`Compose email to ${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-[#F45B8D] hover:bg-[#E83E76] rounded-xl shadow-md shadow-[#F45B8D]/25 transition-all hover:scale-102"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#6B5561] hover:text-[#24151D] rounded-xl hover:bg-[#FFE4EC]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF1F4]/98 border-b border-[#FBCFE8] px-6 py-5 backdrop-blur-xl shadow-lg">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#24151D] hover:text-[#F45B8D] font-bold py-1.5"
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Performable Buttons */}
            <div className="pt-3 border-t border-[#FBCFE8] grid grid-cols-2 gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 p-2.5 text-xs font-bold text-[#6B5561] hover:text-[#24151D] bg-white border border-[#FBCFE8] rounded-xl"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 p-2.5 text-xs font-bold text-[#24151D] bg-white border border-[#FBCFE8] hover:bg-[#FFE4EC] rounded-xl"
              >
                <LinkedinIcon className="w-4 h-4 text-[#F45B8D]" /> LinkedIn
              </a>
            </div>

            {/* Performable Mobile Get in Touch */}
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Job%20Opportunity%20for%20Shivani%20Kapoor`}
              className="w-full text-center py-2.5 bg-[#F45B8D] hover:bg-[#E83E76] text-white font-bold rounded-xl mt-2 shadow-md shadow-[#F45B8D]/20 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Get in Touch ({PERSONAL_INFO.email})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
