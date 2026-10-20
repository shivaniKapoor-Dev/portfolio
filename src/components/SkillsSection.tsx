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
      case 'Server': return <Server className="w-5 h-5 text-[#344b2f]" />;
      case 'Layout': return <Layout className="w-5 h-5 text-[#a34753]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#3b5336]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#6d5b4a]" />;
      default: return <Cpu className="w-5 h-5 text-[#344b2f]" />;
    }
  };

  const getIconBg = (iconName: string) => {
    switch (iconName) {
      case 'Server': return 'bg-[#edf4eb] border-[#d3e3cf]';
      case 'Layout': return 'bg-[#fdf0f2] border-[#f8d4da]';
      case 'Database': return 'bg-[#edf4eb] border-[#d3e3cf]';
      case 'ShieldCheck': return 'bg-[#f5efe6] border-[#e7ded2]';
      default: return 'bg-[#f5efe6] border-[#e7ded2]';
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#f5efe6]/50 relative border-t border-[#e8ded2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#edf4eb] border border-[#d3e3cf] text-[#2f462a] text-xs font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5 text-[#344b2f]" />
            <span>Technical Proficiency & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1f271c] tracking-tight">
            Production-Tested Technical Skills
          </h2>
          <p className="text-[#555f50] text-base sm:text-lg mt-3">
            Categorized by practical application in production systems, performance tuning, and architectural robustness.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div 
              key={category.title}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e5dcd0] shadow-xs hover:border-[#b8c9b3] transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl border ${getIconBg(category.iconName)}`}>
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1f271c]">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3.5">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-[#faf7f2] border border-[#e8e0d4] hover:border-[#b8c9b3] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm text-[#1f271c]">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        skill.level === 'Advanced' 
                          ? 'bg-[#edf4eb] text-[#2d4428] border border-[#d2e2ce]' 
                          : 'bg-[#f4eee5] text-[#554d42] border border-[#e6ded2]'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-[#565f52] leading-relaxed">
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
