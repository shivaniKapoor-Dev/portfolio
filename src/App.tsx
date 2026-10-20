import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { InterviewGuideSection } from './components/InterviewGuideSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectCaseStudy } from './types';

export function App() {
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectCaseStudy | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-rose-500/20 selection:text-rose-900">
      {/* Top Fixed Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <ProjectsSection onSelectProject={(p) => setActiveProjectModal(p)} />
        <SkillsSection />
        <ExperienceSection />
        <InterviewGuideSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Deep Dive Modal */}
      <ProjectModal 
        project={activeProjectModal} 
        onClose={() => setActiveProjectModal(null)} 
      />
    </div>
  );
}

export default App;
