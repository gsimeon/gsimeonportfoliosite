
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
