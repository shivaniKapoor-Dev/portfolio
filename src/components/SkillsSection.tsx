import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Server, 
  Layout, 
  Database, 
  ShieldCheck, 
  Terminal,
  Cpu
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-5 h-5 text-emerald-600" />;
      case 'Layout': return <Layout className="w-5 h-5 text-rose-600" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      default: return <Cpu className="w-5 h-5 text-emerald-600" />;
    }
  };

  const getIconBg = (iconName: string) => {
    switch (iconName) {
      case 'Server': return 'bg-emerald-50 border-emerald-200';
      case 'Layout': return 'bg-rose-50 border-rose-200';
      case 'Database': return 'bg-indigo-50 border-indigo-200';
      case 'ShieldCheck': return 'bg-amber-50 border-amber-200';
      default: return 'bg-slate-50 border-slate-200';
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50/60 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3 shadow-xs">
            <Terminal className="w-3.5 h-3.5 text-emerald-600" />
            <span>Technical Proficiency & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Production-Tested Technical Skills
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
            Categorized by practical application in production systems, performance tuning, and architectural robustness.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div 
              key={category.title}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl border ${getIconBg(category.iconName)} shadow-xs`}>
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-950">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3.5">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/90 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-slate-900">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                        skill.level === 'Advanced' 
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                          : 'bg-slate-200 text-slate-700 border border-slate-300'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
