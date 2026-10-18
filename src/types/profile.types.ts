export interface SocialLinks {
  github: string;
  linkedin?: string;
  email: string;
}

export interface DeveloperProfile {
  name: string;
  displayName: string;
  role: string;
  headline: string;
  bio: string[];
  location: string;
  email: string;
  availability: {
    status: boolean;
    text: string;
  };
  socials: SocialLinks;
  resumeFileName?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}
