import React from 'react';
import { HIGHLIGHT_STATS } from '../data/portfolioData';
import { Zap, Bot, Globe, Sparkles } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const icons = [
    <Globe className="w-5 h-5 text-[#F45B8D]" />,
    <Zap className="w-5 h-5 text-[#F45B8D]" />,
    <Bot className="w-5 h-5 text-[#F45B8D]" />,
    <Sparkles className="w-5 h-5 text-[#F45B8D]" />,
  ];

  return (
    <section id="stats" className="py-12 border-y border-[#FBCFE8] bg-[#FFE4EC]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HIGHLIGHT_STATS.map((stat, idx) => (
            <div 
              key={stat.label}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#FBCFE8] shadow-sm hover:border-[#F45B8D] hover:shadow-md hover:shadow-[#F45B8D]/10 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-xl border border-[#FBCFE8] bg-[#FFF1F4] group-hover:scale-105 transition-transform shadow-xs">
                  {icons[idx]}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#24151D] tracking-tight">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm font-bold text-[#24151D]">
                {stat.label}
              </div>
              <div className="text-xs text-[#6B5561] font-semibold mt-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
