import React, { useState } from 'react';
import { INTERVIEW_CHEATSHEET } from '../data/portfolioData';
import { ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';

export const InterviewGuideSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="interview-guide" className="py-24 bg-[#FFE4EC]/50 relative border-t border-[#FBCFE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF1F4] border border-[#FBCFE8] text-[#E83E76] text-xs font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F45B8D]" />
            <span>Interview Readiness & System Thinking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#24151D] tracking-tight">
            How I Approach Engineering Interviews
          </h2>
          <p className="text-[#6B5561] text-base sm:text-lg mt-3 font-medium">
            A quick glimpse into my system design philosophy, performance trade-offs, and how I communicate technical decisions under the hood.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl space-y-4">
          {INTERVIEW_CHEATSHEET.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-[#FBCFE8] shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FFF1F4] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2 rounded-xl bg-[#FFE4EC] border border-[#FBCFE8] text-[#E83E76] font-mono text-xs font-black">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-[#24151D]">
                    {item.topic}
                  </h3>
                </div>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-[#F45B8D] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#6B5561] shrink-0" />
                )}
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-[#FBCFE8] bg-[#FFF1F4]">
                  <div className="space-y-3 pt-2">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#F45B8D] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#24151D] leading-relaxed font-medium">
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
