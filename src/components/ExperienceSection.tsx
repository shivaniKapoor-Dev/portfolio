import React from 'react';
import { WORK_EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  FileText, 
  ExternalLink 
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative dot-grid border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Contributions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Hands-on software engineering delivering enterprise-grade backend services and high-performance user interfaces.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-4xl">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 relative group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-cyan-400 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Quantified STAR Achievements */}
              <div className="space-y-3 mb-6">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Technologies Leveraged
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.techUsed.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800"
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
