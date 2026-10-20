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
      case 'Server': return <Server className="w-5 h-5 text-[#F45B8D]" />;
      case 'Layout': return <Layout className="w-5 h-5 text-[#F45B8D]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#F45B8D]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#F45B8D]" />;
      default: return <Cpu className="w-5 h-5 text-[#F45B8D]" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#FFE4EC]/50 relative border-t border-[#FBCFE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF1F4] border border-[#FBCFE8] text-[#E83E76] text-xs font-bold mb-3 shadow-xs">
            <Terminal className="w-3.5 h-3.5 text-[#F45B8D]" />
            <span>Technical Proficiency & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#24151D] tracking-tight">
            Production-Tested Technical Skills
          </h2>
          <p className="text-[#6B5561] text-base sm:text-lg mt-3 font-medium">
            Categorized by practical application in production systems, performance tuning, and architectural robustness.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div 
              key={category.title}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#FBCFE8] shadow-sm hover:border-[#F45B8D] transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl border border-[#FBCFE8] bg-[#FFE4EC] shadow-xs">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#24151D]">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3.5">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-[#FFF1F4] border border-[#FBCFE8] hover:border-[#F45B8D] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-[#24151D]">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                        skill.level === 'Advanced' 
                          ? 'bg-[#FFE4EC] text-[#E83E76] border border-[#FBCFE8]' 
                          : 'bg-[#FCE7F3] text-[#6B5561] border border-[#FBCFE8]'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B5561] leading-relaxed font-medium">
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
