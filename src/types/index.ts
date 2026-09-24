export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email" | "twitter" | "external";
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  status: string;
  bio: string[];
  email: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface SkillCategory {
  category: string;
  description?: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  featured: boolean;
  category?: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  duration: string;
  location?: string;
  description: string[];
  technologies?: string[];
  link?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
