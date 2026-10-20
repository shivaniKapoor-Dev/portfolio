import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedinIcon } from './Icons';
import { 
  ArrowRight, 
  Copy, 
  Check, 
  Server, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  ChevronDown,
  Download,
  Globe,
  Zap,
  Sparkles,
  Bot
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden dot-grid bg-[#FFF1F4]">
      {/* Soft Ambient Pastel Glows using #FFE4EC and #FCE7F3 */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-tr from-[#FFE4EC]/70 via-[#FCE7F3]/60 to-[#FFE4EC]/50 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-36 left-8 w-80 h-80 bg-[#FFE4EC]/60 blur-[90px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-44 right-8 w-80 h-80 bg-[#FCE7F3]/70 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#FBCFE8] text-[#24151D] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F45B8D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F45B8D]"></span>
            </span>
            <span className="font-bold text-[#24151D]">Core Software Engineer at Oodles</span>
            <span className="text-[#FBCFE8]">•</span>
            <span className="text-[#E83E76] font-bold">Backend & Frontend (Full Stack)</span>
          </div>

          {/* Main Headline (Dark text: #24151D with Bright pink: #F45B8D gradient) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#24151D] mb-6">
            Hi, I'm <span className="pink-gradient-text">{PERSONAL_INFO.name}</span>
            <span className="block text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#24151D] mt-3">
              Full Stack Software Engineer
            </span>
          </h1>

          {/* Value Proposition (Muted gray: #6B5561 with Bright pink: #F45B8D highlights) */}
          <p className="text-lg sm:text-xl text-[#6B5561] max-w-3xl mx-auto leading-relaxed mb-9 font-medium">
            I craft dependable web platforms where <span className="text-[#E83E76] font-bold bg-[#FFE4EC] px-2 py-0.5 rounded-lg border border-[#FBCFE8]">scalable backend architecture</span> seamlessly connects with <span className="text-[#E83E76] font-bold bg-[#FFE4EC] px-2 py-0.5 rounded-lg border border-[#FBCFE8]">clean, human-centric user experiences</span>. Passionate about <span className="text-[#E83E76] font-bold bg-[#FFE4EC] px-2 py-0.5 rounded-lg border border-[#FBCFE8]">AI-accelerated developer velocity</span>, rock-solid security, and writing responsible code that moves businesses forward.
          </p>

          {/* Pillars Cards (White cards: #FFFFFF, borders: #FBCFE8, Rose pink icons: #F9A8C4) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-11 text-xs sm:text-sm">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#FBCFE8] text-[#24151D] shadow-xs">
              <div className="p-1 rounded-md bg-[#FFE4EC] text-[#F45B8D]">
                <Globe className="w-4 h-4" />
              </div>
              <span className="font-bold">Full-Stack MERN & TypeScript</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#FBCFE8] text-[#24151D] shadow-xs">
              <div className="p-1 rounded-md bg-[#FFE4EC] text-[#F45B8D]">
                <Zap className="w-4 h-4" />
              </div>
              <span className="font-bold">Sub-80ms High-Throughput APIs</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#FBCFE8] text-[#24151D] shadow-xs">
              <div className="p-1 rounded-md bg-[#FFE4EC] text-[#F45B8D]">
                <Bot className="w-4 h-4" />
              </div>
              <span className="font-bold">Smart Web Automation & Sync</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#FBCFE8] text-[#24151D] shadow-xs">
              <div className="p-1 rounded-md bg-[#FFE4EC] text-[#F45B8D]">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-bold">AI Velocity & Code Rigor</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-extrabold text-white bg-[#F45B8D] hover:bg-[#E83E76] rounded-xl shadow-lg shadow-[#F45B8D]/25 transition-all hover:scale-102"
            >
              <span>Explore Technical Case Studies</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            {/* Direct Download Resume Button */}
            <a
              href="./Shivani_Kapoor_Resume.pdf"
              download="Shivani_Kapoor_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-extrabold text-[#24151D] hover:text-[#F45B8D] bg-white hover:bg-[#FFE4EC] border-2 border-[#FBCFE8] hover:border-[#F45B8D] rounded-xl shadow-xs transition-all hover:scale-102"
            >
              <Download className="w-4 h-4 text-[#F45B8D]" />
              <span>Download Resume (PDF)</span>
            </a>

            <button
              onClick={copyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-bold text-[#24151D] bg-white hover:bg-[#FFE4EC] border border-[#FBCFE8] rounded-xl shadow-xs transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#F45B8D]" />
                  <span className="text-[#E83E76] font-extrabold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#F9A8C4]" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-bold text-[#24151D] hover:text-[#F45B8D] bg-white hover:bg-[#FFE4EC] border border-[#FBCFE8] rounded-xl shadow-xs transition-all"
            >
              <LinkedinIcon className="w-5 h-5 text-[#F45B8D]" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>
      </div>

      {/* Down arrow indicator */}
      <div className="flex justify-center mt-12">
        <a 
          href="#stats" 
          aria-label="Scroll down to metrics"
          className="text-[#F9A8C4] hover:text-[#F45B8D] transition-colors animate-bounce p-2"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
