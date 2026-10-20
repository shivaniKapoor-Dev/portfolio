import React from 'react';
import { HIGHLIGHT_STATS } from '../data/portfolioData';
import { Zap, Activity, Cpu, CheckCircle2 } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const icons = [
    <CheckCircle2 className="w-5 h-5 text-[#344b2f]" />,
    <Zap className="w-5 h-5 text-[#a34753]" />,
    <Activity className="w-5 h-5 text-[#3b5336]" />,
    <Cpu className="w-5 h-5 text-[#6d5b4a]" />,
  ];

  const iconBgs = [
    'bg-[#edf4eb] border-[#d4e4d0]', // Olive sage
    'bg-[#fdf0f2] border-[#f8d4da]', // Soft blush
    'bg-[#edf4eb] border-[#d4e4d0]', // Olive sage
    'bg-[#f5efe6] border-[#e7ded2]', // Warm beige
  ];

  return (
    <section id="stats" className="py-12 border-y border-[#eae0d4] bg-[#f5efe6]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HIGHLIGHT_STATS.map((stat, idx) => (
            <div 
              key={stat.label}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#e5dcd0] shadow-xs hover:border-[#cfc2b2] hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className={`p-2.5 rounded-xl border ${iconBgs[idx]} group-hover:scale-105 transition-transform`}>
                  {icons[idx]}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1f271c] tracking-tight">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm font-semibold text-[#384133]">
                {stat.label}
              </div>
              <div className="text-xs text-[#737c6f] mt-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
