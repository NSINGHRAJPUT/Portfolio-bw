export type AiExperienceKey =
  | "aiChat"
  | "projectEstimator"
  | "proposalGenerator"
  | "resumeReview"
  | "businessIdeaValidator"
  | "websiteAudit"
  | "promptGenerator"
  | "contentGenerator";

export interface AiExperienceDefinition {
  key: AiExperienceKey;
  title: string;
  path: string;
  purpose: string;
  input: string[];
  output: string[];
  primaryValue: string;
  conversionGoal: string;
  architectureNotes: string[];
  guardrails: string[];
}

export interface AiArchitectureLayer {
  name: string;
  responsibility: string;
  modules: string[];
}
