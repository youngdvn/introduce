export interface TechStackJustification {
  tech: string;
  category: string;
  reason: string;
}

export interface FeatureDetail {
  title: string;
  description: string;
}

export interface TechnicalChallenge {
  title: string;
  description: string;
  solution: string;
}

export interface ProjectScreenshot {
  url: string;
  caption: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  techStackDetails?: TechStackJustification[];
  mainFeatures?: FeatureDetail[];
  architecture?: {
    summary: string;
    flow: string[];
  };
  challenges?: TechnicalChallenge[];
  lessonsLearned?: string[];
  screenshots?: ProjectScreenshot[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: "In Development / Beta" | "Completed" | "Planned";
  tags: string[];
  features: string[];
  thumbnail: string;
  gallery?: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  caseStudy?: ProjectCaseStudy;
}
