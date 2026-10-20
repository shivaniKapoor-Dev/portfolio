import React from 'react';
import { HIGHLIGHT_STATS } from '../data/portfolioData';
import { Zap, Activity, Cpu, CheckCircle2 } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const statStyles = [
    {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      bg: 'bg-emerald-50 border-emerald-200',
      text: 'text-emerald-700',
    },
    {
      icon: <Zap className="w-5 h-5 text-rose-600" />,
      bg: 'bg-rose-50 border-rose-200',
      text: 'text-rose-600',
    },
    {
      icon: <Activity className="w-5 h-5 text-indigo-600" />,
      bg: 'bg-indigo-50 border-indigo-200',
      text: 'text-indigo-600',
    },
    {
      icon: <Cpu className="w-5 h-5 text-amber-600" />,
      bg: 'bg-amber-50 border-amber-200',
      text: 'text-amber-700',
    },
  ];

  return (
    <section id="stats" className="py-12 border-y border-slate-200/90 bg-gradient-to-r from-rose-50/40 via-white to-emerald-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HIGHLIGHT_STATS.map((stat, idx) => (
            <div 
              key={stat.label}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className={`p-2.5 rounded-xl border ${statStyles[idx].bg} group-hover:scale-110 transition-transform shadow-xs`}>
                  {statStyles[idx].icon}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm font-bold text-slate-900">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
