import React from 'react';
import { Globe, Zap, Palette, Bot, Sparkles, ArrowRight } from 'lucide-react';

export const WhatIDoSection: React.FC = () => {
  const capabilities = [
    {
      title: 'Full-Stack Web Applications',
      short: 'From Database to Polished UI',
      desc: 'Architecting scalable end-to-end applications using the MERN stack (MongoDB, Express, React, Node) and TypeScript with secure authentication and multi-tenant data isolation.',
      icon: <Globe className="w-6 h-6 text-[#F45B8D]" />,
      badge: 'MERN & TypeScript',
      highlight: 'Multivendor eCommerce & EMS'
    },
    {
      title: 'High-Throughput Backend & APIs',
      short: 'Sub-80ms Latency & Distributed Locks',
      desc: 'Building clean RESTful endpoints, rate-limited public APIs, and background job queues with Redis and PostgreSQL transactions to prevent race conditions and overselling.',
      icon: <Zap className="w-6 h-6 text-[#E83E76]" />,
      badge: 'Node.js & Redis',
      highlight: '<80ms Response Times'
    },
    {
      title: 'Interactive 60 FPS Frontends',
      short: 'GPU-Accelerated WebGL & Canvas',
      desc: 'Creating fluid, responsive user interfaces using React 19, Pixi.js (WebGL), and Tailwind CSS that smoothly render hundreds of interactive graphical nodes without DOM lag.',
      icon: <Palette className="w-6 h-6 text-[#F45B8D]" />,
      badge: 'React 19 & Pixi.js',
      highlight: '60 FPS Smooth Canvas'
    },
    {
      title: 'Web Automation & Data Scraping',
      short: 'Stealth Browser Crawlers & Schedulers',
      desc: 'Developing resilient background scrapers using Puppeteer stealth fingerprinting, automated cron scheduling, and cursor-based pagination to process thousands of listings.',
      icon: <Bot className="w-6 h-6 text-[#E83E76]" />,
      badge: 'Puppeteer & Cron',
      highlight: '15,000+ Indexed Records'
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
