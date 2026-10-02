export interface ProjectStep {
  label: string;
  subtext: string;
  icon: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Machine Learning' | 'Computer Vision' | 'Web & AI';
  tags: string[];
  problem: string;
  approach: string[];
  techStack: {
    name: string;
    role: string;
  }[];
  outcome: string;
  resumeBullets: string[];
  architectureSteps: ProjectStep[];
  visualType: 'fraud-network' | 'learning-matrix' | 'emotion-camera';
  status: 'Completed' | 'Research Prototype';
  repoStatus: 'Repository coming soon' | 'Available on request';
}

export interface SkillItem {
  name: string;
  applicationContext: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface Achievement {
  id: string;
  rankBadge: string;
  title: string;
  organization: string;
  year: string;
  type: 'Podium Finish' | 'National Record Hackathon' | 'Technical Competition';
  description: string;
  tag: string;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  score: string;
  scoreLabel: string;
  status: string;
  details: string;
  keyCoursework?: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuerOrType: string;
  credentialTag: string;
  category: 'AI / ML' | 'Cloud' | 'Development' | 'Data Science';
}

export interface PersonalInfo {
  name: string;
  title: string;
  subDescriptor: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  summary: string;
  availability: string;
  currentRole: string;
  cgpa: string;
}
