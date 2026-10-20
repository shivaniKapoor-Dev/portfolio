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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden mesh-gradient-bg dot-grid">
      {/* Radiant Glowing Orbs (Soft Rose Pink, Fresh Olive-Emerald & Warm Amber) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-tr from-rose-200/60 via-pink-100/50 to-emerald-200/50 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-32 left-6 w-80 h-80 bg-rose-300/35 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-6 w-80 h-80 bg-emerald-200/40 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-rose-200/80 text-slate-800 text-xs sm:text-sm font-semibold mb-6 shadow-md shadow-rose-500/5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-slate-900">Software Engineer at Oodles Technologies</span>
            <span className="text-slate-300">•</span>
            <span className="text-rose-700 font-bold">Full Stack / Backend / Frontend</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 mb-6">
            Hi, I'm <span className="vibrant-gradient-text">{PERSONAL_INFO.name}</span>
            <span className="block text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mt-3">
              Full Stack Software Engineer
            </span>
          </h1>

          {/* Value Proposition */}
          <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-9 font-medium">
            Building high-throughput <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">Node.js/TypeScript backends</span>, 
            GPU-accelerated <span className="text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">React 19 & Pixi.js (WebGL)</span> canvas interfaces, 
            and scalable telemetry systems with <span className="text-indigo-700 font-bold bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">TimescaleDB & Redis</span>.
          </p>

          {/* Trending Color Chips: Rose Pink, Fresh Olive-Emerald & Warm Sand */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-11 text-xs sm:text-sm">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-sm hover:border-emerald-300 transition-all">
              <div className="p-1 rounded-md bg-emerald-100 text-emerald-700">
                <Server className="w-4 h-4" />
              </div>
              <span className="font-bold">Distributed Backend & APIs</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-sm hover:border-rose-300 transition-all">
              <div className="p-1 rounded-md bg-rose-100 text-rose-600">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-bold">WebGL & Canvas 60 FPS</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-sm hover:border-emerald-300 transition-all">
              <div className="p-1 rounded-md bg-emerald-100 text-emerald-800">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-bold">TimescaleDB & IoT Telemetry</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-sm hover:border-amber-300 transition-all">
              <div className="p-1 rounded-md bg-amber-100 text-amber-800">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-bold">Vault Cryptographic Security</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-extrabold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-slate-900 hover:from-rose-500 hover:to-slate-800 rounded-xl shadow-lg shadow-rose-600/25 transition-all hover:scale-103"
            >
              <span>Explore Technical Case Studies</span>
              <ArrowRight className="w-4 h-4 text-rose-200" />
            </a>

            <button
              onClick={copyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-sm hover:border-rose-300 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-extrabold">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-rose-500" />
                  <span>Copy Direct Email</span>
                </>
              )}
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-slate-700 hover:text-rose-600 bg-white hover:bg-rose-50/50 border border-slate-200 hover:border-rose-300 rounded-xl shadow-sm transition-all"
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
          className="text-slate-400 hover:text-rose-600 transition-colors animate-bounce p-2"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
