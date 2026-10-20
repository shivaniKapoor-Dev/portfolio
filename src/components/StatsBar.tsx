import React from 'react';
import { HIGHLIGHT_STATS } from '../data/portfolioData';
import { Zap, Activity, Cpu, CheckCircle2 } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const icons = [
    <CheckCircle2 className="w-5 h-5 text-indigo-600" />,
    <Zap className="w-5 h-5 text-amber-600" />,
    <Activity className="w-5 h-5 text-sky-600" />,
    <Cpu className="w-5 h-5 text-teal-600" />,
  ];

  const iconBgs = [
    'bg-indigo-50 border-indigo-100',
    'bg-amber-50 border-amber-100',
    'bg-sky-50 border-sky-100',
    'bg-teal-50 border-teal-100',
  ];

  return (
    <section id="stats" className="py-12 border-y border-slate-200/80 bg-white/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HIGHLIGHT_STATS.map((stat, idx) => (
            <div 
              key={stat.label}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className={`p-2.5 rounded-xl border ${iconBgs[idx]} group-hover:scale-105 transition-transform`}>
                  {icons[idx]}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm font-semibold text-slate-800">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
