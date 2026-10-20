import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  Copy, 
  Check, 
  Server, 
  Cpu, 
  Layers, 
  ShieldCheck,
  ChevronDown,
  Sparkles
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden dot-grid">
      {/* Soft Trending Pastel Glows: Blush Pink, Sage Olive & Warm Beige */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-[#fcebee]/70 via-[#f4eee6]/60 to-[#e9f2e7]/70 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-36 left-8 w-72 h-72 bg-[#fae8ea]/50 blur-[90px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-48 right-8 w-72 h-72 bg-[#eaf1e7]/60 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#e7ded2] text-[#424b3d] text-xs sm:text-sm font-medium mb-6 shadow-xs backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#527a4b] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3e6437]"></span>
            </span>
            <span className="font-semibold text-[#242c20]">Software Engineer at Oodles Technologies</span>
            <span className="text-[#cbbfb0]">•</span>
            <span className="text-[#646e60]">Full Stack / Backend / Frontend</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1e251b] mb-6">
            Hi, I'm <span className="gradient-headline">{PERSONAL_INFO.name}</span>
            <span className="block text-2xl sm:text-4xl lg:text-5xl font-bold text-[#444d3f] mt-3">
              Full Stack Software Engineer
            </span>
          </h1>

          {/* Value Proposition */}
          <p className="text-lg sm:text-xl text-[#535d4f] max-w-3xl mx-auto leading-relaxed mb-9">
            Specializing in high-throughput <span className="text-[#2d3a29] font-bold border-b border-[#2d3a29]/30">Node.js/TypeScript backend services</span>, 
            interactive <span className="text-[#9c3f4c] font-bold border-b border-[#9c3f4c]/30">React 19 & Pixi.js (WebGL)</span> canvas interfaces, 
            and scalable telemetry systems with <span className="text-[#3b5236] font-bold border-b border-[#3b5236]/30">TimescaleDB & Redis</span>.
          </p>

          {/* Trending Color Chips: Warm Beige, Olive, Blush */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-11 text-xs sm:text-sm">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 border border-[#e4dcce] text-[#343e30] shadow-xs">
              <Server className="w-4 h-4 text-[#394a34]" />
              <span className="font-medium">Distributed Backend & APIs</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 border border-[#f3d9dd] text-[#343e30] shadow-xs">
              <Layers className="w-4 h-4 text-[#a34753]" />
              <span className="font-medium">WebGL & Canvas 60 FPS</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 border border-[#d6e5d2] text-[#343e30] shadow-xs">
              <Cpu className="w-4 h-4 text-[#445b3e]" />
              <span className="font-medium">TimescaleDB & IoT Telemetry</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 border border-[#e4dcce] text-[#343e30] shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#7d5642]" />
              <span className="font-medium">Vault Cryptographic Security</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#faf8f5] bg-[#2d3a29] hover:bg-[#1f281d] rounded-xl shadow-md shadow-[#2d3a29]/15 transition-all hover:scale-102"
            >
              <span>Explore Technical Case Studies</span>
              <ArrowRight className="w-4 h-4 text-[#f6d7dc]" />
            </a>

            <button
              onClick={copyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-medium text-[#2d3a29] bg-white hover:bg-[#faf6f0] border border-[#e4dcd0] rounded-xl shadow-xs transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#3e6437]" />
                  <span className="text-[#2d4b27] font-semibold">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#8a9485]" />
                  <span>Copy Direct Email</span>
                </>
              )}
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-medium text-[#495344] hover:text-[#a34753] bg-white hover:bg-[#fdf4f5] border border-[#e4dcd0] hover:border-[#f3d9dd] rounded-xl shadow-xs transition-all"
            >
              <span>LinkedIn Profile</span>
            </a>
          </div>

        </div>
      </div>

      {/* Down arrow indicator */}
      <div className="flex justify-center mt-12">
        <a 
          href="#stats" 
          aria-label="Scroll down to metrics"
          className="text-[#99a494] hover:text-[#2d3a29] transition-colors animate-bounce p-2"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
