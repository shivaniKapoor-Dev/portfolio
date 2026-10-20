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
      case 'Server': return <Server className="w-5 h-5 text-indigo-600" />;
      case 'Layout': return <Layout className="w-5 h-5 text-sky-600" />;
      case 'Database': return <Database className="w-5 h-5 text-teal-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-purple-600" />;
      default: return <Cpu className="w-5 h-5 text-indigo-600" />;
    }
  };

  const getIconBg = (iconName: string) => {
    switch (iconName) {
      case 'Server': return 'bg-indigo-50 border-indigo-100';
      case 'Layout': return 'bg-sky-50 border-sky-100';
      case 'Database': return 'bg-teal-50 border-teal-100';
      case 'ShieldCheck': return 'bg-purple-50 border-purple-100';
      default: return 'bg-slate-50 border-slate-200';
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50/60 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Proficiency & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Production-Tested Technical Skills
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Categorized by practical application in production systems, performance tuning, and architectural robustness.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div 
              key={category.title}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl border ${getIconBg(category.iconName)}`}>
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3.5">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-indigo-200 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm text-slate-900">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        skill.level === 'Advanced' 
                          ? 'bg-indigo-50 text-indigo-700 border border-indigo-200/80' 
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
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
