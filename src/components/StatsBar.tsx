import React from 'react';
import { HIGHLIGHT_STATS } from '../data/portfolioData';
import { Zap, Activity, Cpu, CheckCircle2 } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const icons = [
    <CheckCircle2 className="w-5 h-5 text-cyan-400" />,
    <Zap className="w-5 h-5 text-amber-400" />,
    <Activity className="w-5 h-5 text-indigo-400" />,
    <Cpu className="w-5 h-5 text-teal-400" />,
  ];

  return (
    <section id="stats" className="py-12 border-y border-slate-800/80 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHT_STATS.map((stat, idx) => (
            <div 
              key={stat.label}
              className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/90 hover:border-cyan-500/30 transition-all hover:bg-slate-900/50 group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                  {icons[idx]}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
