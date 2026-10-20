import React, { useState } from 'react';
import { INTERVIEW_CHEATSHEET } from '../data/portfolioData';
import { ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';

export const InterviewGuideSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="interview-guide" className="py-24 bg-[#f5efe6]/50 relative border-t border-[#e8ded2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf0f2] border border-[#f8d4da] text-[#9c3f4c] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#9c3f4c]" />
            <span>Interview Readiness & System Thinking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1f271c] tracking-tight">
            How I Approach Engineering Interviews
          </h2>
          <p className="text-[#555f50] text-base sm:text-lg mt-3">
            A quick glimpse into my system design philosophy, performance trade-offs, and how I communicate technical decisions under the hood.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl space-y-4">
          {INTERVIEW_CHEATSHEET.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-[#e5dcd0] shadow-xs overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#faf7f2] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2 rounded-xl bg-[#edf4eb] border border-[#d2e2ce] text-[#2d4428] font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1f271c]">
                    {item.topic}
                  </h3>
                </div>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-[#889284] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#889284] shrink-0" />
                )}
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-[#ede5da] bg-[#faf7f2]/80">
                  <div className="space-y-3 pt-2">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#344b2f] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#384133] leading-relaxed">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
