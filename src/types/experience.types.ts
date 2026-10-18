export interface ExperienceItem {
  id: string;
  type: "work" | "education" | "milestone";
  title: string;
  organization: string;
  period: string;
  description: string;
  skills?: string[];
  current?: boolean;
}
