import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCaseStudy, ProjectCategory } from '../types';
import { GithubIcon } from './Icons';
import { 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  Sparkles,
  BookOpen
} from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend & Systems' },
    { id: 'frontend', label: 'Frontend & WebGL' },
    { id: 'ai-automation', label: 'AI & Automation' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative dot-grid bg-[#FFF1F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE4EC] border border-[#FBCFE8] text-[#E83E76] text-xs font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F45B8D]" />
            <span>Interview-Ready Production Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#24151D] tracking-tight">
            Featured Engineering Projects & Case Studies
          </h2>
          <p className="text-[#6B5561] text-base sm:text-lg mt-3 font-medium">
            Every project demonstrates architectural trade-offs, system design choices, and real production engineering depth. Click any case study for the complete technical breakdown.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#F45B8D] text-white shadow-md shadow-[#F45B8D]/25 scale-102'
                  : 'bg-white text-[#6B5561] hover:text-[#F45B8D] hover:bg-[#FFE4EC] border border-[#FBCFE8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#FBCFE8] shadow-sm hover:shadow-xl hover:shadow-[#F45B8D]/15 hover:border-[#F45B8D] transition-all duration-300 relative group overflow-hidden"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-black bg-[#FFE4EC] text-[#E83E76] border border-[#FBCFE8] flex items-center gap-1 shadow-xs">
                  <Sparkles className="w-3 h-3 text-[#F45B8D]" />
                  <span>Featured Production App</span>
                </div>
              )}

              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FFF1F4] text-[#E83E76] border border-[#FBCFE8]">
                    {project.category.toUpperCase()}
                  </span>
                  <span className="text-xs text-[#6B5561] font-semibold">
                    Role: <strong className="text-[#24151D] font-bold">{project.role}</strong>
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-black text-[#24151D] group-hover:text-[#F45B8D] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6B5561] mt-2 line-clamp-2 leading-relaxed font-medium">
                  {project.subtitle}
                </p>

                {/* STAR Summary Banner */}
                <div className="mt-5 p-4 rounded-xl bg-[#FFF1F4] border border-[#FBCFE8] space-y-2">
                  <div className="text-xs leading-relaxed">
                    <strong className="text-[#E83E76] font-bold">Problem: </strong>
                    <span className="text-[#6B5561] font-medium">{project.problemStatement}</span>
                  </div>
                  <div className="text-xs leading-relaxed">
                    <strong className="text-[#F45B8D] font-bold">Solution: </strong>
                    <span className="text-[#6B5561] font-medium">{project.summary}</span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-5">
                  <div className="text-xs font-bold text-[#6B5561]/80 uppercase tracking-wider mb-2">
                    Primary Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#FFE4EC] text-[#24151D] border border-[#FBCFE8]"
                        title={tech.why}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics Row */}
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-[#FBCFE8]/60 pt-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-2.5 rounded-xl bg-[#FFF1F4] border border-[#FBCFE8]">
                      <div className="text-sm sm:text-base font-black text-[#24151D]">
                        {metric.value}
                      </div>
                      <div className="text-[11px] text-[#6B5561] font-semibold truncate mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-[#FBCFE8]/60 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFE4EC] hover:bg-[#FCE7F3] text-[#E83E76] border border-[#FBCFE8] text-xs sm:text-sm font-bold transition-all hover:scale-102"
                >
                  <BookOpen className="w-4 h-4 text-[#F45B8D]" />
                  <span>Deep Dive & Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[#6B5561] hover:text-[#24151D] rounded-xl hover:bg-[#FFE4EC] transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F45B8D] hover:bg-[#E83E76] text-white text-xs font-bold shadow-xs transition-all hover:scale-102"
                      title="Open Live Deployed Application"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
