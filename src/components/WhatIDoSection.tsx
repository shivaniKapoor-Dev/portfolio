import React from 'react';
import { Globe, Zap, Palette, Bot, Sparkles, ArrowRight } from 'lucide-react';

export const WhatIDoSection: React.FC = () => {
  const capabilities = [
    {
      title: 'Full-Stack Web Applications',
      short: 'From Idea to Live Production Product',
      desc: 'I build complete web platforms where intuitive user interfaces connect seamlessly to robust backends. Every feature is crafted with clean architecture, secure logins, and scalable databases.',
      icon: <Globe className="w-6 h-6 text-[#F45B8D]" />,
      badge: 'MERN & TypeScript',
      highlight: 'Production-Grade Quality'
    },
    {
      title: 'High-Speed APIs & Databases',
      short: 'Instant Loading & Rock-Solid Reliability',
      desc: 'I ensure servers never crash, never double-bill, and respond in under 80ms. Using smart database indexing, transactions, and Redis caching, your users experience instant responses without waiting.',
      icon: <Zap className="w-6 h-6 text-[#E83E76]" />,
      badge: 'Node.js & Redis',
      highlight: '<80ms Response Times'
    },
    {
      title: 'Modern Responsive Interfaces',
      short: 'Clean Screens Users Genuinely Love',
      desc: 'I craft accessible, elegant frontend interfaces using React 19 and Tailwind CSS that look sharp on mobile, tablet, and desktop. Fast navigation, instant visual feedback, and zero clunkiness.',
      icon: <Palette className="w-6 h-6 text-[#F45B8D]" />,
      badge: 'React 19 & Tailwind',
      highlight: '100% Mobile & Desktop Fluid'
    },
    {
      title: 'Smart Automation & Data Sync',
      short: 'Saving 12+ Hours of Manual Work Weekly',
      desc: 'I build automated background bots that collect, structure, and sync live web data 24/7 without manual supervision — replacing tedious copy-pasting with reliable, hands-off pipelines.',
      icon: <Bot className="w-6 h-6 text-[#E83E76]" />,
      badge: 'Puppeteer & Cron',
      highlight: '15,000+ Records Auto-Synced'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#FBCFE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE4EC] border border-[#FBCFE8] text-[#E83E76] text-xs font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F45B8D]" />
            <span>Core Capabilities at a Glance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#24151D] tracking-tight">
            What I Do <span className="text-[#F45B8D]">(In 5 Seconds)</span>
          </h2>
          <p className="text-[#6B5561] text-base sm:text-lg mt-3 font-medium">
            Clear, user-friendly engineering skills focused on delivering business value, speed, and reliability.
          </p>
        </div>

        {/* 4 Quick Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div 
              key={cap.title}
              className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FBCFE8] hover:border-[#F45B8D] hover:shadow-lg hover:shadow-[#F45B8D]/15 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white border border-[#FBCFE8] shadow-xs group-hover:scale-105 transition-transform">
                    {cap.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FFE4EC] text-[#E83E76] border border-[#FBCFE8]">
                    {cap.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-[#24151D] group-hover:text-[#F45B8D] transition-colors">
                  {cap.title}
                </h3>
                <div className="text-xs font-bold text-[#E83E76] mt-0.5 mb-2.5">
                  {cap.short}
                </div>
                <p className="text-xs text-[#6B5561] leading-relaxed font-medium">
                  {cap.desc}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#FBCFE8]/60 flex items-center justify-between text-[11px] font-bold text-[#24151D]">
                <span>{cap.highlight}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F45B8D] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
