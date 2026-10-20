export type ProjectCategory = 'all' | 'fullstack' | 'backend' | 'frontend' | 'ai-automation';

export interface TechRationale {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'architecture';
  why: string;
}

export interface TechnicalChallenge {
  title: string;
  problem: string;
  solution: string;
  engineeringTakeaway: string;
}

export interface MetricHighlight {
  label: string;
  value: string;
  description: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'fullstack' | 'backend' | 'frontend' | 'ai-automation';
  featured: boolean;
  role: string;
  timeline: string;
  liveUrl?: string;
  githubUrl?: string;
  codeSnippetPreview?: {
    filename: string;
    language: string;
    code: string;
  };
  summary: string;
  problemStatement: string;
  architectureOverview: string;
  techStack: TechRationale[];
  keyChallenges: TechnicalChallenge[];
  metrics: MetricHighlight[];
  keyTakeaways: string[];
  interviewQnA: {
    question: string;
    answer: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  workType: 'Full-time' | 'Internship' | 'Contract';
  description: string;
  achievements: string[];
  techUsed: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    context: string;
  }[];
}
