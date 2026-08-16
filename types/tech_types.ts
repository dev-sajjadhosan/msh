// Standard proficiency level options
export type ProgressLabel = "Advanced" | "Intermediate" | "Basic";

// Individual technology / skill item
export interface TechItem {
  name: string;
  icon: string;
  link: string;
  progress_label: ProgressLabel;
}

// Tech category grouping
export interface TechCategory {
  name: string;
  techs: TechItem[];
}

// Complete tech stack array type
export type TechStack = TechCategory[];