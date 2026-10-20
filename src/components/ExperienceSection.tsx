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
    <section id="experience" className="py-24 relative dot-grid border-t border-[#e8ded2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf0f2] border border-[#f8d4da] text-[#9c3f4c] text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#9c3f4c]" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1f271c] tracking-tight">
            Work Experience & Contributions
          </h2>
          <p className="text-[#555f51] text-base sm:text-lg mt-3">
            Hands-on software engineering delivering enterprise-grade backend services and high-performance user interfaces.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-4xl">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e5dcd0] shadow-xs hover:border-[#b8c9b3] transition-all relative group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1f271c] group-hover:text-[#2d3a29] transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-[#2d3a29] mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#554e43]">
                  <span className="flex items-center gap-1.5 bg-[#f5efe6] px-3 py-1.5 rounded-full border border-[#e8dfd3] font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#8a7f72]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#f5efe6] px-3 py-1.5 rounded-full border border-[#e8dfd3] font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#8a7f72]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#565f52] mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Quantified STAR Achievements */}
              <div className="space-y-3 mb-6">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#344b2f] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#384133] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips (Beige / Sage) */}
              <div className="pt-4 border-t border-[#ede5da]">
                <div className="text-xs font-semibold text-[#8a9486] uppercase tracking-wider mb-2">
                  Technologies Leveraged
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.techUsed.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#faf6f0] text-[#4b4337] border border-[#e8ded2]"
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
