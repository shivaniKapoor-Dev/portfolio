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
      className="fixed inset-0 z-50 overflow-y-auto bg-[#1a2318]/40 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#faf8f5] border border-[#e5dcd0] rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden text-[#252e22]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-7 border-b border-[#e8dfd3] bg-[#f5efe6] flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#edf4eb] text-[#2d4428] border border-[#d2e2ce]">
                {project.category.toUpperCase()}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white text-[#4f574a] border border-[#e5dcd0]">
                Role: {project.role}
              </span>
              <span className="text-xs text-[#717b6e] font-medium">
                {project.timeline}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1f271c] tracking-tight">
              {project.title}
            </h2>
            <p className="text-[#555e51] text-sm sm:text-base mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2 text-[#717b6e] hover:text-[#1f271c] rounded-xl hover:bg-[#eadecf] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-8 divide-y divide-[#ece3d7]">
          
          {/* Quick Action Links & Metrics */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-0">
            <div className="flex items-center gap-2.5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#2d3a29] text-[#faf8f5] font-semibold text-sm rounded-xl hover:bg-[#1f281d] transition-colors shadow-xs"
                >
                  <ExternalLink className="w-4 h-4 text-[#f6d7dc]" />
                  <span>Open Live Application</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#384233] font-semibold text-sm rounded-xl hover:bg-[#f6f0e7] transition-colors border border-[#e4dcd0] shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            {/* Metrics Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {project.metrics.map((m) => (
                <div key={m.label} className="px-3 py-1.5 rounded-xl bg-white border border-[#e5dcd0] text-right shadow-xs">
                  <div className="text-xs font-bold text-[#1f271c]">{m.value}</div>
                  <div className="text-[11px] text-[#717b6e] font-medium">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 1: Problem & Architecture */}
          <div className="pt-6 space-y-5">
            <div>
              <h3 className="text-base font-bold text-[#1f271c] flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#a34753]" />
                The Problem & Engineering Requirement
              </h3>
              <p className="text-sm sm:text-base text-[#4f574a] leading-relaxed bg-[#f7f2ea]/90 p-4 sm:p-5 rounded-xl border border-[#e8ded2]">
                {project.problemStatement}
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#1f271c] flex items-center gap-2 mb-2">
                <Workflow className="w-4 h-4 text-[#395333]" />
                System Architecture & Design
              </h3>
              <p className="text-sm sm:text-base text-[#4f574a] leading-relaxed bg-[#edf4eb]/80 p-4 sm:p-5 rounded-xl border border-[#d5e4d2]">
                {project.architectureOverview}
              </p>
            </div>
          </div>

          {/* Section 2: Tech Stack Rationale Table */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-[#1f271c] flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-[#344b2f]" />
              Technology Stack & Architectural Rationale
            </h3>
            <p className="text-xs text-[#717b6e] mb-3.5">
              Every technology was chosen based on specific trade-offs and performance criteria:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.techStack.map((tech) => (
                <div 
                  key={tech.name} 
                  className="p-3.5 rounded-xl bg-white border border-[#e5dcd0] hover:border-[#b8c9b3] shadow-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-[#1f271c]">{tech.name}</span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#f4ede4] text-[#554d42] border border-[#e6ded2]">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#545e50] leading-normal">
                    {tech.why}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Hard Engineering Challenges & Solutions */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-[#1f271c] flex items-center gap-2 mb-3">
              <Cpu className="w-4 h-4 text-[#a34753]" />
              Key Technical Roadblocks Overcome
            </h3>
            <div className="space-y-4">
              {project.keyChallenges.map((challenge, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-[#e5dcd0] shadow-xs">
                  <div className="font-semibold text-[#1f271c] text-sm sm:text-base mb-2.5">
                    Challenge {i + 1}: {challenge.title}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-[#fdf2f4] p-3 rounded-xl border border-[#f9d5dc]">
                      <span className="text-[#8a2f3c] font-bold block mb-1">The Bottleneck / Risk:</span>
                      <p className="text-[#592c34] leading-relaxed">{challenge.problem}</p>
                    </div>
                    <div className="bg-[#edf4eb] p-3 rounded-xl border border-[#d5e4d2]">
                      <span className="text-[#2b4b24] font-bold block mb-1">The Engineering Fix:</span>
                      <p className="text-[#2c4027] leading-relaxed">{challenge.solution}</p>
                    </div>
                  </div>
                  <div className="mt-3 text-xs bg-[#f6f0e6] px-3.5 py-2.5 rounded-xl border border-[#e8ded2] text-[#4d4233] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3e6437] shrink-0" />
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
                <h3 className="text-base font-bold text-[#1f271c] flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#394a34]" />
                  Code Implementation ({project.codeSnippetPreview.filename})
                </h3>
                <span className="text-xs font-mono text-[#545e50] bg-[#f5eee4] px-2.5 py-0.5 rounded-md border border-[#e6ded2]">
                  {project.codeSnippetPreview.language}
                </span>
              </div>
              <pre className="p-4 rounded-xl bg-[#222b1f] font-mono text-xs sm:text-sm text-[#f6d7dc] overflow-x-auto border border-[#2d3a29] leading-relaxed shadow-inner">
                <code>{project.codeSnippetPreview.code}</code>
              </pre>
            </div>
          )}

          {/* Section 5: Interview Q&A Cheat Sheet */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-[#1f271c] flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-[#9c3f4c]" />
              How I Explain This Project in Interviews
            </h3>
            <div className="space-y-3">
              {project.interviewQnA.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-[#e5dcd0] shadow-xs">
                  <div className="text-sm font-bold text-[#1f271c] mb-2 flex items-start gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#fdf0f2] text-[#9c3f4c] border border-[#f8d4da] font-mono font-bold">Q</span>
                    <span>{item.question}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#545e50] pl-6 border-l-2 border-[#b8c9b3] leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#e8dfd3] bg-[#f5efe6] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#2d3a29] hover:bg-[#1f281d] text-[#faf8f5] font-semibold text-sm rounded-xl transition-colors shadow-xs"
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
};
