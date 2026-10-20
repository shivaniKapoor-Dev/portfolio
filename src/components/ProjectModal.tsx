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
  TrendingUp,
  Shield,
  Workflow
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-cyan-950/50 max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-7 border-b border-slate-800 bg-slate-950/70 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {project.category.toUpperCase()}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-300">
                Role: {project.role}
              </span>
              <span className="text-xs text-slate-400">
                {project.timeline}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-8 divide-y divide-slate-800/80">
          
          {/* Quick Action Links & Metrics */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-0">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-slate-950 font-bold text-sm rounded-lg hover:bg-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live Application</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-200 font-semibold text-sm rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            {/* Metrics Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {project.metrics.map((m) => (
                <div key={m.label} className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-right">
                  <div className="text-xs font-semibold text-cyan-400">{m.value}</div>
                  <div className="text-[11px] text-slate-400">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 1: Problem & Architecture */}
          <div className="pt-6 space-y-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                The Problem & Engineering Requirement
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                {project.problemStatement}
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                <Workflow className="w-4 h-4 text-cyan-400" />
                System Architecture & Design
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                {project.architectureOverview}
              </p>
            </div>
          </div>

          {/* Section 2: Tech Stack Rationale Table (Crucial for Interviews) */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-indigo-400" />
              Technology Stack & Architectural Rationale
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Every technology was chosen based on specific trade-offs and performance requirements:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.techStack.map((tech) => (
                <div 
                  key={tech.name} 
                  className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-cyan-300">{tech.name}</span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    {tech.why}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Hard Engineering Challenges & Solutions */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2 mb-3">
              <Cpu className="w-4 h-4 text-rose-400" />
              Key Technical Roadblocks Overcome
            </h3>
            <div className="space-y-4">
              {project.keyChallenges.map((challenge, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="font-semibold text-slate-100 text-sm sm:text-base mb-2 text-rose-300">
                    Challenge {i + 1}: {challenge.title}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-red-500/20">
                      <span className="text-red-400 font-bold block mb-1">The Bottleneck / Risk:</span>
                      <p className="text-slate-300">{challenge.problem}</p>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-emerald-500/20">
                      <span className="text-emerald-400 font-bold block mb-1">The Engineering Fix:</span>
                      <p className="text-slate-300">{challenge.solution}</p>
                    </div>
                  </div>
                  <div className="mt-3 text-xs bg-slate-900 px-3 py-2 rounded-lg border border-slate-800 text-cyan-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
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
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  Code Implementation Architecture ({project.codeSnippetPreview.filename})
                </h3>
                <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  {project.codeSnippetPreview.language}
                </span>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 font-mono text-xs sm:text-sm text-cyan-200 overflow-x-auto border border-slate-800 leading-relaxed">
                <code>{project.codeSnippetPreview.code}</code>
              </pre>
            </div>
          )}

          {/* Section 5: Interview Q&A Cheat Sheet (Hiring Manager Questions) */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              How I Explain This Project in Interviews
            </h3>
            <div className="space-y-3">
              {project.interviewQnA.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/90 border border-slate-800">
                  <div className="text-sm font-bold text-amber-300 mb-2 flex items-start gap-2">
                    <span className="text-xs px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono">Q</span>
                    <span>{item.question}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 pl-6 border-l-2 border-amber-500/30 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/90 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-xl transition-colors"
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
};
