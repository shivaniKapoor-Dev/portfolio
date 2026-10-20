import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  HtmlLogo, 
  CssLogo, 
  JsLogo, 
  TsLogo, 
  ReactLogo, 
  NodeLogo, 
  MongoLogo, 
  PostgresLogo, 
  RedisLogo, 
  TailwindLogo, 
  GitLogo, 
  DockerLogo 
} from './TechLogos';
import { 
  Server, 
  Layout, 
  Database, 
  ShieldCheck, 
  Terminal,
  Cpu,
  Download,
  FileText,
  Sparkles
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const visualLogos = [
    { name: 'HTML5', logo: <HtmlLogo className="w-8 h-8" />, desc: 'Semantic Markup' },
    { name: 'CSS3', logo: <CssLogo className="w-8 h-8" />, desc: 'Responsive Design' },
    { name: 'JavaScript', logo: <JsLogo className="w-8 h-8" />, desc: 'ES6+ & Async' },
    { name: 'TypeScript', logo: <TsLogo className="w-8 h-8" />, desc: 'Strict Typing' },
    { name: 'React 19', logo: <ReactLogo className="w-8 h-8" />, desc: 'Modern Hooks & SPAs' },
    { name: 'Node.js', logo: <NodeLogo className="w-8 h-8" />, desc: 'High-Throughput APIs' },
    { name: 'MongoDB', logo: <MongoLogo className="w-8 h-8" />, desc: 'Mongoose & Aggregations' },
    { name: 'PostgreSQL', logo: <PostgresLogo className="w-8 h-8" />, desc: 'Prisma ORM & SQL' },
    { name: 'Redis', logo: <RedisLogo className="w-8 h-8" />, desc: 'Locks & In-Memory Cache' },
    { name: 'Tailwind CSS', logo: <TailwindLogo className="w-8 h-8" />, desc: 'Utility Design Tokens' },
    { name: 'Git & GitHub', logo: <GitLogo className="w-8 h-8" />, desc: 'CI/CD & Version Control' },
    { name: 'Docker', logo: <DockerLogo className="w-8 h-8" />, desc: 'Containers & Compose' },
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-5 h-5 text-[#F45B8D]" />;
      case 'Layout': return <Layout className="w-5 h-5 text-[#F45B8D]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#F45B8D]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#F45B8D]" />;
      default: return <Cpu className="w-5 h-5 text-[#F45B8D]" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#FFE4EC]/50 relative border-t border-[#FBCFE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF1F4] border border-[#FBCFE8] text-[#E83E76] text-xs font-bold mb-3 shadow-xs">
            <Terminal className="w-3.5 h-3.5 text-[#F45B8D]" />
            <span>Technologies & Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#24151D] tracking-tight">
            Technical Stack & Tooling
          </h2>
          <p className="text-[#6B5561] text-base sm:text-lg mt-3 font-medium">
            Production-grade technologies I use daily to build robust, scalable, and responsive web systems.
          </p>
        </div>

        {/* 1. VISUAL TECH LOGO GRID (What I Use in Seconds) */}
        <div className="mb-16">
          <div className="text-xs font-bold text-[#E83E76] uppercase tracking-wider mb-4 text-center">
            Core Technologies & Real-World Stacks
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {visualLogos.map((item) => (
              <div 
                key={item.name}
                className="p-4 rounded-2xl bg-white border border-[#FBCFE8] hover:border-[#F45B8D] shadow-sm hover:shadow-md hover:shadow-[#F45B8D]/15 transition-all flex flex-col items-center text-center group"
              >
                <div className="mb-2 group-hover:scale-115 transition-transform">
                  {item.logo}
                </div>
                <div className="text-sm font-extrabold text-[#24151D]">
                  {item.name}
                </div>
                <div className="text-[11px] text-[#6B5561] font-semibold mt-0.5">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. CATEGORIZED DEPTH */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div 
              key={category.title}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#FBCFE8] shadow-sm hover:border-[#F45B8D] transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl border border-[#FBCFE8] bg-[#FFE4EC] shadow-xs">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#24151D]">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3.5">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-[#FFF1F4] border border-[#FBCFE8] hover:border-[#F45B8D] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-[#24151D]">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                        skill.level === 'Advanced' 
                          ? 'bg-[#FFE4EC] text-[#E83E76] border border-[#FBCFE8]' 
                          : 'bg-[#FCE7F3] text-[#6B5561] border border-[#FBCFE8]'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B5561] leading-relaxed font-medium">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Resume Download Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#FBCFE8] shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#FFE4EC] border border-[#FBCFE8] flex items-center justify-center text-[#F45B8D] shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#24151D]">
                Want the Complete Technical Summary?
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5561] font-medium mt-0.5">
                Download my verified 1-page PDF resume with full project breakdowns, contact details, and technical stack.
              </p>
            </div>
          </div>

          <a
            href="./Shivani_Kapoor_Resume.pdf"
            download="Shivani_Kapoor_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F45B8D] hover:bg-[#E83E76] text-white font-extrabold text-sm rounded-xl shadow-md shadow-[#F45B8D]/25 transition-all hover:scale-103 shrink-0"
          >
            <Download className="w-4 h-4 text-white" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
