import React from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative dot-grid bg-[#FFF1F4] border-t border-[#FBCFE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE4EC] border border-[#FBCFE8] text-[#E83E76] text-xs font-bold mb-3 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-[#F45B8D]" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#24151D] tracking-tight">
            Work Experience & Contributions
          </h2>
          <p className="text-[#6B5561] text-base sm:text-lg mt-3 font-medium">
            Hands-on software engineering delivering enterprise-grade backend services and high-performance user interfaces.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-4xl">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#FBCFE8] shadow-sm hover:border-[#F45B8D] transition-all relative group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#24151D] group-hover:text-[#F45B8D] transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-base font-extrabold text-[#F45B8D] mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#6B5561] font-semibold">
                  <span className="flex items-center gap-1.5 bg-[#FFE4EC] px-3 py-1.5 rounded-full border border-[#FBCFE8]">
                    <Calendar className="w-3.5 h-3.5 text-[#F45B8D]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#FFE4EC] px-3 py-1.5 rounded-full border border-[#FBCFE8]">
                    <MapPin className="w-3.5 h-3.5 text-[#F45B8D]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B5561] mb-6 leading-relaxed font-medium">
                {exp.description}
              </p>

              {/* Quantified STAR Achievements */}
              <div className="space-y-3 mb-6">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F45B8D] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#24151D] leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-[#FBCFE8]/60">
                <div className="text-xs font-bold text-[#6B5561]/80 uppercase tracking-wider mb-2">
                  Technologies Leveraged
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.techUsed.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#FFF1F4] text-[#24151D] border border-[#FBCFE8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
