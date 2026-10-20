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
    <section id="projects" className="py-24 relative dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf0f2] border border-[#f8d4da] text-[#9c3f4c] text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-[#9c3f4c]" />
            <span>Interview-Ready Production Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1f271c] tracking-tight">
            Featured Engineering Projects & Case Studies
          </h2>
          <p className="text-[#566051] text-base sm:text-lg mt-3">
            Every project demonstrates architectural trade-offs, system design choices, and real production engineering depth. Click any case study for the complete technical breakdown.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#2d3a29] text-[#faf8f5] shadow-xs'
                  : 'bg-white text-[#525b4e] hover:text-[#2d3a29] hover:bg-[#f6f0e7] border border-[#e4dcd0]'
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
              className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#e5dcd0] shadow-xs hover:shadow-xl hover:shadow-[#2d3a29]/6 hover:border-[#b8c9b3] transition-all duration-300 relative group overflow-hidden"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#fdf0f2] text-[#9c3f4c] border border-[#f8d4da] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#b84d5c]" />
                  <span>Featured Production App</span>
                </div>
              )}

              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#edf4eb] text-[#2f462a] border border-[#d3e3cf]">
                    {project.category.toUpperCase()}
                  </span>
                  <span className="text-xs text-[#70796e] font-medium">
                    Role: <strong className="text-[#2b3327] font-semibold">{project.role}</strong>
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#1f271c] group-hover:text-[#2d3a29] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#545e50] mt-2 line-clamp-2 leading-relaxed">
                  {project.subtitle}
                </p>

                {/* STAR Summary Banner (Warm Oat Beige) */}
                <div className="mt-5 p-4 rounded-xl bg-[#f7f2ea]/90 border border-[#e8ded2] space-y-2">
                  <div className="text-xs text-[#3a4235] leading-relaxed">
                    <strong className="text-[#8a2f3c] font-semibold">Problem: </strong>
                    <span className="text-[#555e50]">{project.problemStatement}</span>
                  </div>
                  <div className="text-xs text-[#3a4235] leading-relaxed">
                    <strong className="text-[#2a4224] font-semibold">Solution: </strong>
                    <span className="text-[#555e50]">{project.summary}</span>
                  </div>
                </div>

                {/* Tech Stack Pills (Warm Beige / Soft Sage) */}
                <div className="mt-5">
                  <div className="text-xs font-semibold text-[#8a9486] uppercase tracking-wider mb-2">
                    Primary Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#f5efe7] text-[#4b4337] border border-[#e6ded2]"
                        title={tech.why}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics Row */}
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-[#ede5da] pt-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-2.5 rounded-xl bg-[#faf6f0] border border-[#ebe2d6]">
                      <div className="text-sm sm:text-base font-extrabold text-[#1f271c]">
                        {metric.value}
                      </div>
                      <div className="text-[11px] text-[#717b6f] font-medium truncate mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-[#ede5da] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#edf4eb] hover:bg-[#e1ede0] text-[#293d25] border border-[#cbdec6] text-xs sm:text-sm font-semibold transition-all"
                >
                  <BookOpen className="w-4 h-4 text-[#395333]" />
                  <span>Deep Dive & Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[#646e60] hover:text-[#1f271c] rounded-xl hover:bg-[#f3ece2] transition-colors"
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
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#2d3a29] hover:bg-[#1f281d] text-[#faf8f5] text-xs font-semibold shadow-xs transition-all"
                      title="Open Live Deployed Application"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#f6d7dc]" />
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
