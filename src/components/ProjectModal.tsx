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
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-7 border-b border-slate-200 bg-slate-50/90 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                {project.category.toUpperCase()}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white text-slate-800 border border-slate-200">
                Role: {project.role}
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                {project.timeline}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2 text-slate-400 hover:text-slate-900 rounded-xl hover:bg-slate-200/80 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-8 divide-y divide-slate-100">
          
          {/* Quick Action Links & Metrics */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-0">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-600 to-rose-700 text-white font-bold text-sm rounded-xl hover:from-rose-500 hover:to-rose-600 transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4 text-rose-200" />
                  <span>Open Live Application</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-800 font-bold text-sm rounded-xl hover:bg-slate-50 transition-colors border border-slate-200 shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            {/* Metrics Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {project.metrics.map((m) => (
                <div key={m.label} className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-right shadow-xs">
                  <div className="text-xs font-black text-slate-950">{m.value}</div>
                  <div className="text-[11px] text-slate-500 font-semibold">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 1: Problem & Architecture */}
          <div className="pt-6 space-y-5">
            <div>
              <h3 className="text-base font-bold text-slate-950 flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                The Problem & Engineering Requirement
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 font-medium">
                {project.problemStatement}
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-950 flex items-center gap-2 mb-2">
                <Workflow className="w-4 h-4 text-emerald-600" />
                System Architecture & Design
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 font-medium">
                {project.architectureOverview}
              </p>
            </div>
          </div>

          {/* Section 2: Tech Stack Rationale Table */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-slate-950 flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-indigo-600" />
              Technology Stack & Architectural Rationale
            </h3>
            <p className="text-xs text-slate-500 mb-3.5 font-medium">
              Every technology was chosen based on specific trade-offs and performance criteria:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.techStack.map((tech) => (
                <div 
                  key={tech.name} 
                  className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-slate-950">{tech.name}</span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-normal font-medium">
                    {tech.why}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Hard Engineering Challenges & Solutions */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-slate-950 flex items-center gap-2 mb-3">
              <Cpu className="w-4 h-4 text-rose-600" />
              Key Technical Roadblocks Overcome
            </h3>
            <div className="space-y-4">
              {project.keyChallenges.map((challenge, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="font-bold text-slate-950 text-sm sm:text-base mb-2.5">
                    Challenge {i + 1}: {challenge.title}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-rose-50 p-3 rounded-xl border border-rose-200">
                      <span className="text-rose-800 font-black block mb-1">The Bottleneck / Risk:</span>
                      <p className="text-rose-950 leading-relaxed font-medium">{challenge.problem}</p>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                      <span className="text-emerald-800 font-black block mb-1">The Engineering Fix:</span>
                      <p className="text-emerald-950 leading-relaxed font-medium">{challenge.solution}</p>
                    </div>
                  </div>
                  <div className="mt-3 text-xs bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
                <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-slate-700" />
                  Code Implementation ({project.codeSnippetPreview.filename})
                </h3>
                <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                  {project.codeSnippetPreview.language}
                </span>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 font-mono text-xs sm:text-sm text-rose-200 overflow-x-auto border border-slate-800 leading-relaxed shadow-inner">
                <code>{project.codeSnippetPreview.code}</code>
              </pre>
            </div>
          )}

          {/* Section 5: Interview Q&A Cheat Sheet */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-slate-950 flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              How I Explain This Project in Interviews
            </h3>
            <div className="space-y-3">
              {project.interviewQnA.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-sm font-bold text-slate-950 mb-2 flex items-start gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-mono font-bold">Q</span>
                    <span>{item.question}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 pl-6 border-l-2 border-rose-400 leading-relaxed font-medium">
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
};
