import React from 'react';
import { Sparkles, Cpu, CheckCircle2, ShieldCheck, Zap, Terminal, BrainCircuit } from 'lucide-react';

export const AiSuperpowerSection: React.FC = () => {
  const pillars = [
    {
      title: '3x Faster Delivery & Rapid Prototyping',
      desc: 'Software development is evolving rapidly. I leverage AI-assisted environments (Cursor, LLM coding assistants) as an engineering force multiplier—scaffolding boilerplate, generating edge-case test suites, and delivering production features significantly faster without sacrificing code quality.',
      badge: 'Speed & Velocity'
    },
    {
      title: 'Building AI-Powered User Features',
      desc: 'I dont just use AI to write code; I integrate AI capabilities into applications. From semantic vector search and natural language job matching (like in TalentFlow) to automated content processing pipelines, I build apps that understand user context.',
      badge: 'Product Innovation'
    },
    {
      title: 'Human Architectural Judgment & Rigor',
      desc: 'AI can generate functions, but it cannot understand deep system design trade-offs. I apply strong engineering judgment to database transaction isolation, multi-tenant security boundaries, Redis race condition locks, and API rate limiting where correctness is paramount.',
      badge: 'Engineering Depth'
    },
    {
      title: 'Continuous Adaptability & Rapid Learning',
      desc: 'The developers who thrive in the AI era are those who adapt quickly. I use AI to deconstruct complex documentation, learn new frameworks in days, and continuously adopt modern best practices across full-stack ecosystems.',
      badge: 'Future-Ready Mindset'
    }
  ];

  return (
    <section className="py-24 bg-[#FFF1F4] relative border-b border-[#FBCFE8] dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE4EC] border border-[#FBCFE8] text-[#E83E76] text-xs font-bold mb-3 shadow-xs">
            <BrainCircuit className="w-4 h-4 text-[#F45B8D]" />
            <span>The Modern Engineering Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#24151D] tracking-tight">
            Embracing the AI Shift in Software Engineering
          </h2>
          <p className="text-[#6B5561] text-base sm:text-lg mt-3 font-medium">
            AI is redefining how software is built. Here is how I turn this shift into a distinct engineering strength for the teams I join.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((p, idx) => (
            <div 
              key={p.title}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#FBCFE8] shadow-sm hover:border-[#F45B8D] hover:shadow-lg hover:shadow-[#F45B8D]/15 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-xs font-mono font-black text-[#E83E76] bg-[#FFE4EC] px-2.5 py-0.5 rounded-lg border border-[#FBCFE8]">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FFF1F4] text-[#E83E76] border border-[#FBCFE8]">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#24151D] mb-2.5">
                  {p.title}
                </h3>
                <p className="text-sm text-[#6B5561] leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#FBCFE8]/60 flex items-center gap-2 text-xs font-bold text-[#E83E76]">
                <CheckCircle2 className="w-4 h-4 text-[#F45B8D]" />
                <span>Production tested with modern full-stack workflows</span>
              </div>
            </div>
          ))}
        </div>

        {/* Confidence Quote Box */}
        <div className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl bg-white border border-[#FBCFE8] shadow-sm text-center">
          <p className="text-sm sm:text-base font-bold text-[#24151D] leading-relaxed">
            "AI doesn't replace software engineers—it replaces engineers who don't know how to leverage AI. I combine modern AI-augmented productivity with fundamental computer science principles to build better products, faster."
          </p>
          <div className="text-xs font-extrabold text-[#F45B8D] mt-2">
            — Shivani Kapoor
          </div>
        </div>

      </div>
    </section>
  );
};
