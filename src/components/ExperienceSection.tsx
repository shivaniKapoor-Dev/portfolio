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
    <section id="experience" className="py-24 relative dot-grid bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold mb-3 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-rose-600" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Work Experience & Contributions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
            Hands-on software engineering delivering enterprise-grade backend services and high-performance user interfaces.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-4xl">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-all relative group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 group-hover:text-rose-600 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-base font-extrabold text-rose-600 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-600 font-semibold">
                  <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed font-medium">
                {exp.description}
              </p>

              {/* Quantified STAR Achievements */}
              <div className="space-y-3 mb-6">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-800 leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Technologies Leveraged
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.techUsed.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200"
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
