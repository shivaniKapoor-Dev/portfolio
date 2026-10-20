import React, { useEffect } from 'react';
import { ProjectCaseStudy } from '../types';
import { GithubIcon } from './Icons';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Layers, 
  HelpCircle, 
  Code2, 
  Workflow
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-[#24151D]/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white border border-[#FBCFE8] rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden text-[#24151D]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-7 border-b border-[#FBCFE8] bg-[#FFE4EC] flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FFF1F4] text-[#E83E76] border border-[#FBCFE8]">
                {project.category.toUpperCase()}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white text-[#24151D] border border-[#FBCFE8]">
                Role: {project.role}
              </span>
              <span className="text-xs text-[#6B5561] font-semibold">
                {project.timeline}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#24151D] tracking-tight">
              {project.title}
            </h2>
            <p className="text-[#6B5561] text-sm sm:text-base mt-1 font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2 text-[#6B5561] hover:text-[#24151D] rounded-xl hover:bg-[#FCE7F3] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-8 divide-y divide-[#FBCFE8]/60 bg-[#FFF1F4]/30">
          
          {/* Quick Action Links & Metrics */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-0">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#F45B8D] text-white font-bold text-sm rounded-xl hover:bg-[#E83E76] transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                  <span>Open Live Application</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#24151D] font-bold text-sm rounded-xl hover:bg-[#FFE4EC] transition-colors border border-[#FBCFE8] shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            {/* Metrics Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {project.metrics.map((m) => (
                <div key={m.label} className="px-3 py-1.5 rounded-xl bg-white border border-[#FBCFE8] text-right shadow-xs">
                  <div className="text-xs font-black text-[#24151D]">{m.value}</div>
                  <div className="text-[11px] text-[#6B5561] font-semibold">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 1: Problem & Architecture */}
          <div className="pt-6 space-y-5">
            <div>
              <h3 className="text-base font-bold text-[#24151D] flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F45B8D]" />
                The Problem & Engineering Requirement
              </h3>
              <p className="text-sm sm:text-base text-[#6B5561] leading-relaxed bg-white p-4 sm:p-5 rounded-xl border border-[#FBCFE8] font-medium shadow-xs">
                {project.problemStatement}
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#24151D] flex items-center gap-2 mb-2">
                <Workflow className="w-4 h-4 text-[#F45B8D]" />
                System Architecture & Design
              </h3>
              <p className="text-sm sm:text-base text-[#6B5561] leading-relaxed bg-white p-4 sm:p-5 rounded-xl border border-[#FBCFE8] font-medium shadow-xs">
                {project.architectureOverview}
              </p>
            </div>
          </div>

          {/* Section 2: Tech Stack Rationale Table */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-[#24151D] flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-[#F45B8D]" />
              Technology Stack & Architectural Rationale
            </h3>
            <p className="text-xs text-[#6B5561] mb-3.5 font-medium">
              Every technology was chosen based on specific trade-offs and performance criteria:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.techStack.map((tech) => (
                <div 
                  key={tech.name} 
                  className="p-3.5 rounded-xl bg-white border border-[#FBCFE8] hover:border-[#F45B8D] shadow-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-[#24151D]">{tech.name}</span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#FFE4EC] text-[#E83E76] border border-[#FBCFE8]">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B5561] leading-normal font-medium">
                    {tech.why}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Hard Engineering Challenges & Solutions */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-[#24151D] flex items-center gap-2 mb-3">
              <Cpu className="w-4 h-4 text-[#E83E76]" />
              Key Technical Roadblocks Overcome
            </h3>
            <div className="space-y-4">
              {project.keyChallenges.map((challenge, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-[#FBCFE8] shadow-xs">
                  <div className="font-bold text-[#24151D] text-sm sm:text-base mb-2.5">
                    Challenge {i + 1}: {challenge.title}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-[#FFE4EC] p-3 rounded-xl border border-[#FBCFE8]">
                      <span className="text-[#E83E76] font-black block mb-1">The Bottleneck / Risk:</span>
                      <p className="text-[#24151D] leading-relaxed font-medium">{challenge.problem}</p>
                    </div>
                    <div className="bg-[#FFF1F4] p-3 rounded-xl border border-[#FBCFE8]">
                      <span className="text-[#F45B8D] font-black block mb-1">The Engineering Fix:</span>
                      <p className="text-[#24151D] leading-relaxed font-medium">{challenge.solution}</p>
                    </div>
                  </div>
                  <div className="mt-3 text-xs bg-[#FCE7F3] px-3.5 py-2.5 rounded-xl border border-[#FBCFE8] text-[#E83E76] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F45B8D] shrink-0" />
                    <span><strong>Engineering Principle:</strong> {challenge.engineeringTakeaway}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Production Code Snippet */}
          {project.codeSnippetPreview && (
            <div className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-[#24151D] flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#F45B8D]" />
                  Code Implementation ({project.codeSnippetPreview.filename})
                </h3>
                <span className="text-xs font-mono font-bold text-[#E83E76] bg-[#FFE4EC] px-2.5 py-0.5 rounded-md border border-[#FBCFE8]">
                  {project.codeSnippetPreview.language}
                </span>
              </div>
              <pre className="p-4 rounded-xl bg-[#24151D] font-mono text-xs sm:text-sm text-[#F9A8C4] overflow-x-auto border border-[#24151D] leading-relaxed shadow-inner">
                <code>{project.codeSnippetPreview.code}</code>
              </pre>
            </div>
          )}

          {/* Section 5: Interview Q&A Cheat Sheet */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-[#24151D] flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-[#F45B8D]" />
              How I Explain This Project in Interviews
            </h3>
            <div className="space-y-3">
              {project.interviewQnA.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-[#FBCFE8] shadow-xs">
                  <div className="text-sm font-bold text-[#24151D] mb-2 flex items-start gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#FFE4EC] text-[#E83E76] border border-[#FBCFE8] font-mono font-bold">Q</span>
                    <span>{item.question}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#6B5561] pl-6 border-l-2 border-[#F45B8D] leading-relaxed font-medium">
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#FBCFE8] bg-[#FFE4EC] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#F45B8D] hover:bg-[#E83E76] text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
};
