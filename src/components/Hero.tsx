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
  ChevronDown
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
      {/* Soft Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-gradient-to-tr from-indigo-100/60 via-purple-100/40 to-sky-100/50 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-48 left-10 w-80 h-80 bg-rose-50/50 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 text-xs sm:text-sm font-medium mb-6 shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-slate-900">Software Engineer at Oodles Technologies</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">Open for Full Stack / Backend / Frontend</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            <span className="block text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-700 mt-2.5">
              Full Stack Software Engineer
            </span>
          </h1>

          {/* Value Proposition */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Specializing in high-throughput <span className="text-indigo-600 font-semibold">Node.js/TypeScript backend services</span>, 
            interactive <span className="text-indigo-600 font-semibold">React 19 & Pixi.js (WebGL)</span> canvas interfaces, 
            and scalable telemetry systems with <span className="text-teal-600 font-semibold">TimescaleDB & Redis</span>.
          </p>

          {/* Engineering Pillars Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 text-xs sm:text-sm">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-slate-700 shadow-xs">
              <Server className="w-4 h-4 text-indigo-600" />
              <span className="font-medium">Distributed Backend & APIs</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-slate-700 shadow-xs">
              <Layers className="w-4 h-4 text-sky-600" />
              <span className="font-medium">WebGL & Canvas 60 FPS</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-slate-700 shadow-xs">
              <Cpu className="w-4 h-4 text-teal-600" />
              <span className="font-medium">TimescaleDB & IoT Telemetry</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-slate-700 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              <span className="font-medium">Vault Cryptographic Security</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-md shadow-slate-900/10 transition-all hover:scale-102"
            >
              <span>Explore Technical Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={copyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Direct Email</span>
                </>
              )}
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-medium text-slate-700 hover:text-indigo-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition-all"
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
          className="text-slate-400 hover:text-slate-700 transition-colors animate-bounce p-2"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
